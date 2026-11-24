---
title: Scaling for a&nbsp;sustainable path towards accessibility
description:
  How layers of automations and processes can help making complex application
  accessible.
date: 2026-10-26
minRead: 11
articleIndex: 0
---

Perfect is the enemy of good, and I&nbsp;learned it the hard way. In 2023, when
I&nbsp;set up the Product Accessibility Working Group at GitLab, I&nbsp;wanted
to find the best way to run automated accessibility tests for our product. It
turned out that in a&nbsp;codebase as complex as GitLab's is, accessibility only
holds up at scale, with layers of protection. The layers are both tools and
people. None of the layers is perfect on its own, but together, they result in
fewer regressions and better user experience.

## Good intentions are not enough

As I&nbsp;was onboarding as a&nbsp;new Frontend Engineer, I&nbsp;wasn't sure
what the state of things was. There were dedicated individuals working with
accessibility in mind. There was an evolving design system that was supposed to
guarantee a&nbsp;good baseline.
a&nbsp;<abbr title="Voluntary Product Accessibility Template">VPAT</abbr> was
prepared for every major version. However, it became clear to me that there
wasn't any designated person or a&nbsp;team who knew the whole picture. We
didn't have any guardrails or automations filtering incoming regressions. For
a&nbsp;big open-core project with hundreds of engineers and community
contributions, we didn't have a&nbsp;way to improve accessibility in
a&nbsp;sustainable way. That is what moved me to take all steps necessary to
have the Product Accessibility Working Group become a&nbsp;reality.

## Choosing tools

The two main goals for our Working Group were tests targeting components of the
design system and feature tests in the main application. But with an application
as complex as GitLab, I&nbsp;had to first explore all the possible options for
such automation. Tool exploration is definitely a&nbsp;topic in itself and
a&nbsp;great material for another article. I&nbsp;focused on the limitations of
each tool and how easy it was to set up and use. The design system repository
and the main application repository were very different, but there had to be
a&nbsp;common way of assessing accessibility violations.

We decided to use the axe-core testing engine, which is the most versatile. With
axe-core, you can approach problems in many ways, like we did while testing our
design system. Initially we opted for Cypress end-to-end tests with the
cypress-axe plugin. Each component had to have test cases written for each
variant and state to maximise the test coverage. Later on, we shifted towards
a&nbsp; Storybook integration. Because having Storybook entries was in the
definition of done for each component, we could take advantage of them and run
the tests in a&nbsp; <abbr title="Continuous Integration">CI</abbr> job without
a&nbsp;need to write any test cases.

To speed up the adoption of automated tests, I&nbsp;reviewed available paid
tools that let you connect your entire test suite and run accessibility checks
on each test. It seemed a&nbsp;promising solution, one that required only some
time for initial setup to see the effects.

However, you should know your own limitations as well as your tools. For
example, is your testing library supported by the provider you are considering?
What is the volume of your tests? How often and in which context do they run?
Ultimately, we decided to extend how we used open-source tools we had already
been using, instead of introducing new ones.

## Why the perfect test didn't fit

Feature tests sounded like a&nbsp;great idea, because they included components
from both
<abbr title="<abbr>HTML</abbr> Abstraction Markup Language">HAML</abbr> and
Vue.js files that made up the whole views of the application. We could then work
around the lack of <abbr>HAML</abbr> tooling and some instances of elements
composed in Ruby on Rails. Having feature tests would also make sure the
integration of each design system component was tested. However, these tests are
written around features and their functionality. There wasn’t an easy way to map
how much of the UI&nbsp;is covered with them. Their loose structure also meant
that one spec might exercise a&nbsp;single component, while another walks
a&nbsp;flow across several views. In the end, some views were covered three
times and others not at all.

The other complication was the variation in data&nbsp;samples and possible
flakiness of tests. The feature tests are set up in a&nbsp;way, where the
UI&nbsp;you test depends on the data&nbsp;each spec happens to create. To save
on <abbr>CI</abbr> time, it often creates only the minimum information needed
for the components to render. Which in turn further diminishes the coverage that
is possible to achieve. a&nbsp;coupling of accessibility checks to functionality
means that a&nbsp;failing test (flaky or not) might not reach the point when the
accessibility check happens. It may simply never run. If any test case is
quarantined, we lose our regression net.

These problems were compounded by the fact that the test output was disconnected
from frontend components. Complex UI&nbsp;components that rendered into
a&nbsp;series of general <abbr>HTML</abbr> elements made it harder to pinpoint
where violations actually happened. Given that these feature tests were written
in Ruby, but sat in a&nbsp; frontend toolkit, GitLab’s frontend engineers
struggled to adopt them and make them a&nbsp;part of their usual workflow. Sure,
the tool had its limits, but ultimately it did not fit how our teams worked.

