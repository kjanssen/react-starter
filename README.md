# react-starter

This is my empty starter project for creating a new react application. It
contains a gulpfile that uses Browserify and Stylus to package up all of the
`.js`, `.jsx`, and `.styl` files in the `src` directory and put them in a `public`
directory.

Simply run `npm install` to get the necessary packages and `gulp build` to create
the public directory. Then, serve the files up however you want. [http-server](https://github.com/indexzero/http-server)
is a good option if you just want a local static server.

Once the packages is built and served, a simple 'hello world' will be displayed in
the browser using React.
