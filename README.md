# Onset Typescript React-Redux Boilerplate

This is a simple onset boilerplate package to make UIs using React in Onset.
It will contains a base code but also some guidelines on how to integrate it into your packages.

Of course it is well over enginered for a simple counter incrementation but I hope this pattern
will help your organize complex UI with lots of events and state updates.

Make sure you have Node.js and npm up and running.

It is using the followin tools:
    - ReactJS
    - Readux (With Redux/Toolkit)
    - Typescript
    - Create React App
    - Create React App Rewired

# Try the demo version
First clone the repository into your packages and add it to your server list

# Install dependencies
If you are trying the demo package
From the root of the repository navigate to  `react_ts_webpack` and type `npm run install`

It should take some minutes before evrything is downloaded and unpacked.

# Compilling the UI for Onset

Using `npm run build` will generate a production build of your sources inside build

Make sure that you edit `package.json` (React App one, not Onset package one) and change `homepage` to the actual folder of your 
build inside your package.

As of now there is now way to watch file changes and trigger builds as `cra-build-watch`
is not yet compatible with `cra-rewired`

# Install this example on a package
Given what was said above lets see how you can integrate this to your current workflow.

First just copy the whole folder except `node_modules` to a folder of your package `gui` for example then Install and Compile the package.

You can then use the result of the build folder as your GUI, clients will not download source files if you do not include them in your package.json
