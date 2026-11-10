# TypeScript Compilation and the Role of tsconfig.json

## Introduction

TypeScript is a programming language built on top of JavaScript. Browsers and Node.js cannot directly execute TypeScript code. Therefore, TypeScript code needs to be compiled into JavaScript using the TypeScript compiler, also known as `tsc`.

## Detailed Explanation

During compilation, the TypeScript compiler performs several important tasks.

First, it reads the TypeScript files and checks their types. It identifies errors such as assigning a string to a number variable or calling a function with incorrect arguments.

Next, it removes TypeScript-specific features, such as type annotations and interfaces, because they are not needed in JavaScript at runtime.

Finally, it generates JavaScript files that can run in browsers or Node.js environments.

For example:

```ts
const username: string = 'Rakib'
```

After compilation, the generated JavaScript looks like this:

```js
const username = 'Rakib'
```

The `tsconfig.json` file controls how the TypeScript compiler behaves. It contains compiler options such as the JavaScript target version, module system, strict type checking, and output directory.

For example:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "outDir": "./dist"
  }
}
```

## Conclusion

In conclusion, `tsc` checks TypeScript code and converts it into JavaScript. The `tsconfig.json` file allows developers to customize the compilation process and maintain consistent coding rules across a project.
