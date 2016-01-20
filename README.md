# Dutch

[![Build Status](https://travis-ci.org/davidhazeland/dutch.svg?branch=master)](https://travis-ci.org/davidhazeland/dutch)

### Installation

To install dependency packages:

```
npm install && bower install
```

To build project:

```
npm dist
```

To test project:

```
npm test
```

To run project:

```
npm start
```

### Configuration

Go to `src/config/dist.js` to set your config

### Note

If require `semantic-ui` module error, try to fix line 12 in `bower_components/semantic/bower.json` follow:

```
"main": [
  "dist/semantic.css", // instead of src/semantic.less
  "dist/semantic.js"
]
```
