<p align="center">
  <img src="https://res.cloudinary.com/meilisearch/image/upload/v1587402338/SDKs/meilisearch_vuepress.svg" alt="MeiliSearch-Vuepress" width="200" height="200" />
</p>

<h1 align="center">MeiliSearch Vuepress</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://blog.meilisearch.com">Blog</a> |
  <a href="https://twitter.com/meilisearch">Twitter</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/vuepresss-plugin-meilisearch"><img src="https://img.shields.io/npm/v/meilisearch.svg" alt="NPM version"></a>
  <a href="https://github.com/meilisearch/vuepress-plugin-meilisearch/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
  <a href="https://slack.meilisearch.com"><img src="https://img.shields.io/badge/slack-MeiliSearch-blue.svg?logo=slack" alt="Slack"></a>
</p>

<p align="center">⚡ Lightning Fast, Ultra Relevant, and Typo-Tolerant Search Engine MeiliSearch plugin for Vuepress</p>

**MeiliSearch Vuepress** is a **MeiliSearch** plugin for Vuepress. **MeiliSearch** is a powerful, fast, open-source, easy to use and deploy search engine. Both searching and indexing are highly customizable. Features such as typo-tolerance, filters, and synonyms are provided out-of-the-box.

This plugin is used in production on the [MeiliSearch documentation](https://docs.meilisearch.com/).

![MeiliSearch docs demo](assets/docs-searchbar-demo.gif).

## Table of Contents <!-- omit in toc -->

- [Usage](#usage)
  - [Run MeiliSearch](#run-meilisearch)
  - [Basic usage](#basic-usage)
  - [Customization](#customization)
- [Scrap your Content](#scrap-your-content)
  - [Your MeiliSearch Instance](#your-meilisearch-instance)
  - [Your Scraper](#your-scraper)
- [Development Workflow](#development-workflow)
- [Related Repositories](#related-repositories)
- [Compatibility with MeiliSearch](#compatibility-with-meilisearch)

## Usage

### Run MeiliSearch

First of all, you need your Vuepress content to be scraped and pushed into a MeiliSearch instance.

This can be done in few steps. Read the [dedicated section](#scrap-your-content).

The host URL, the API key and the index UID you will provide in your configuration file are the credentials of this MeiliSearch instance.

**Without running a MeiliSearch instance, the next steps will not work.**

### Basic usage

In your Vuepress project:

```bash
$ yarn add vuepress-plugin-meilisearch
# or
$ npm install vuepress-plugin-meilisearch
```

In your `config.js` file:

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-meilisearch",
      {
        "hostUrl": "https://mymeilisearch.com",
        "apiKey": "XXX",
        "indexUid": "docs"
      }
    ],
  ],
}
```

**WARNING**: Since the configuration file is public, we recommend providing the MeiliSearch public key, which is enough to perform searches.<br>
Read more about [MeiliSearch authentication](https://docs.meilisearch.com/guides/advanced_guides/authentication.html#authentication).

### Customization

```js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-meilisearch",
      {
        "hostUrl": "https://mymeilisearch.com", // Mandatory
        "apiKey": "XXX",                        // Mandatory
        "indexUid": "docs-test",                // Mandatory
        "placeholder": "Search as you type...", // Default: ""
        "maxSuggestions": 10,                   // Default: 5
        "hotKeys": [],                          // Default: ['s', '/']
        "cropLength": 50                        // Default: 30
      }
    ],
  ],
}
```

## Scrap your Content

To use this plugin, your need:
- a MeiliSearch instance running in production.
- a scraping tool that scraps your Vuepress pages on regular bases.

### Your MeiliSearch Instance

This step has to be done on your side: MeiliSearch is open-source and can run on your own server! 😄

Here is the [documentation to install and run MeiliSearch](https://docs.meilisearch.com/guides/advanced_guides/installation.html#installation).

_A tutorial about how to run MeiliSearch in production is coming..._

### Your Scraper

We already provide a scraper for your website: [docs-scraper](https://github.com/meilisearch/docs-scraper).<br>
This scraper is used in production on the [MeiliSearch documentation](https://docs.meilisearch.com/).

All the steps to use it are detailed in the scraper repository.<br>
You can easily run the scraper with Docker or in a GitHub Action. The best would be to run the scraper on each website deployment.

## Development Workflow

### Install <!-- omit in toc -->

```bash
$ yarn install
```

### Test with the Playground <!-- omit in toc -->

A playground of a Vuepress environment is provided to test the plugin.

```bash
$ yarn serve
```

Then, open your browser on the indicated URL and test the search bar 🙂

Since the automatic tests are not relevant, we really recommend to use it during development.

### Tests and Linter <!-- omit in toc -->

```bash
# Automatic tests (need improvement)
$ yarn test
# Linter
$ yarn lint
# Linter with auto-correct
$ yarn lint:fix
```

### Release <!-- omit in toc -->

MeiliSearch tools follow the [Semantic Versioning Convention](https://semver.org/).

You must do a PR modifying the file `package.json` with the right version.<br>

```javascript
"version": X.X.X
```

Once the changes are merged on `master`, in your terminal, you must be on the `master` branch and push a new tag with the right version:

```bash
$ git checkout master
$ git pull origin master
$ git tag vX.X.X
$ git push --tag origin master
```

A GitHub Action will be triggered and push the package on [npm](https://www.npmjs.com/package/vuepress-plugin-meilisearch).

## Related Repositories

- [docs-searchBar.js](https://github.com/meilisearch/docs-searchbar.js): the library used to display the dropdown of this plugin. It can be useful if you want a search bar for your documentation but you don't use vuepress.
- [docs-scraper](https://github.com/meilisearch/docs-scraper): the scraper used to scrap websites pages and automatically index the content in MeiliSearch.

## Compatibility with MeiliSearch

This plugin works for MeiliSearch `>=0.10`.
