// ==UserScript==
// @name         Enhanced arXiv Tools
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Enhances arXiv page with multiple features.
// @author       JinZhang
// @match        https://arxiv.org/abs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=arxiv.org
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Function to replace 'v' with 'w' in the URL
    function replaceVWithW(url) {
        return url.replace(/arxiv\.org/, 'arxiw.org');
    }

    // Function to add a new link to the list
    function addNewLink(url, buttonText) {
        const list = document.querySelector('.full-text ul');

        const newLi = document.createElement('li');
        newLi.style.color = 'black';

        const newLink = document.createElement('a');
        newLink.href = url;
        newLink.className = 'abs-button download-format';
        newLink.target = '_blank';
        newLink.style.color = 'green'; // Set the color for all links

        const linkText = document.createTextNode(buttonText);
        newLink.appendChild(linkText);

        newLi.appendChild(newLink);
        list.appendChild(newLi);
    }

    // Function to convert the .tar.gz file to a zip file and open in Overleaf
    function convertToZip() {
        document.getElementById('overleaf-text').textContent = 'Converting...';
        document.body.style.filter = 'blur(2px)';
        document.getElementById('header').style.background = '#4f9c45';

        fetch('https://amitness-open-in-overleaf.hf.space/run/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: [document.location.href],
            }),
        })
        .then((response) => response.json())
        .then((result) => {
            const zipName = result.data[0]['zip_url'];
            const latexZipUrl = `https://amitness-open-in-overleaf.hf.space/file=${zipName}`;

            window.location = `https://www.overleaf.com/docs?snip_uri=${latexZipUrl}`;
        });
    }

    // Add a new link for HTML5 source based on ar5iv project
    function addHTML5Link() {
        const prefix = location.pathname;
        const ul = document.querySelector('.full-text ul');
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `https://ar5iv.org${prefix}`;
        a.innerText = 'HTML5(ar5iv)';
        a.className = 'abs-button';
        a.target = '_blank';
        a.style.color = 'green'; // Set the color for all links
        li.appendChild(a);
        ul.appendChild(li);
    }

    // Add "Open in Overleaf" button
    function addOverleafButton() {
        const ul = document.querySelector('.full-text ul');
        const li = document.createElement('li');
        const a = document.createElement('a');
        const linkText = document.createTextNode('Open in Overleaf');
        a.appendChild(linkText);
        a.href = '#';
        a.setAttribute('id', 'overleaf-text');
        a.style.color = 'green'; // Set the color for all links
        li.appendChild(a);
        li.addEventListener('click', convertToZip);
        ul.appendChild(li);
    }

    // Main script execution

    // Replace 'v' with 'w' in the URL
    const newURL = replaceVWithW(window.location.href);

    // Add "Open in Overleaf" button
    addOverleafButton();

    // Add "HTML5(ar5iv)" link
    addHTML5Link();

    // Add "GPT辅助阅读" link
    addNewLink(newURL, 'GPT辅助阅读');

    // Add "一键翻译" link
    addNewLink(`https://fanyi.youdao.com/trans/#/home?keyfrom=fanyiweb&url=${window.location.href}&type=undefined`, '一键翻译');

})();
