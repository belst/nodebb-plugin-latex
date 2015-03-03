"use strict";
var katex = require('katex');

module.exports.parse = function(postContent, callback) {
    var block = /\$\$([\s\S]*?)\$\$/g;
    var inline = /\$([\s\S]*?)\$/g;

    var replaceBlock = function(match, p1, offset, string) {
        return katex.renderToString(p1, {displayMode: true});
    };
    var replaceInline = function(match, p1, offset, string) {
        return katex.renderToString(p1, {displayMode: false});
    }
    try {
        postContent.postData.content = postContent.postData.replace(block, replaceBlock).replace(inline, replaceInline);
    } catch(a) {

    }

    callback(null, postContent);
};
