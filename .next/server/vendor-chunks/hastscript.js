"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hastscript";
exports.ids = ["vendor-chunks/hastscript"];
exports.modules = {

/***/ "(ssr)/./node_modules/hastscript/factory.js":
/*!********************************************!*\
  !*** ./node_modules/hastscript/factory.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar find = __webpack_require__(/*! property-information/find */ \"(ssr)/./node_modules/property-information/find.js\")\nvar normalize = __webpack_require__(/*! property-information/normalize */ \"(ssr)/./node_modules/property-information/normalize.js\")\nvar parseSelector = __webpack_require__(/*! hast-util-parse-selector */ \"(ssr)/./node_modules/hast-util-parse-selector/index.js\")\nvar spaces = (__webpack_require__(/*! space-separated-tokens */ \"(ssr)/./node_modules/space-separated-tokens/index.js\").parse)\nvar commas = (__webpack_require__(/*! comma-separated-tokens */ \"(ssr)/./node_modules/comma-separated-tokens/index.js\").parse)\n\nmodule.exports = factory\n\nvar own = {}.hasOwnProperty\n\nfunction factory(schema, defaultTagName, caseSensitive) {\n  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null\n\n  return h\n\n  // Hyperscript compatible DSL for creating virtual hast trees.\n  function h(selector, properties) {\n    var node = parseSelector(selector, defaultTagName)\n    var children = Array.prototype.slice.call(arguments, 2)\n    var name = node.tagName.toLowerCase()\n    var property\n\n    node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name\n\n    if (properties && isChildren(properties, node)) {\n      children.unshift(properties)\n      properties = null\n    }\n\n    if (properties) {\n      for (property in properties) {\n        addProperty(node.properties, property, properties[property])\n      }\n    }\n\n    addChild(node.children, children)\n\n    if (node.tagName === 'template') {\n      node.content = {type: 'root', children: node.children}\n      node.children = []\n    }\n\n    return node\n  }\n\n  function addProperty(properties, key, value) {\n    var info\n    var property\n    var result\n\n    // Ignore nullish and NaN values.\n    if (value === null || value === undefined || value !== value) {\n      return\n    }\n\n    info = find(schema, key)\n    property = info.property\n    result = value\n\n    // Handle list values.\n    if (typeof result === 'string') {\n      if (info.spaceSeparated) {\n        result = spaces(result)\n      } else if (info.commaSeparated) {\n        result = commas(result)\n      } else if (info.commaOrSpaceSeparated) {\n        result = spaces(commas(result).join(' '))\n      }\n    }\n\n    // Accept `object` on style.\n    if (property === 'style' && typeof value !== 'string') {\n      result = style(result)\n    }\n\n    // Class-names (which can be added both on the `selector` and here).\n    if (property === 'className' && properties.className) {\n      result = properties.className.concat(result)\n    }\n\n    properties[property] = parsePrimitives(info, property, result)\n  }\n}\n\nfunction isChildren(value, node) {\n  return (\n    typeof value === 'string' ||\n    'length' in value ||\n    isNode(node.tagName, value)\n  )\n}\n\nfunction isNode(tagName, value) {\n  var type = value.type\n\n  if (tagName === 'input' || !type || typeof type !== 'string') {\n    return false\n  }\n\n  if (typeof value.children === 'object' && 'length' in value.children) {\n    return true\n  }\n\n  type = type.toLowerCase()\n\n  if (tagName === 'button') {\n    return (\n      type !== 'menu' &&\n      type !== 'submit' &&\n      type !== 'reset' &&\n      type !== 'button'\n    )\n  }\n\n  return 'value' in value\n}\n\nfunction addChild(nodes, value) {\n  var index\n  var length\n\n  if (typeof value === 'string' || typeof value === 'number') {\n    nodes.push({type: 'text', value: String(value)})\n    return\n  }\n\n  if (typeof value === 'object' && 'length' in value) {\n    index = -1\n    length = value.length\n\n    while (++index < length) {\n      addChild(nodes, value[index])\n    }\n\n    return\n  }\n\n  if (typeof value !== 'object' || !('type' in value)) {\n    throw new Error('Expected node, nodes, or string, got `' + value + '`')\n  }\n\n  nodes.push(value)\n}\n\n// Parse a (list of) primitives.\nfunction parsePrimitives(info, name, value) {\n  var index\n  var length\n  var result\n\n  if (typeof value !== 'object' || !('length' in value)) {\n    return parsePrimitive(info, name, value)\n  }\n\n  length = value.length\n  index = -1\n  result = []\n\n  while (++index < length) {\n    result[index] = parsePrimitive(info, name, value[index])\n  }\n\n  return result\n}\n\n// Parse a single primitives.\nfunction parsePrimitive(info, name, value) {\n  var result = value\n\n  if (info.number || info.positiveNumber) {\n    if (!isNaN(result) && result !== '') {\n      result = Number(result)\n    }\n  } else if (info.boolean || info.overloadedBoolean) {\n    // Accept `boolean` and `string`.\n    if (\n      typeof result === 'string' &&\n      (result === '' || normalize(value) === normalize(name))\n    ) {\n      result = true\n    }\n  }\n\n  return result\n}\n\nfunction style(value) {\n  var result = []\n  var key\n\n  for (key in value) {\n    result.push([key, value[key]].join(': '))\n  }\n\n  return result.join('; ')\n}\n\nfunction createAdjustMap(values) {\n  var length = values.length\n  var index = -1\n  var result = {}\n  var value\n\n  while (++index < length) {\n    value = values[index]\n    result[value.toLowerCase()] = value\n  }\n\n  return result\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9mYWN0b3J5LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLFdBQVcsbUJBQU8sQ0FBQyxvRkFBMkI7QUFDOUMsZ0JBQWdCLG1CQUFPLENBQUMsOEZBQWdDO0FBQ3hELG9CQUFvQixtQkFBTyxDQUFDLHdGQUEwQjtBQUN0RCxhQUFhLGlIQUF1QztBQUNwRCxhQUFhLGlIQUF1Qzs7QUFFcEQ7O0FBRUEsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQ0FBbUM7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnR1cC1wcm8vLi9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9mYWN0b3J5LmpzPzE1MmQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBmaW5kID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vZmluZCcpXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgncHJvcGVydHktaW5mb3JtYXRpb24vbm9ybWFsaXplJylcbnZhciBwYXJzZVNlbGVjdG9yID0gcmVxdWlyZSgnaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yJylcbnZhciBzcGFjZXMgPSByZXF1aXJlKCdzcGFjZS1zZXBhcmF0ZWQtdG9rZW5zJykucGFyc2VcbnZhciBjb21tYXMgPSByZXF1aXJlKCdjb21tYS1zZXBhcmF0ZWQtdG9rZW5zJykucGFyc2VcblxubW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5XG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmYWN0b3J5KHNjaGVtYSwgZGVmYXVsdFRhZ05hbWUsIGNhc2VTZW5zaXRpdmUpIHtcbiAgdmFyIGFkanVzdCA9IGNhc2VTZW5zaXRpdmUgPyBjcmVhdGVBZGp1c3RNYXAoY2FzZVNlbnNpdGl2ZSkgOiBudWxsXG5cbiAgcmV0dXJuIGhcblxuICAvLyBIeXBlcnNjcmlwdCBjb21wYXRpYmxlIERTTCBmb3IgY3JlYXRpbmcgdmlydHVhbCBoYXN0IHRyZWVzLlxuICBmdW5jdGlvbiBoKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIG5vZGUgPSBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yLCBkZWZhdWx0VGFnTmFtZSlcbiAgICB2YXIgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gICAgdmFyIG5hbWUgPSBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgIHZhciBwcm9wZXJ0eVxuXG4gICAgbm9kZS50YWdOYW1lID0gYWRqdXN0ICYmIG93bi5jYWxsKGFkanVzdCwgbmFtZSkgPyBhZGp1c3RbbmFtZV0gOiBuYW1lXG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBpc0NoaWxkcmVuKHByb3BlcnRpZXMsIG5vZGUpKSB7XG4gICAgICBjaGlsZHJlbi51bnNoaWZ0KHByb3BlcnRpZXMpXG4gICAgICBwcm9wZXJ0aWVzID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgICAgYWRkUHJvcGVydHkobm9kZS5wcm9wZXJ0aWVzLCBwcm9wZXJ0eSwgcHJvcGVydGllc1twcm9wZXJ0eV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgYWRkQ2hpbGQobm9kZS5jaGlsZHJlbiwgY2hpbGRyZW4pXG5cbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAndGVtcGxhdGUnKSB7XG4gICAgICBub2RlLmNvbnRlbnQgPSB7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbn1cbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbXVxuICAgIH1cblxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBmdW5jdGlvbiBhZGRQcm9wZXJ0eShwcm9wZXJ0aWVzLCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGluZm9cbiAgICB2YXIgcHJvcGVydHlcbiAgICB2YXIgcmVzdWx0XG5cbiAgICAvLyBJZ25vcmUgbnVsbGlzaCBhbmQgTmFOIHZhbHVlcy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluZm8gPSBmaW5kKHNjaGVtYSwga2V5KVxuICAgIHByb3BlcnR5ID0gaW5mby5wcm9wZXJ0eVxuICAgIHJlc3VsdCA9IHZhbHVlXG5cbiAgICAvLyBIYW5kbGUgbGlzdCB2YWx1ZXMuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaW5mby5zcGFjZVNlcGFyYXRlZCkge1xuICAgICAgICByZXN1bHQgPSBzcGFjZXMocmVzdWx0KVxuICAgICAgfSBlbHNlIGlmIChpbmZvLmNvbW1hU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbW1hcyhyZXN1bHQpXG4gICAgICB9IGVsc2UgaWYgKGluZm8uY29tbWFPclNwYWNlU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHNwYWNlcyhjb21tYXMocmVzdWx0KS5qb2luKCcgJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWNjZXB0IGBvYmplY3RgIG9uIHN0eWxlLlxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQgPSBzdHlsZShyZXN1bHQpXG4gICAgfVxuXG4gICAgLy8gQ2xhc3MtbmFtZXMgKHdoaWNoIGNhbiBiZSBhZGRlZCBib3RoIG9uIHRoZSBgc2VsZWN0b3JgIGFuZCBoZXJlKS5cbiAgICBpZiAocHJvcGVydHkgPT09ICdjbGFzc05hbWUnICYmIHByb3BlcnRpZXMuY2xhc3NOYW1lKSB7XG4gICAgICByZXN1bHQgPSBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5jb25jYXQocmVzdWx0KVxuICAgIH1cblxuICAgIHByb3BlcnRpZXNbcHJvcGVydHldID0gcGFyc2VQcmltaXRpdmVzKGluZm8sIHByb3BlcnR5LCByZXN1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGlsZHJlbih2YWx1ZSwgbm9kZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAnbGVuZ3RoJyBpbiB2YWx1ZSB8fFxuICAgIGlzTm9kZShub2RlLnRhZ05hbWUsIHZhbHVlKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh0YWdOYW1lLCB2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHZhbHVlLnR5cGVcblxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0JyB8fCAhdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUuY2hpbGRyZW4gPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKClcblxuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZSAhPT0gJ21lbnUnICYmXG4gICAgICB0eXBlICE9PSAnc3VibWl0JyAmJlxuICAgICAgdHlwZSAhPT0gJ3Jlc2V0JyAmJlxuICAgICAgdHlwZSAhPT0gJ2J1dHRvbidcbiAgICApXG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChub2RlcywgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogU3RyaW5nKHZhbHVlKX0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIGluZGV4ID0gLTFcbiAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhZGRDaGlsZChub2RlcywgdmFsdWVbaW5kZXhdKVxuICAgIH1cblxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgISgndHlwZScgaW4gdmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBub2Rlcywgb3Igc3RyaW5nLCBnb3QgYCcgKyB2YWx1ZSArICdgJylcbiAgfVxuXG4gIG5vZGVzLnB1c2godmFsdWUpXG59XG5cbi8vIFBhcnNlIGEgKGxpc3Qgb2YpIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZXMoaW5mbywgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHJlc3VsdFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICEoJ2xlbmd0aCcgaW4gdmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlUHJpbWl0aXZlKGluZm8sIG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4ID0gLTFcbiAgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZVtpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIFBhcnNlIGEgc2luZ2xlIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdmFsdWVcblxuICBpZiAoaW5mby5udW1iZXIgfHwgaW5mby5wb3NpdGl2ZU51bWJlcikge1xuICAgIGlmICghaXNOYU4ocmVzdWx0KSAmJiByZXN1bHQgIT09ICcnKSB7XG4gICAgICByZXN1bHQgPSBOdW1iZXIocmVzdWx0KVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvLmJvb2xlYW4gfHwgaW5mby5vdmVybG9hZGVkQm9vbGVhbikge1xuICAgIC8vIEFjY2VwdCBgYm9vbGVhbmAgYW5kIGBzdHJpbmdgLlxuICAgIGlmIChcbiAgICAgIHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnICYmXG4gICAgICAocmVzdWx0ID09PSAnJyB8fCBub3JtYWxpemUodmFsdWUpID09PSBub3JtYWxpemUobmFtZSkpXG4gICAgKSB7XG4gICAgICByZXN1bHQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzdHlsZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVba2V5XV0uam9pbignOiAnKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignOyAnKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGp1c3RNYXAodmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHQgPSB7fVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHJlc3VsdFt2YWx1ZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hastscript/factory.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/hastscript/html.js":
/*!*****************************************!*\
  !*** ./node_modules/hastscript/html.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar schema = __webpack_require__(/*! property-information/html */ \"(ssr)/./node_modules/property-information/html.js\")\nvar factory = __webpack_require__(/*! ./factory */ \"(ssr)/./node_modules/hastscript/factory.js\")\n\nvar html = factory(schema, 'div')\nhtml.displayName = 'html'\n\nmodule.exports = html\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9odG1sLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLGFBQWEsbUJBQU8sQ0FBQyxvRkFBMkI7QUFDaEQsY0FBYyxtQkFBTyxDQUFDLDZEQUFXOztBQUVqQztBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnR1cC1wcm8vLi9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9odG1sLmpzP2JjNDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBzY2hlbWEgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sJylcbnZhciBmYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3J5JylcblxudmFyIGh0bWwgPSBmYWN0b3J5KHNjaGVtYSwgJ2RpdicpXG5odG1sLmRpc3BsYXlOYW1lID0gJ2h0bWwnXG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hastscript/html.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/hastscript/index.js":
/*!******************************************!*\
  !*** ./node_modules/hastscript/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = __webpack_require__(/*! ./html */ \"(ssr)/./node_modules/hastscript/html.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdHNjcmlwdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWiw2RkFBa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydHVwLXByby8uL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L2luZGV4LmpzP2MxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9odG1sJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hastscript/index.js\n");

/***/ })

};
;