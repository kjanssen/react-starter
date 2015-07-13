# react-starter

This is my empty starter project for creating a new react application. It
contains a gulpfile that uses Browserify and Stylus to package up all of the
`.js`, `.jsx`, and `.styl` files in the `src` directory and put them in a `public`
directory.

It contains the initial setup for [React Bootstrap](http://react-bootstrap.github.io/components.html),
including required CSS. I really like being able to use their styles and components,
and I've found using them helpful in building UI that 'just works'.

It also contains the initial setup for [react-router](https://github.com/rackt/react-router),
making adding new pages and managing front-end navigation much easier.

There are actually two starter projects in this repository. One with plain content that is centered
on the screen, and one full page app with a sidebar. They live in `src-centered` and `src-fullpage-with-sidebar`,
respectively. The active one can be switched with one of the following commands:

`ln -sfT src-centered src`

`ln -sfT src-fullpage-with-sidebar src`

Check them both out, and when you decide on one, just get rid of the symbolic link and rename that
source folder to `src`.

## Use

### Browser

Simply run `npm install` to get the necessary packages and `gulp build` to create
the public directory. Then, serve the files up however you want. [http-server](https://github.com/indexzero/http-server)
is a good option if you just want a local static server.

Once the package is built and served, a simple 'hello world' will be displayed in
the browser using React.

### Electron

This app can become a desktop app using [Electron](http://electron.atom.io/) by installing
the `electron` command globally with `npm install electron-prebuilt -g` and running `electron .`
from the project's root directory.

Adapting this starter project to your own project is simply a matter of nuking (`rm -rf`) the
`.git` directory and initializing your own git repo (or not, that's up to you). The
`Container` and `HomeView` react components are the entry point to the app. Modify
or replace them as you will.