After seeing a&nbsp;low adoption of feature tests, we decided to pivot to
a&nbsp;different approach. By focusing on golden user journeys, we opted to
cover end-to-end user workflows defined by Product Designers. This meant
sacrificing the volume of components and their states we could cover. That's
why, at the same time, we made sure to build a&nbsp;system of layers that would
gradually filter out violations.

## Layers that cover each other's gaps

The layers of accessibility automations can be divided along two dimensions:
blind spots, and enforcement. They work together because blind spots of
different layers overlap only partially. Layers that can be skipped are backed
up by layers that can’t be. Some layers are optional (linting or the browser
extension) or only observed (monitoring). Others are blocking: Storybook and
feature tests run in <abbr>CI</abbr> and stop a&nbsp;merge when they find
a&nbsp;violation.

<div class="table-container">
  <table>
    <tr>
      <th scope="col">Tool </th>
      <th scope="col">When to use</th>
      <th scope="col">Coverage</th>
      <th scope="col">Feedback timing</th>
      <th scope="col">Enforcement</th>
    </tr>
    <tr>
      <th scope="row">linting</th>
      <td>while writing code</td>
      <td>JS, Vue, Markdown files</td>
      <td>real-time in editor</td>
      <td>optional </td>
    </tr>
    <tr>
      <th scope="row">Storybook tests</th>
      <td>component development, feature development</td>
      <td>Vue components in isolation</td>
      <td>local testing and <abbr>CI</abbr> pipeline on frontend changes</td>
      <td>blocking in <abbr>CI</abbr></td>
    </tr>
    <tr>
      <th scope="row">feature tests</th>
      <td>feature development</td>
      <td>complete user journeys, <abbr>HAML</abbr>, Vue, JS components</td>
      <td>local testing and <abbr>CI</abbr> pipeline on frontend changes</td>
      <td>blocking in <abbr>CI</abbr></td>
    </tr>
    <tr>
      <th scope="row">browser extension</th>
      <td>feature development, code review & debugging</td>
      <td>any page or part of the page</td>
      <td>manual, immediate</td>
      <td>advisory</td>
    </tr>
    <tr>
      <th scope="row">SiteSpeed monitoring</th>
      <td>production oversight</td>
      <td>key application pages</td>
      <td>continuous monitoring</td>
      <td>advisory</td>
    </tr>
    <caption>
      Source: Adapted from <a&nbsp;href="https://docs.gitlab.com/19.5/development/fe_guide/accessibility/#how-our-accessibility-tools-work-together" class="inline-link">Accessibility. How our accessibility tools work together</a&nbsp;href=>,
      GitLab Docs, with an added Enforcement column, licensed under <a&nbsp;href="https://creativecommons.org/licenses/by-sa/4.0/" class="inline-link">CC BY-Sa&nbsp;4.0</a&nbsp;href=>.
    </caption>
  </table>
</div>

Here is how we used each of these layers, along with their limitations and
advantages.

**Linting** offers the most immediate feedback to engineers, but it also comes
with quite a&nbsp;number of limitations. Because it works against source code,
not rendered <abbr>HTML</abbr>, the number of violations it can find is even
lower than what other automations offer. In case of more custom syntax, like
<abbr>HAML</abbr>, it also has limited tool options. In addition, design system
components need to be mapped to <abbr>HTML</abbr> elements for axeLinter, the
<abbr>VS</abbr> Code extension. From my experience, mapping may not be adaptable
enough to cover more flexible components. We made it the default recommended
extension for the project, but we had to accept not all contributors would use
it. Nonetheless, I&nbsp;have seen real results with new merge requests and code
reviews referencing the findings of axeLinter in <abbr>VS</abbr> Code.

Our **Storybook layer** consisted of two instances, one in the design system and
the other in the app's monorepo. This made sure we catch any violations as early
as possible and keep the output of the next bigger layer lean, because the
feature tests didn’t have to rediscover component-level problems. We decided to
additionally pair the accessibility plugin in the Storybook UI&nbsp;with a&nbsp;
test-runner with axe-core. This opened for us an option to automatically run
checks on all components in <abbr>CI</abbr>. Fixing test violations allowed us
to switch the <abbr>CI</abbr> job from "allowed to fail" to "completely
blocking". It’s a&nbsp;great help for frontend engineers, but it also has its
limitations. These tests can’t identify whether components are assembled into
a&nbsp;section that is accessible as a&nbsp;whole. Also, if a&nbsp;design system
is flexible enough, it can be hard to enforce that components are consumed in
a&nbsp;way that is accessible; for example: not every property is used and those
that are missing result in non-compliant code.

Our **feature test layer** meant we could follow the golden user journeys
defined by the UX Department, and not the scenarios following the functional
test suites. It gave us the option to cover complex UI&nbsp;interactions, with
multi-step processes and dynamic content. Engineers could run them locally,
while working on existing critical features. Feature tests can also run in the
<abbr>CI</abbr>, blocking any newly found regressions. They can bridge the gap
Storybook has - whether components put together and interactions between them
create accessible pages and follow complex ARIa&nbsp;patterns. However, creating
feature tests is a&nbsp;more elaborate process. It requires
product-area&nbsp;knowledge. It is quite heavy on resources, like
<abbr>CI</abbr> minutes or developers' time. It's not realistic to have
a&nbsp;high coverage on this level, but the coverage you get is detailed and can
run the checks after each scripted user interaction.

