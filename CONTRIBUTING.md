# Contributing to @zissou/design-system

I would love your input! I want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Tech Stack

Foundational packages for this project:

- React
- Typescript
- Styled Components

Several other packages are included to improve the developer experience, ensure code quality, or run unit tests.

## Local Development

This project is using Storybook to be able to easily view components in development in multiple states which may be difficult to reach within an application.

Each component should have it's own folder containing all related testing, stories, and type declarations.

To get started:

- Clone the repo
- Use `yarn` command to install dependencies
- Use `yarn storybook` to view all components which have associated stories.

It is expected that all PR's to this project adhere to the styling configured ESLint and that unit tests will pass. A unit testing coverage threshold will be established at a later date to ensure code quality and prevent regressions.
