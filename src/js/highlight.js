import hljs from 'highlight.js/lib/core';

import matlab from 'highlight.js/lib/languages/matlab';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('matlab', matlab);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);

import 'highlight.js/styles/nord.css';

export function makeSrcBlocks() {
    document.querySelectorAll('pre.src').forEach((block) => {
        hljs.highlightBlock(block);
    });
}
