# mongo-ts-jest-example

Bare minimum to get unit tests for mongodb and typescript

```
  npm init -y
  npm i -D @types/jest jest mongodb-memory-server ts-jest typescript
  npm i mongodb
  <MODS TO YOUR PACKAGE>JSON
  tsc --init
  npx ts-jest config:init
  npm run test
```

edit:
src/test/<FILENAME>.test.ts

Edits to package.json

```
...
  "scripts": {
    "test": "npx jest"
  },
...
```

# If you're just cloning this repo...

```
npm install
tsc --init
npx ts-jest config:init
npm run test
```
