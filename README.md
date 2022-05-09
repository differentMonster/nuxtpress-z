![1636096416_What's New in Nuxt 3](https://user-images.githubusercontent.com/31682578/167348283-77f13e20-8658-4520-a12b-af2ca29643ed.jpg)

<p align="center">
  <strong>
    NOTE: This is prerelease software. As we work towards our first release
  </strong>
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@faustjs/core">
    <img alt="" src="https://img.shields.io/npm/v/@faustjs/core?color=7e5cef&style=for-the-badge">
  </a>

  <a aria-label="License" href="https://github.com/wpengine/faustjs/blob/canary/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/@faustjs/core?color=7e5cef&style=for-the-badge">
  </a>
</p>

## Introduction
Nuxt 3 with Headless Wordpress ( faustwp ) bolierplate

## Key Principles
* Lean
* Agile requirements flow

## Project MVP - Design Decisions

## Maintainability
- [X] We prioritize productivity and time to market, so we plan to use Rails since the team is familiar with the technology even if it might be suboptimal.
- [X]  automated tests only at login and cart checkout because of lack of time and money for the MVP

## Scalability
- [X] We expect from 500-2000 active users using our systems daily. This should be easily achievable with a modest deployment in Google Cloud and Kubernetes.

## Performance
- [X] We want to have < 1s response times on every page in our system

## Fault-Tolerance

## Security
- [X] Our systems should restart automatically in case of a failure. We plan to use Docker and Kubernetes.

## Architecture
### NGINX

### Frontend
- [X] nuxt 3
- [X] faustjs
- [X] domain driven design (DDD)

### Backend
- [X] wordpress
- [X] faustwp
- [X] woocommerce
