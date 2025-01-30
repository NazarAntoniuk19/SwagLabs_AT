# WebdriverIO E2E Tests for SwagLabs

## Overview

This repository contains end-to-end (E2E) tests for the [SwagLabs](https://www.saucedemo.com/) website. The tests are built using [WebdriverIO](https://webdriver.io/), ensuring automated validation of the website's functionality.

## Features

- Automated test execution for key functionalities of SauceDemo
- Uses WebdriverIO with JavaScript
- Page Object Model (POM) for better test structure
- Supports parallel execution

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)

## Installation

Clone this repository and install dependencies:

```sh
git clone <repository-url>
cd <repository-folder>
npm install
```

# Running Tests

Run all tests:

```sh
npx wdio run ./wdio.conf.js
```

Run specific test:

```sh
npx wdio run ./wdio.conf.js --spec test.e8e.js
```

# Test Structure

- /specs: Contains test scripts
- /pageobjects: Implements Page Object Model (POM)
- wdio.conf.js: Configuration file for WebdriverIO

# License

This project is licensed under the MIT License.
