<p align="center">
  <a href="https://ams-osram.com/" target="_blank" rel="noopener noreferrer">
    <img alt="ams OSRAM AG Logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Ams-Osram_Logo.svg" height="100">
  </a>
</p>
<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%233d444b.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="60">
  <img alt="Material UI" src="https://img.shields.io/badge/Material%20UI-%233d444b?style=for-the-badge&logo=MUI&logoColor=" height="60">
  <img alt="Storybook" src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white" height="60">
</p>
<br><br>

# Project Overview

This React Project was generated using a standardized scaffolding service based on a project boilerplate.

This README intentionally documents the **technical conventions of the boilerplate**, not the functional behavior of the application built on top of it. Feel free to adapt it according to your requirements.

## Purpose

The scaffolding service provides a reproducible starting point with predefined architecture, dependencies, and configuration. Projects generated from it are expected to follow the same patterns to ensure maintainability, predictability, and ease of onboarding saving a lot of time creating a full setup from scratch which usually leads to inconsistencies across multiple projects.

**Deviations from these conventions should be intentional and justified.**

## Configuration

Environment-specific values are managed through configuration files and environment variables. 
Hardcoded environment logic is discouraged. Defaults provided by the boilerplate are safe for local development but may not be suitable for production.
The following table will guide you through the core configuration files that need to be modified by the development team.

| Project Folder/File Location                    | Description                                                                                                                       |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| src/api                                         | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| src/redux                                       | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| src/hooks                                       | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| src/storybook                                   | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| src/themes                                      | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| src/constants                                   | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| ./vite-config.js                                | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |
| ./.storybook                                    | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |

## Getting Started
##### 1. Ensure pre-requisites are installed in your machine



| Software Pre-requisite                                                                   | Version     |
| ---------------------------------------------------------------------------------------- | :---------- |
| ![Node.js](https://img.shields.io/badge/Node-6DA55F?logo=node.js&logoColor=white)     | >= v22.22.0 |
| ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)                   | >= v10.9.4  |
| ![GitHub](https://img.shields.io/badge/GitHub%20Desktop-%23121011.svg?logo=github&logoColor=white) | >= v3.5.0   |

##### 2. Install Project Dependencies
```sh
npm install --legacy-peer-deps
```
##### 3. Configure your project following the "Configuration" section
##### 4. Configure your project following the "Configuration" section

## What This README Does Not Cover

This document does not describe business logic, product requirements, API contracts, or deployment procedures. Those concerns are project-specific and must be documented separately by the owning team.

## Generated Project Disclaimer

Because this project was generated from a boilerplate, some files, scripts, or dependencies may appear unused at first glance. They exist to support consistency across projects and future extensibility.
