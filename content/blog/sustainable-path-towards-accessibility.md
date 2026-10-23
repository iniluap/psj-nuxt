---
title: Scaling for a sustainable path towards accessibility
description: How layers of automations and processes can help making complex application accessible.
date: 2026-10-26
minRead: 1
articleIndex: 0
---

Perfect is the enemy of good, and I learned it the hard way. In 2023, when I set up the Product Accessibility Working Group at GitLab,
I wanted to find the best way to run automated accessibility tests for our product. It turned out that in the codebase as complex as
GitLab's is, accessibility only holds up at scale, with layers of protection. The layers are both tools _and_ people. None of the layers
is perfect, but when put together, they result in fewer regressions and better user experience.

## Good intentions are not enough

As I was onboarding as a&nbsp;new Frontend Engineer, I wasn't sure what the state of things was. We had dedicated individuals working with
accessibility in mind. We had an evolving design system that was supposed to guarantee a&nbsp;good baseline. We had a&nbsp;VPAT for every major
version. It became clear to me that there wasn't any designated person or a&nbsp;team who knew the whole picture. We didn't have any guardrails
or automations filtering incoming regressions. For a&nbsp;big open core project with hundreds of engineers and community contributions, we
didn't have a&nbsp;way to improve accessibility in a&nbsp;sustainable way.

## Choosing tools

The two main avenues for our Working Group were tests targeting components of the design system and feature tests in the main application.
But with the application as complex as GitLab, I had to first explore all the possible options for such automation. Tool exploration is
definitely a&nbsp;topic in itself and a&nbsp;great material for another article. In a&nbsp;nutshell though, I was focusing on the limitations of each tool
and how easy it is to set it up and use. Each repository was different, but they all had to have a&nbsp;common way of assessing accessibility
violations.

We decided on using different axe-core based tools, of which there are many. a&nbsp;great example of different approaches was our design system.
Initially we opted for Cypress end-to-end tests with axe-core package. Each component had to have test cases written for each variant and
state to maximise the test coverage. But later on we shifted towards Storybook integration. Since having Storybook entries was in the
definition of done for each component, we could utilise them and run the tests in the CI job without a&nbsp;need to write any test cases.

To speed up the adoption of automated tests, I was considering paid tools that let you hook your entire test suite and run accessibility
checks on each test. It is a&nbsp;promising solution, where you only need some time for initial setup to see the effects. However, that is where
knowing your technical limitations and tools limitations plays a&nbsp;crucial role. An obvious aspect is whether your testing library is supported
by the provider you are considering. Another one might be the volume of your tests, how often and in which context they are run. For an open
core product with hundreds of engineers and hundreds of community contributors each day, that is a&nbsp;very important aspect to consider.
Ultimately, we decided to reuse existing open-source solutions we already had put in place.

## Why the perfect test didn't fit

Feature tests sounded like a&nbsp;great idea, because they included components from both HAML and Vue.js files that made up the whole views of
the application. We could then work around the lack of HAML tooling and some instances of elements composed in Ruby on Rails. They would also
make sure the integration of single design system components was tested. The problem though was that they are written around features and
their functionality. We didn't have an easy way to map how much of the UI is covered with them. Their loose structure also meant that one
spec might exercise a&nbsp;single component, while another walks a&nbsp;flow across several views. In the end, some views were covered three times
and others not at all.

The other aspect was the possible flakiness of the tests and variations in data samples. They are set up in a&nbsp;way, where the UI you test
depends on the data each spec happens to create. There was also a&nbsp;question of coupling accessibility checks to functionality. a&nbsp;failing test
(flaky or not) might not reach the point when the accessibility check happens. It may simply never run. If any such test case is quarantined
for any period of time, we lose our regression net.

These problems were compounded by the fact that the test output was disconnected from frontend components. Complex UI components rendering
into a&nbsp;series of general HTML elements made it harder to pinpoint where violations actually happened. Given that these feature tests were
written in Ruby, but sat in a&nbsp;frontend toolkit, our frontend engineers struggled to adopt them and make them a&nbsp;part of their usual workflow.
Sure, the tool had its limits, but ultimately it did not fit how our teams work.

