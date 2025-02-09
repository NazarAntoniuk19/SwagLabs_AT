# WebdriverIO E2E Tests for SwagLabs

## Overview

This repository contains end-to-end (E2E) tests for the [SwagLabs](https://www.saucedemo.com/) website. The tests are built using [WebdriverIO](https://webdriver.io/), ensuring automated validation of the website's functionality.

## Features

- Automated test execution for key functionalities of SauceDemo
- Uses WebdriverIO with JavaScript
- Page Object Model (POM) for better test structure
- Implements Mocha and Cucumber Frameworks
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

Run tests based on Mocha Framework:

```sh
npm run test:mocha
```

Run tests based on Cucumber Framework:

```sh
npm run test:cucumber
```
Run all tests:

```sh
npm run test
```

# Test Structure

## Mocha Framework
- `/test-mocha/specs`: Contains test scripts
- `/test-mocha/pageobjects`: Implements Page Object Model (POM)
- `mocha.conf.js`: WebdriverIO configuration file for Mocha Framework

## Cucumber Framework
- `/test-cucumber/features`: Contains features
- `/test-cucumber/features/step-definitions`: Contains step definitions for features
- `/test-cucumber/features/pageobjects`: Implements Page Object Model (POM)
- `cucumber.conf.js`: WebdriverIO configuration file for Cucumber Framework

# License

This project is licensed under the MIT License.
