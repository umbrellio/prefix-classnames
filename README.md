# @umbrellio/prefix-classnames

[![Coverage Status](https://coveralls.io/repos/github/umbrellio/prefix-classnames/badge.svg?branch=master)](https://coveralls.io/github/umbrellio/prefix-classnames?branch=master)
[![Build Status](https://travis-ci.com/umbrellio/prefix-classnames.svg?branch=master)](https://travis-ci.com/umbrellio/prefix-classnames)

This library allows adding prefixes to classes attributes of html elements.

## Install

```sh
$ yarn add @umbrellio/prefix-classnames
```

## Usage

Imported from the library function takes one argument which will be the prefix for classes. Returns function which takes any number of arguments which can be a string, an object or an array and returns the string with the prefix.

```js
classnames(prefix: String): (...args: String | Object | Array): String => result
```

```js
import classnames from "@umbrellio/prefix-classnames"

classnames(prefix: String): (...args: String | Object | Array): String => result

const cn = classnames("prefix__")

// string arguments
cn("foo", "bar") // => "prefix__foo prefix__bar"
cn("foo", { bar: true }) // => "prefix__foo prefix__bar"

// object arguments
cn({ "foo-bar": true }) // => "prefix__foo-bar"
cn({ "foo-bar": false }) // => ""
cn({ foo: true }, { bar: true }) // => "prefix__foo prefix__bar"
cn({ foo: true, bar: true }) // => "prefix__foo prefix__bar"

// array argument
cn(["cat", { foo: true, bar: false }, "duck"]) // => "prefix__cat prefix__foo prefix__duck"

// lots of arguments of various types
cn("foo", { bar: true, duck: false }, "baz", { quux: true }); // => "prefix__foo prefix__bar prefix__baz prefix__quux"

// other and falsy types of arguments are just ignored
cn(null, false, "bar", undefined, 0, 123, { baz: null }, ""); // => "prefix__bar"
```

Usage with React component

```js
import classnames from "@umbrellio/prefix-classnames"

const cn = classnames("super-prefix__");

class Button extends React.Component {
  // ...
  render () {
    const btnClass = cn({
      btn: true,
      "btn-pressed": this.state.isPressed,
      "btn-over": !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
}
```
