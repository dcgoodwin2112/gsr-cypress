[![Netlify Status](https://api.netlify.com/api/v1/badges/0de103f1-2cf1-4c53-9904-97f0967f7714/deploy-status)](https://app.netlify.com/sites/rps-dcgoodwin-dev/deploys)

# Rock Paper Scissors

This is a browser game created with React.

## Design Process

## Research

I began this project by evaluating other rock paper scissors games and making a list of common features. These included:

1. Single Player
2. Local Multi-player
3. Networked Multi-player
4. Session stats (win, lose, draw)
5. Session Reset
6. Game and turn history
7. Adaptive CPU (Moves are predictive instead of random)
8. Leader board

I then narrowed the list down to subset of core features that could be built and tested in a limited amount of time. These included:

1. Single Player
2. Session Stats (win, lose, draw)
3. Session Reset

## Wireframes

Next, I made a list of all of the information that should be visible to the user and created a wireframe sketch.

This document also contain notes on accessibility concerns including tab order and alert regions.

![App wireframe image](https://github.com/dcgoodwin2112/rock-paper-scissors/blob/main/public/wireframe.jpg?raw=true)

## Technology Choices

After deciding on included features and basic layout, I then selected the tools I would use to build the app. These Included:

1. Create React App With Typescript (An Ideal React Starter for a Single Page App)
2. Styled Components (CSS in JS Styling Package)
3. React Testing Library
4. React Hooks Testing Library

## Code Organization

This app is separated into three logical components.

1. Game Logic: This is a flat function file that only handles game logic and does not depend on React
2. Game State Hook: Custom react hook for managing the state of the application.
3. Game UI: All of the UI React components in the src/components directory

This code organization what chosen specifically for maintainability. New features can have their logic implemented and tested outside of the UI and most components can be easily removed because they do not control state or logic.

## Testing

The game logic file, custom hook, and ui components all have test files located in adjacent **tests** directories.

All components are rendered insolation to verify they don't throw errors and buttons are tested with mock click functions.

The entire App component is rendered and user interactions are simulated to verify game state responds to user input correctly.

## CI/CD

This site is deployed on Netlify. Any push to the main branch of the project will trigger a build and deployment. All tests are run before the build step which will cancel the deployment if any test fails.

[![Netlify Status](https://api.netlify.com/api/v1/badges/0de103f1-2cf1-4c53-9904-97f0967f7714/deploy-status)](https://app.netlify.com/sites/rps-dcgoodwin-dev/deploys)
