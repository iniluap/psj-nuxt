# Case studies

::cardWrapper

::card

## Vue 2 to Vue 3 migration of the Repository and Blob apps

<!-- prettier-ignore -->
#label
[GitLab - Source Code Management]{.card-label}

<!-- prettier-ignore -->
#date
[2026]{.date}

<!-- prettier-ignore -->
#description
I&nbsp;took ownership of migrating the Repository and Blob apps to
Vue 3,
[behind a&nbsp;feature flag](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/233568){.inline-link}.
This required larger refactors beyond version- specific fixes:
I&nbsp;consolidated the apps’ tangled mounting points into
[single entry points](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/233568){.inline-link}
and
[refactored the Vue Router path handling](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/233622){.inline-link},
fixing stale route params that only appeared under Vue 3. I&nbsp;split the large
migration into smaller, reviewable merge requests.

::

::card

## Accessibility testing with Storybook

<!-- prettier-ignore -->
#label
[GitLab - application]{.card-label}

<!-- prettier-ignore -->
#date
[2025]{.date}

<!-- prettier-ignore -->
#description
I&nbsp;[upgraded GitLab’s Storybook from version 6.5 to 7.6](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/174526){.inline-link}, fixed the runtime and Webpack
issues it left after migration. I&nbsp;
[added the Storybook test-runner](https://gitlab.com/gitlab-org/gitlab/-/work_items/507448){.inline-link}
with an option to run locally and in CI/CD. This gave every component out-of-the-box automated
accessibility checks and let us
[guard each submitted merge request against regressions](https://gitlab.com/gitlab-org/gitlab/-/work_items/562323){.inline-link},
providing short feedback loop for code authors and reviewers. Its first run
surfaced 31+ stories with accessibility issues and 19 failing tests, which I&nbsp;triaged into
four root causes with proposed fixes.

::

::card{.card-wide}

## Repository Header Consolidation

<!-- prettier-ignore -->
#label
[GitLab - Source Code Management]{.card-label}

<!-- prettier-ignore -->
#date
[2024]{.date}

<!-- prettier-ignore -->
#description
I&nbsp;led the architectural initiative from
[proposal](https://gitlab.com/gitlab-org/gitlab/-/work_items/486950#note_2100423617){.inline-link}
to
[implementation](https://gitlab.com/gitlab-org/gitlab/-/work_items/497051){.inline-link},
managing complex codebase changes. The result is a simpler,
more maintainable codebase that unblocked future UX improvements and the upgrade
to Vue 3.

I&nbsp;drove async technical discussions,
[refactored the file viewer controls](https://gitlab.com/gitlab-org/gitlab/-/work_items/450774){.inline-link}, and
found cross-team dependencies early. I&nbsp;turned the outcome of those discussions into a&nbsp;series of detailed issues covering
immediate and future refactors for both frontend and backend engineers. I&nbsp;wrote the descriptions and grouped the issues
into epics to show the timeline.

::

::card{.card-wide}

## Product Accessibility Working Group

<!-- prettier-ignore -->
#label
[GitLab - design system & application]{.card-label}

<!-- prettier-ignore -->
#date
[2023 - present, Warsaw, Poland]{.date}

<!-- prettier-ignore -->
#description
I&nbsp;lead GitLab's
[Product Accessibility Working Group](https://handbook.gitlab.com/handbook/company/working-groups/product-accessibility/){.inline-link},
where we focus on defining technical strategies for accessibility automations
and tools adoption. I&nbsp;coordinate with cross-functional teams to ensure that
accessibility is integrated into the product development lifecycle. I&nbsp;also
mentor team members on accessibility best practices and contribute to internal
documentation and training materials.

::

::card

## WCAG 2.0 compliance

<!-- prettier-ignore -->
#label
[Instapage - Enterprise landing-page building platform]{.card-label}

<!-- prettier-ignore -->
#date
[2020 - 2021, Warsaw, Poland]{.date}

<!-- prettier-ignore -->
#description
I&nbsp;conducted an internal audit of a&nbsp;landing page building
platform against WCAG 2.0 compliance. I&nbsp;created a&nbsp;compliance roadmap
with a&nbsp;list of recommendations and technical specification. As
a&nbsp;member of the development team I&nbsp;implemented new features and
accessibility adjustments. Finally, I&nbsp;created an in-house video tutorial on
how to use our platform to create accessible landing pages.

::

::card

## Enterprise website & blog

<!-- prettier-ignore -->
#label
[Postclick marketing blog]{.card-label}

<!-- prettier-ignore -->
#date
[2020, Warsaw, Poland]{.date}

<!-- prettier-ignore -->
#description
As a&nbsp;sole frontend developer, I&nbsp;developed a&nbsp;highly
responsive website. I&nbsp;implemented a&nbsp;design based on 8-point grid,
subtle user interactions, and font smooth-scaling based on viewport width.

I&nbsp;set up the blog with the Gutenberg editor on a&nbsp;WordPress website.
I&nbsp;integrated the CMS editor with the company UI&nbsp;library to allow using
predefined styles. On the frontend I&nbsp;created modular components with subtle
interactions for images & text hovers, and reading lenght counter.

::

::
