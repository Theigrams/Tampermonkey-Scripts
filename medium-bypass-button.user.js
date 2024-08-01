// ==UserScript==
// @name         Medium Bypass Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在 Medium 页面添加一个按钮，使用 freedium.cfd 绕过付费墙
// @author       Jin Zhang
// @match        *://*.medium.com/*
// @match        *://medium.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=medium.com
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function addBypassButton() {
      if (document.getElementById('bypass-button')) return;

      const button = document.createElement('button');
      button.id = 'bypass-button';
      button.textContent = 'Bypass Paywall';
      button.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
          padding: 10px 15px;
          background-color: #1a8917;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
      `;

      button.addEventListener('click', function() {
          window.location.href = 'https://freedium.cfd/' + window.location.href;
      });

      document.body.appendChild(button);
  }

  // Check if we're on a Medium article page
  function isMediumArticle() {
      return document.head?.querySelector('meta[property="al:android:url"]')?.content?.includes('medium://p/');
  }

  // Run on page load
  if (isMediumArticle()) {
      addBypassButton();
  }

  // Observe for dynamic content loading
  const observer = new MutationObserver((mutations) => {
      if (isMediumArticle()) {
          addBypassButton();
          observer.disconnect();
      }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();