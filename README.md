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

## Use

Simply run `npm install` to get the necessary packages and `gulp build` to create
the public directory. Then, serve the files up however you want. [http-server](https://github.com/indexzero/http-server)
is a good option if you just want a local static server.

Once the packages is built and served, a simple 'hello world' will be displayed in
the browser using React.

Adapting this starter project to your own project is simply a matter of nuking (`rm -rf`) the
`.git` directory and initializing your own git repo (or not, that's up to you). The
`Container` and `HomeView` react components are the entry point to the app. Modify
or replace them as you will.
