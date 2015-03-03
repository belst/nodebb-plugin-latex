(function(Latex){
    var katex = module.parent.require('katex');

    Latex.parse = function(postContent, callback) {
        var block = /\$\$[\r\n]+([\s\S]*?)[\r\n]+\$\$/g;
        var inline = /\$([\s\S]*?)\$/g;

        var replaceBlock = function(match, p1, offset, string) {
            return katex.renderToString(p1, {displayMode: true});
        };
        var replaceInline = function(match, p1, offset, string) {
            return katex.renderToString(p1, {displayMode: false});
        }
        postContent = postContent.replace(block, replaceBlock).replace(inline, replaceInline);
        
        callback(null, postContent);
    };
})(module.exports);
