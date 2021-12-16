# Dmg Assignment For Testing

## boilerplate source

The project has been set up through the [boilerplate](https://github.com/neiltownsley/cypress-typescript-webpack-boilerplate) created by @neiltownsley.

## Set up

```yarn install```

To start cypress

```yarn cypress open```

It uses [webpack](https://github.com/webpack/webpack) to transpile TypeScript tests
via [@cypress/webpack-preprocessor](https://github.com/cypress-io/cypress-webpack-preprocessor)

See:
- [webpack.config.js](webpack.config.js)
- [cypress/plugins/index.js](cypress/plugins/index.js)
- [example test](cypress/integration/spec.ts)

## filepath

delete tests: "./cypress/integration/app.delete.test.ts"
view and update tests: "./cypress/integration/app.updates.test.ts"
create tests: "./cypress/integration/app.test.ts"

## Commands

The E2E tests should run in Cypress right away. There are few other commands configured in this example recipe as a demonstration.

- `yarn build` runs Webpack to convert spec TS file into `dist/test.build.js`
- `yarn lint` lints TypeScript specs using [tslint](https://palantir.github.io/tslint) and then TypeScript compiler to type check.

## Notes

Because `cypress` is installed in the root folder of this repo, [tsconfig.json](tsconfig.json) specifies where to find its types:

```
{
  "include": [
    "node_modules/cypress/types/*.ts",
    "cypress/*/*.test.ts"
  ]
}
```

In "normal" installation, TypeScript compiler should be able to find `node_modules/cypress/index.d.ts` automatically.

## Manual Tests

Manual_Tests folder("../dmg_assignment/Manual_Tests") contains the file of manual test cases.(.ods format)