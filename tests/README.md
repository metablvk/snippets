# Test Snippet


## Installation
Install ` npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`

## Update vite config

```
test: {
   globals: true,
   environment: 'jsdom',
   setupFiles: './src/test/setup.ts',
   css: true,
},
```

## Create test folder and setup.ts file

Include import in `setup.ts` file in src/test
`import '@testing-library/jest-dom';`
 
## add vitest to package.json 

"test": "vitest"

## Create tests!