# ✏️ Pluralizer.js

![NPM](https://img.shields.io/npm/l/pluralizer.js)

Pluralizer.js is a simple zero-dependency lightweight type-safe pluralizer library for any project!

**⭐ Please [give this project a star](https://github.com/Leiloukou/pluralizer.js) if you like it, so others can see, use, and contribute to it!**

## 📦 Installation

You can install `pluralizer.js` with `NPM`, `Yarn`, or `PNPM`.
```bash

# NPM
$ npm install --save pluralizer.js
# Yarn
$ yarn add pluralizer.js
# PNPM
$ pnpm install --save pluralizer.js
```

The output should look something like this:

```bash
$ npm install --save pluralizer.js
> added 1 package, and audited > X packages in 5s
> 
> X packages are looking for funding
>   run `npm fund` for details
> 
> found X vulnerabilities
$ # Pluralizer.js is successfully installed!
```

## 👨‍💻 Usage

Just import the function and the pluralizer and use 'em!

```typescript
const numberOfCats = 3
const myPluralizedString =
    pluralNew(['s'])`I have ${numberOfCats} cat${_FP}!`

console.log(myPluralizedString) // "I have 3 cats!"
```

For our documentation about our other functions, see their JSDoc's @example until we create proper documentation. Thank you for your patience
