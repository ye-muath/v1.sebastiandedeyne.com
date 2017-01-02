var Turbolinks = require('turbolinks');

Turbolinks.start();

var WebFont = require('webfontloader');

WebFont.load({
    google: {
        families: ['Source Code Pro:400,700']
    }
});

var hljs = require('highlight.js/lib/highlight');

hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

function highlight() {
    [...document.querySelectorAll('pre code')]
        .forEach(block => hljs.highlightBlock(block));
}

document.addEventListener('turbolinks:load', function() {
    console.log('turbooo');
    highlight();
});