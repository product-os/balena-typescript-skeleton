# Skeleton Project

This is a skeleton template for a TypeScript library project, containing all the default files and settings required for a balena project.
As a result package-lock files are disabled so that upstream dependency issues are surfaces on our CI.
In case that you are implementing a standalone project, you can enable them by deleting the `.npmrc`.

Modify the `package.json`, and README.md file as required, `npm install`, then implement code in the `lib` directory. 

Compiled code will be output into the `build` directory (transpiled JS, declaration files and source maps).
