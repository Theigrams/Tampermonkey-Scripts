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

[Install Script](link-to-raw-zhihu-latex-copy.user.js)

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

[Install Script](link-to-raw-enhanced-arxiv-tools.user.js)

### Medium Bypass Button

**Version:** 1.0

This script adds a button to Medium pages to bypass the paywall using freedium.cfd.

**Features:**
- Adds a "Bypass Paywall" button to Medium pages
- Semi-transparent button with hover effect
- Works on medium.com and custom domain Medium pages

**Usage:**
1. Visit any Medium article page.
2. Look for the "Bypass Paywall" button in the bottom right corner.
3. Click the button to read the full article without restrictions on freedium.cfd.

[Install Script](link-to-raw-medium-bypass-button.user.js)

## Contributing

Contributions are welcome! If you have a script to add or want to improve existing ones:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
