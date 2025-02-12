# Tampermonkey Scripts Collection

This repository contains a collection of useful Tampermonkey scripts designed to enhance your browsing experience on various websites.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
  - [知乎LaTeX公式复制 (Zhihu LaTeX Formula Copy)](#知乎latex公式复制-zhihu-latex-formula-copy)
  - [Enhanced arXiv Tools](#enhanced-arxiv-tools)
  - [Medium Bypass Button](#medium-bypass-button)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Install the Tampermonkey extension for your browser:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
   - [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click on the script you want to install from the [Scripts](#scripts) section below.
3. Tampermonkey will open a new tab. Click on the "Install" button.
4. The script is now installed and will run automatically on supported websites.

## Scripts

### 知乎LaTeX公式复制 (Zhihu LaTeX Formula Copy)

**Version:** 0.3

This script enhances the LaTeX formula copying experience on Zhihu (知乎) pages.

**Features:**
- One-click copy of LaTeX formulas
- Success and error messages for copy operations
- Works with dynamically loaded content

**Usage:**
1. Navigate to any Zhihu page with LaTeX formulas.
2. Click on a formula to copy its LaTeX code to your clipboard.
3. A success message will appear if the copy was successful, or an error message if it failed.

[Install Script](./zhihu-latex-copy.user.js)

### Enhanced arXiv Tools

**Version:** 1.1

This script adds useful tools to arXiv abstract pages for improved functionality.

**Features:**
- "Open in Overleaf" button
- HTML5 view link using ar5iv
- Quick translation link with Youdao Translation

**Usage:**
1. Visit any arXiv abstract page (e.g., https://arxiv.org/abs/******).
2. Use the new buttons and links:
   - Click "Open in Overleaf" to open the paper in Overleaf
   - Click "HTML5 (ar5iv)" to view the paper in HTML5 format
   - Click "有道翻译" for a quick translation of the page

[Install Script](./enhanced-arxiv-tools.user.js)

### Medium Bypass Button

**Version:** 1.0

This script adds a button to Medium article pages to bypass the paywall using freedium.cfd.

**Features:**
- Dynamically adds a "Bypass Paywall" button to Medium article pages
- Semi-transparent button with hover effect for better visibility
- Works on medium.com and custom domain Medium pages
- Intelligently detects Medium article pages, even with dynamically loaded content

**Usage:**
1. Visit any Medium article page.
2. The script will automatically detect if it's an article page and add the button.
3. Look for the "Bypass Paywall" button in the bottom right corner.
4. Click the button to open the article on freedium.cfd, bypassing the paywall.

**Note:** The button only appears on Medium article pages, not on other Medium pages like the homepage or user profiles.

[Install Script](./medium-bypass-button.user.js)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
