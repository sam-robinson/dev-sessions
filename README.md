## Main project setup

Setup was done using yarn

```
$ npx create-react-app dev-sessions --template typescript
$ yarn add mobx@^4.15.7 mobx-react@^6.3.1 nrcs-design-system
$ npx sb init
```

update .storybook/preview.js to include nrcs-design-system scss

add "experimentalDecorators" to tsconfig.json

add .env with SKIP_PREFLIGHT_CHECK=true, because the latest version of StoryBook uses a later version of babel-loader than what react-scripts expect

## Local yarn setup

```
$ yarn add yarn
```

add scripts/checkyarn.js and update package.json for users and/or build environments that don't have yarn installed globally

add .npmrc to tell npm not to create a package-lock file (in cases where a user accidentally uses "npm install" instead of yarn)

## Developer experience

add .prettierrc

add .vscode/settings.json

## Cleanup

delete everyting under source except

- index.tsx
- react-app-env.d.ts
- setupTests.ts

delete everything under public except:

- index.html

rewrite index.tsx to just render a div

## Testing Library Links

https://testing-library.com/docs/react-testing-library/intro
