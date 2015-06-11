// This is the same set of transformations that we will enable in a future
// official React package
module.exports = {
  sourceMaps: "inline",
  compact: false,
  whitelist: [
    'es6.arrowFunctions',
    'es6.blockScoping',
    'es6.classes',
    'es6.destructuring',
    'es6.parameters.rest',
    'es6.properties.computed',
    'es6.properties.shorthand',
    'es6.spread',
    'es6.templateLiterals',
    'es6.modules', // Not in React Native, but required by the AirBnB style
    'es7.trailingFunctionCommas',
    'es7.objectRestSpread',
    'flow',
    'react'
  ]
};