The **axe DevTools browser extension** is a&nbsp;great tool for quickly scanning
the whole page or its section during development of new features or fixing
violations. The extension highlights specific violations and their source and
allows reviewers to share them as feedback on merge requests. Unfortunately, it
is triggered manually, and we humans tend to forget things from time to time.
Also, some of the features of axe DevTools are only available in the pro
version. And with the free version, there is no way to track the adoption of the
tool.

There are many options for setting up accessibility **monitoring**, from
dedicated accessibility tools to observability solutions extended with the axe
package. The best option for GitLab was a&nbsp;Sitespeed setup that the frontend
department already used to monitor the app’s performance. I&nbsp;extended it
with an axe plugin. That gave us additional data, about how specific pages were
doing in terms of accessibility over time. Using Sitespeed opens the option of
integrating with Grafana&nbsp;dashboards or Slack integrations. I&nbsp;find it
to be a&nbsp; good option for the whole company, rather than engineering. If
your company has done a&nbsp;complete audit and you have results per page URL,
you can easily measure the effects of remediation efforts over time with
a&nbsp;monitoring tool like that. But keep in mind that it measures the results
on a&nbsp;page load and misses any violations happening after user interactions.

## The human layer

What all these layers of automations cannot do, is to see if the keyboard flow
is right, what the experience is like with a&nbsp;screen reader or if the page
makes sense as a&nbsp;whole. For that we need a&nbsp;person, to make sure we
have the full picture. The human layer works at three speeds: daily code
reviews, building documentation and training over time, and one-off
accessibility days. This level is the one that needs time and knowledge. It also
occurs late in the process of development. This is why the automated layer is
important, to lift some of that burden.

As a&nbsp;maintainer of the GitLab codebase, I&nbsp;saw how much code reviews
can speed up the adoption of the tools, but also the awareness about digital
accessibility. I&nbsp;made sure every time I&nbsp;left feedback, I&nbsp;backed
it up with a&nbsp;recording from a&nbsp; screen reader, a&nbsp;link to
documentation or <abbr>WCAG</abbr> criteria&nbsp;and with the explanation, how
the problem in the code translates to what people experience and which users are
affected. I&nbsp;was proud every time someone else mentioned my comments in
another review of theirs. The feedback got documented and no longer depended on
individual subject matter experts.

There is a&nbsp;lot of accessibility training out there and it might be hard to
choose the right thing for you. In a&nbsp;company with an already excellent
engineering culture, a&nbsp;basic training won't do much. The introductory
training we provided didn't gain much traction from engineering, though it was
a&nbsp;great hit with the other departments. a&nbsp;custom course with examples
from real testers with disabilities made all the difference. Based on our
automations and previous accessibility efforts, I&nbsp;was able to narrow down
common patterns that needed more in-depth knowledge. Thanks to that, our course
provider was able to build the curriculum around it.

The moment that glued all these pieces together was a&nbsp;dedicated
accessibility day we organised, when team members spent a&nbsp;whole day on
improving the accessibility of our product. We had designers, frontend and
backend engineers contributing to previously triaged and selected issues. As
a&nbsp;result, not only did our application improve, but so did open source
projects we depend on. Our engineers contributed to their codebases, making sure
those violations were gone. Many of the 108 fixes resulted in improved
components' patterns, additional documentation or complete component rewrites.

## What worked, what didn't, what I'd do differently

The layered enforcement with Storybook in <abbr>CI</abbr> paired with the human
aspects led to a&nbsp;clear improvement of the application's accessibility.
Since then, regressions have been caught early. I&nbsp;also noticed that more
teams were including accessibility considerations earlier in the process and
I&nbsp;was asked more often about the feedback before features were built.

Looking back at the journey my Working Group took, I&nbsp;see that the hard part
was staying in the experiment mindset. Narrowing the feature tests felt like
giving up the perfect solution. That's why the exploration phase is very
important, both in terms of discovering what is technically possible and which
solutions teams will actually adopt.

If you’re starting from zero, begin by mapping layers of the product, tools and
testing frameworks that are already used. This should be a&nbsp;guide to
experimenting with different options and checking which solution fits.

Creating a&nbsp;system like this takes time and team effort, and so does staying
accessible. One-off audits do not guarantee it, and in an ever-evolving system
it's nearly impossible to reach the perfect state. But a&nbsp;series of
imperfect guards and processes results in a&nbsp;sustainable path towards an
accessible application. The good thing is that a&nbsp;system like that can be
built over time. Even if you think you are starting from nothing, there's
a&nbsp;high chance you already have a&nbsp;testing framework that can be
extended to include accessibility checks.
