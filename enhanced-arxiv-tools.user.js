// ==UserScript==
// @name         Enhanced arXiv Tools
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Enhances arXiv page with multiple features: Open in Overleaf, HTML5 view, GPT-assisted reading, and one-click translation.
// @author       JinZhang
// @match        https://arxiv.org/abs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=arxiv.org
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const LINK_COLOR = 'green';

    function addNewLink(url, buttonText, clickHandler = null) {
        const list = document.querySelector('.full-text ul');
        const newLi = document.createElement('li');
        const newLink = document.createElement('a');

        newLink.href = url;
        newLink.className = 'abs-button download-format';
        newLink.target = '_blank';
        newLink.style.color = LINK_COLOR;
        newLink.textContent = buttonText;

        if (clickHandler) {
            newLink.addEventListener('click', clickHandler);
        }

        newLi.appendChild(newLink);
        list.appendChild(newLi);
    }

    function convertToZip(event) {
        event.preventDefault();
        const overleafText = event.target;
        overleafText.textContent = 'Converting...';
        document.body.style.filter = 'blur(2px)';
        document.getElementById('header').style.background = '#4f9c45';

        fetch('https://amitness-open-in-overleaf.hf.space/run/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: [document.location.href] }),
        })
        .then(response => response.json())
        .then(result => {
            const zipName = result.data[0]['zip_url'];
            const latexZipUrl = `https://amitness-open-in-overleaf.hf.space/file=${zipName}`;
            window.location = `https://www.overleaf.com/docs?snip_uri=${latexZipUrl}`;
        })
        .catch(error => {
            console.error('Error:', error);
            overleafText.textContent = 'Conversion failed';
            document.body.style.filter = 'none';
            document.getElementById('header').style.background = '';
        });
    }

    function init() {
        const ar5ivUrl = `https://ar5iv.org${location.pathname}`;
        const translationUrl = `https://fanyi.youdao.com/trans/#/home?keyfrom=fanyiweb&url=${window.location.href}&type=undefined`;

        addNewLink('#', 'Open in Overleaf', convertToZip);
        addNewLink(ar5ivUrl, 'HTML5 (ar5iv)');
        addNewLink(translationUrl, '有道翻译');
    }

    init();
})();
