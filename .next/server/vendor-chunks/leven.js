"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/leven";
exports.ids = ["vendor-chunks/leven"];
exports.modules = {

/***/ "(ssr)/./node_modules/leven/index.js":
/*!*************************************!*\
  !*** ./node_modules/leven/index.js ***!
  \*************************************/
/***/ ((module) => {

eval("\nconst array = [];\nconst charCodeCache = [];\n\nconst leven = (left, right) => {\n\tif (left === right) {\n\t\treturn 0;\n\t}\n\n\tconst swap = left;\n\n\t// Swapping the strings if `a` is longer than `b` so we know which one is the\n\t// shortest & which one is the longest\n\tif (left.length > right.length) {\n\t\tleft = right;\n\t\tright = swap;\n\t}\n\n\tlet leftLength = left.length;\n\tlet rightLength = right.length;\n\n\t// Performing suffix trimming:\n\t// We can linearly drop suffix common to both strings since they\n\t// don't increase distance at all\n\t// Note: `~-` is the bitwise way to perform a `- 1` operation\n\twhile (leftLength > 0 && (left.charCodeAt(~-leftLength) === right.charCodeAt(~-rightLength))) {\n\t\tleftLength--;\n\t\trightLength--;\n\t}\n\n\t// Performing prefix trimming\n\t// We can linearly drop prefix common to both strings since they\n\t// don't increase distance at all\n\tlet start = 0;\n\n\twhile (start < leftLength && (left.charCodeAt(start) === right.charCodeAt(start))) {\n\t\tstart++;\n\t}\n\n\tleftLength -= start;\n\trightLength -= start;\n\n\tif (leftLength === 0) {\n\t\treturn rightLength;\n\t}\n\n\tlet bCharCode;\n\tlet result;\n\tlet temp;\n\tlet temp2;\n\tlet i = 0;\n\tlet j = 0;\n\n\twhile (i < leftLength) {\n\t\tcharCodeCache[i] = left.charCodeAt(start + i);\n\t\tarray[i] = ++i;\n\t}\n\n\twhile (j < rightLength) {\n\t\tbCharCode = right.charCodeAt(start + j);\n\t\ttemp = j++;\n\t\tresult = j;\n\n\t\tfor (i = 0; i < leftLength; i++) {\n\t\t\ttemp2 = bCharCode === charCodeCache[i] ? temp : temp + 1;\n\t\t\ttemp = array[i];\n\t\t\t// eslint-disable-next-line no-multi-assign\n\t\t\tresult = array[i] = temp > result ? temp2 > result ? result + 1 : temp2 : temp2 > temp ? temp + 1 : temp2;\n\t\t}\n\t}\n\n\treturn result;\n};\n\nmodule.exports = leven;\n// TODO: Remove this for the next major release\nmodule.exports[\"default\"] = leven;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbGV2ZW4vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLGdCQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnR1cC1wcm8vLi9ub2RlX21vZHVsZXMvbGV2ZW4vaW5kZXguanM/MTMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBhcnJheSA9IFtdO1xuY29uc3QgY2hhckNvZGVDYWNoZSA9IFtdO1xuXG5jb25zdCBsZXZlbiA9IChsZWZ0LCByaWdodCkgPT4ge1xuXHRpZiAobGVmdCA9PT0gcmlnaHQpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IHN3YXAgPSBsZWZ0O1xuXG5cdC8vIFN3YXBwaW5nIHRoZSBzdHJpbmdzIGlmIGBhYCBpcyBsb25nZXIgdGhhbiBgYmAgc28gd2Uga25vdyB3aGljaCBvbmUgaXMgdGhlXG5cdC8vIHNob3J0ZXN0ICYgd2hpY2ggb25lIGlzIHRoZSBsb25nZXN0XG5cdGlmIChsZWZ0Lmxlbmd0aCA+IHJpZ2h0Lmxlbmd0aCkge1xuXHRcdGxlZnQgPSByaWdodDtcblx0XHRyaWdodCA9IHN3YXA7XG5cdH1cblxuXHRsZXQgbGVmdExlbmd0aCA9IGxlZnQubGVuZ3RoO1xuXHRsZXQgcmlnaHRMZW5ndGggPSByaWdodC5sZW5ndGg7XG5cblx0Ly8gUGVyZm9ybWluZyBzdWZmaXggdHJpbW1pbmc6XG5cdC8vIFdlIGNhbiBsaW5lYXJseSBkcm9wIHN1ZmZpeCBjb21tb24gdG8gYm90aCBzdHJpbmdzIHNpbmNlIHRoZXlcblx0Ly8gZG9uJ3QgaW5jcmVhc2UgZGlzdGFuY2UgYXQgYWxsXG5cdC8vIE5vdGU6IGB+LWAgaXMgdGhlIGJpdHdpc2Ugd2F5IHRvIHBlcmZvcm0gYSBgLSAxYCBvcGVyYXRpb25cblx0d2hpbGUgKGxlZnRMZW5ndGggPiAwICYmIChsZWZ0LmNoYXJDb2RlQXQofi1sZWZ0TGVuZ3RoKSA9PT0gcmlnaHQuY2hhckNvZGVBdCh+LXJpZ2h0TGVuZ3RoKSkpIHtcblx0XHRsZWZ0TGVuZ3RoLS07XG5cdFx0cmlnaHRMZW5ndGgtLTtcblx0fVxuXG5cdC8vIFBlcmZvcm1pbmcgcHJlZml4IHRyaW1taW5nXG5cdC8vIFdlIGNhbiBsaW5lYXJseSBkcm9wIHByZWZpeCBjb21tb24gdG8gYm90aCBzdHJpbmdzIHNpbmNlIHRoZXlcblx0Ly8gZG9uJ3QgaW5jcmVhc2UgZGlzdGFuY2UgYXQgYWxsXG5cdGxldCBzdGFydCA9IDA7XG5cblx0d2hpbGUgKHN0YXJ0IDwgbGVmdExlbmd0aCAmJiAobGVmdC5jaGFyQ29kZUF0KHN0YXJ0KSA9PT0gcmlnaHQuY2hhckNvZGVBdChzdGFydCkpKSB7XG5cdFx0c3RhcnQrKztcblx0fVxuXG5cdGxlZnRMZW5ndGggLT0gc3RhcnQ7XG5cdHJpZ2h0TGVuZ3RoIC09IHN0YXJ0O1xuXG5cdGlmIChsZWZ0TGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHJpZ2h0TGVuZ3RoO1xuXHR9XG5cblx0bGV0IGJDaGFyQ29kZTtcblx0bGV0IHJlc3VsdDtcblx0bGV0IHRlbXA7XG5cdGxldCB0ZW1wMjtcblx0bGV0IGkgPSAwO1xuXHRsZXQgaiA9IDA7XG5cblx0d2hpbGUgKGkgPCBsZWZ0TGVuZ3RoKSB7XG5cdFx0Y2hhckNvZGVDYWNoZVtpXSA9IGxlZnQuY2hhckNvZGVBdChzdGFydCArIGkpO1xuXHRcdGFycmF5W2ldID0gKytpO1xuXHR9XG5cblx0d2hpbGUgKGogPCByaWdodExlbmd0aCkge1xuXHRcdGJDaGFyQ29kZSA9IHJpZ2h0LmNoYXJDb2RlQXQoc3RhcnQgKyBqKTtcblx0XHR0ZW1wID0gaisrO1xuXHRcdHJlc3VsdCA9IGo7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVmdExlbmd0aDsgaSsrKSB7XG5cdFx0XHR0ZW1wMiA9IGJDaGFyQ29kZSA9PT0gY2hhckNvZGVDYWNoZVtpXSA/IHRlbXAgOiB0ZW1wICsgMTtcblx0XHRcdHRlbXAgPSBhcnJheVtpXTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cblx0XHRcdHJlc3VsdCA9IGFycmF5W2ldID0gdGVtcCA+IHJlc3VsdCA/IHRlbXAyID4gcmVzdWx0ID8gcmVzdWx0ICsgMSA6IHRlbXAyIDogdGVtcDIgPiB0ZW1wID8gdGVtcCArIDEgOiB0ZW1wMjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsZXZlbjtcbi8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbGV2ZW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/leven/index.js\n");

/***/ })

};
;