After seeing a&nbsp;low adoption of feature tests, we decided to pivot to a&nbsp;different approach. By being very intentional and focusing on golden
user journeys, we opted to cover defined end-to-end user workflows across the platform. This meant sacrificing the volume of components and
their states we could cover. That's why at the same time, we made sure to build a&nbsp;system of layers that will gradually filter out violations.

## Layers that cover each other's gaps

The layers can be divided along two dimensions: blind spots, and enforcement. They work together because blind spots of different layers
overlap only partly. Layers that can be skipped are backed up by layers that can’t be. Some layers are optional (linting, the browser
extension) or only observe (monitoring). Others are blocking: Storybook and feature tests run in CI and stop a&nbsp;merge when they find a
violation.

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
      <td>local testing and CI pipeline on frontend changes</td>
      <td>blocking in CI</td>
    </tr>
    <tr>
      <th scope="row">feature tests</th>
      <td>feature development</td>
      <td>complete user journeys, HAML, Vue, JS components</td>
      <td>local testing and CI pipeline on frontend changes</td>
      <td>blocking in CI</td>
    </tr>
    <tr>
      <th scope="row">browser extension</th>
      <td>feature development, code review & debugging</td>
      <td>any page or part of the page</td>
      <td>manual, immediate</td>
      <td>advisory</td>
    </tr>
    <tr>
      <th scope="row">monitoring</th>
      <td>production oversight</td>
      <td>key application pages</td>
      <td>continuous monitoring</td>
      <td>advisory</td>
    </tr>
    <caption>
      Source: Adapted from <a href="https://docs.gitlab.com/development/fe_guide/accessibility/#how-our-accessibility-tools-work-together" class="inline-link">Accessibility. How our accessibility tools work together</a>,
      GitLab Docs, with an added Enforcement column, licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" class="inline-link">CC BY-SA 4.0</a>.
    </caption>
  </table>
</div>

Linting offers the most immediate feedback to engineers, but it also comes with quite a&nbsp;number of limitations. Since it works against source
code, not rendered HTML, the number of violations it can find is even lower than what other automations offer. In case of more custom syntax,
like HAML, it also has limited tool options. In addition, design system components need to be mapped to HTML elements for the axeLinter. From
my experience, mapping may not be complex enough to cover more flexible components. We made it the default recommended extension for the
project, but we had to accept not all contributors would use it. Nonetheless, I have seen real results with merge requests being opened and
code reviews referencing the findings of the axeLinter in VS Code.

Our Storybook layer consisted of two instances, one in the design system and one in the app's monorepo. They gave us insurance to catch any
violations as early as possible and keep the output of the next bigger layer lean, since the feature tests won't have to rediscover
component-level problems. We decided to additionally pair the accessibility plugin in the Storybook UI with a&nbsp;test-runner with the axe-core.
This opened for us an option to automatically run checks on all components in CI. Fixing found violations allowed us to switch the CI job
from "allowed to fail" to completely blocking. These tests won’t catch whether components are assembled into a&nbsp;section that is accessible as
a&nbsp;whole. Also, if a&nbsp;design system is flexible enough, it might be hard to enforce components are consumed in a&nbsp;way that is accessible, for
example: not every property is used and those missing result in non-compliant code.

Our changed approach to the feature test layer meant we could follow the golden user journeys defined by the Product Department, and not the
scenarios following the functional test suites. It gave the option to cover complex UI interactions, with multi-step processes and dynamic
content. Engineers can run them locally, while working on existing critical features. They can also be run in the CI, blocking any newly
found regressions. They are able to bridge the gap Storybook has - components put together and interactions between them. However, creating
them is a&nbsp;more elaborate process. It requires product-area knowledge. It is quite heavy on resources, like CI minutes or developers' time.
It's not realistic to have a&nbsp;high coverage on this level, but the coverage we get is detailed and can run the checks after each scripted user
interaction.

