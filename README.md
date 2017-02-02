# Skeleton Project

This is a skeleton template for a TypeScript project, containing all the default files and settings required for a Resin project. It will build code via `gulp` (there is also a default Visual Code task for this on starting the debugger).

Modify the `package.json`, `.vscode/launch.json` and README.md file as required, `npm install`, then implement code in the `lib` directory.

Note that `@types` dependencies are currently in the `devDependencies` section of `package.json`. This is because this template is considered a stand-alone application. Should it be intended to be a library then move the `@types` to the `dependencies` section instead.

Compiled code will be output into the `build` directory (transpiled JS, declaration files and source maps).
