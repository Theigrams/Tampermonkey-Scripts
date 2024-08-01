// ==UserScript==
// @name         知乎LaTeX公式复制
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  在知乎页面上点击LaTeX公式即可复制其源代码
// @author       Jin Zhang
// @match        *://*.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const showMessage = (message, isSuccess) => {
        const alertBox = document.createElement("div");
        alertBox.textContent = message;
        alertBox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: ${isSuccess ? '#d4edda' : '#f8d7da'};
            color: ${isSuccess ? '#155724' : '#721c24'};
            padding: 10px;
            text-align: center;
            font-weight: bold;
            z-index: 9999;
        `;
        document.body.appendChild(alertBox);
        setTimeout(() => alertBox.remove(), isSuccess ? 500 : 5000);
    };

    const copyLatex = async (element) => {
        const latexCode = element.getAttribute("data-tex");
        try {
            await navigator.clipboard.writeText(latexCode);
            console.log("LaTeX公式已成功复制！");
            showMessage("已成功复制LaTeX公式到剪贴板！", true);
        } catch (error) {
            console.error("复制失败！", error);
            showMessage("复制失败，请手动复制！", false);
        }
    };

    const addCopyListeners = () => {
        document.querySelectorAll(".ztext-math").forEach(element => {
            element.addEventListener("click", () => copyLatex(element));
        });
    };

    // 初始加载时添加事件监听器
    addCopyListeners();

    // 使用MutationObserver监听DOM变化，为新添加的公式添加事件监听器
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        node.querySelectorAll(".ztext-math").forEach(element => {
                            element.addEventListener("click", () => copyLatex(element));
                        });
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