Browser extension is a&nbsp;great tool for quickly scanning the whole page or its section during development of new features or fixing violations.
The highlight functionality of the axe DevTools helps point to specific violations and their source and easily share them as feedback on
merge requests. It is triggered manually though, and we humans tend to forget things from time to time. Some of the features of the axe
DevTools are only available in the pro version though. And with the free version, there is no way to track the adoption of the tool.

There are many options for setting up accessibility monitoring, from dedicated accessibility tools to observability solutions extended with
the axe package. For GitLab, the best option turned out to be a&nbsp;Sitespeed setup that the frontend department already used to monitor the
performance. I extended it with an axe plugin. That gave us additional data, about how specific pages were doing in terms of accessibility
over time. Using Sitespeed opens the option of integrating with Grafana dashboards or Slack integrations. I find it to be a&nbsp;good option on
the organisational level, rather than engineering. If your company has done a&nbsp;complete audit and you have results per page url, you can
easily measure the effects of remediation efforts over time with a&nbsp;monitoring tool like that. Keep in mind it gives the results on a&nbsp;page
load and misses any violations happening after user interactions.

## The human layer

What all these layers of automations cannot do, is to see if the keyboard flow is right, what the experience is like with a&nbsp;screen reader or
if the page makes sense as a&nbsp;whole. For that we need a&nbsp;human layer, to make sure we have a&nbsp;full picture. The human layer works at three
speeds: daily code reviews, building documentation and training over time and one-off accessibility days. This level is the one that needs
more time and knowledge to happen. It also occurs late in the process of development. Which is why the automated layer is important, to lift
some of that burden.

As a&nbsp;maintainer of the GitLab codebase, I saw how much code reviews can speed up the adoption of the tools, but also the awareness about
digital accessibility. I made sure every time I left feedback, I backed it up with a&nbsp;recording from a&nbsp;screen reader, a&nbsp;link to documentation
or WCAG criteria and with the explanation, how the problem in the code translates to what people experience and which users are affected. I
was proud every time someone else mentioned my comments in another review of theirs. The feedback got documented and no longer depended on
individual subject matter experts.

There is a&nbsp;lot of accessibility training out there and it might be hard to choose from. In a&nbsp;company with an excellent engineering culture,
a&nbsp;basic training won't do much. The introductory training we provided wasn't getting much traction from engineering, though was a&nbsp;great hit
with the other departments. a&nbsp;custom course with examples from real testers with disabilities made all the difference. Based on our
automations and previous accessibility efforts, I was able to narrow down common patterns that needed more in-depth knowledge. Thanks to
that, our course provider was able to build the curriculum around it.

The moment that glued all these pieces together was a&nbsp;dedicated accessibility day we organised, when team members spent a&nbsp;whole day on
improving the accessibility of our product. We had designers, frontend and backend engineers contributing to previously triaged and selected
issues. As a&nbsp;result, not only did our application improve, but so did open source projects we depend on. Our engineers contributed to their
codebases, making sure those violations were gone. Many of the fixes resulted in improved components' patterns, additional documentation or
complete component rewrites.

## What worked, what didn't, what I'd do differently

The layered enforcement with Storybook in CI paired with the human aspects led to a&nbsp;clear improvement of the application's accessibility.
Since then, regressions have been caught early. I also noticed that more teams were including accessibility considerations earlier in the
process and I was asked more often about the feedback before features were built.

If you’re starting from zero, begin by mapping layers of the product, tools and testing frameworks that are already used. This should be a
guide to experimenting with different options and checking which solution fits.

Looking back at the journey my Working Group teammates and I took, I see that the hard part was staying in the experiment mindset. Narrowing
the feature tests felt like giving up the perfect solution. That's why the exploration phase is very important, both in terms of discovering
what is technically possible and which solutions teams will actually adopt.

a&nbsp;system like this takes time and team effort, and so does staying accessible. One-off audits do not guarantee that and in an ever-evolving
system it's nearly impossible to reach the perfect state. But a&nbsp;series of imperfect guards and processes results in a&nbsp;sustainable path
towards an accessible application. The good thing is that a&nbsp;system like that can be built over time. Even if you think you are starting from
nothing, there's a&nbsp;high chance you already have a&nbsp;testing framework that can be extended to include accessibility checks.
