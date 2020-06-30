<p align="center">
  <img src="https://res.cloudinary.com/meilisearch/image/upload/v1587402338/SDKs/meilisearch_vuepress.svg" alt="MeiliSearch-VuePress" width="200" height="200" />
</p>

<h1 align="center">MeiliSearch VuePress</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://blog.meilisearch.com">Blog</a> |
  <a href="https://twitter.com/meilisearch">Twitter</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/vuepress-plugin-meilisearch"><img src="https://img.shields.io/npm/v/vuepress-plugin-meilisearch.svg" alt="NPM version"></a>
  <a href="https://github.com/meilisearch/vuepress-plugin-meilisearch/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
  <a href="https://slack.meilisearch.com"><img src="https://img.shields.io/badge/slack-MeiliSearch-blue.svg?logo=slack" alt="Slack"></a>
</p>

<p align="center">⚡ Lightning Fast, Ultra Relevant, and Typo-Tolerant Search Engine MeiliSearch plugin for VuePress</p>

**MeiliSearch VuePress** is a **MeiliSearch** plugin for VuePress. **MeiliSearch** is a powerful, fast, open-source, easy to use and deploy search engine. Both searching and indexing are highly customizable. Features such as typo-tolerance, filters, and synonyms are provided out-of-the-box.

If you don't use VuePress for your documentation, but you still need a search bar, you might check out this [front-end SDK](https://github.com/meilisearch/docs-searchbar.js).

![MeiliSearch docs demo](assets/docs-searchbar-demo.gif).

This plugin is used in production on the [MeiliSearch documentation](https://docs.meilisearch.com/).

## Table of Contents <!-- omit in toc -->

- [Usage](#usage)
  - [Before using the plugin](#before-using-the-plugin)
  - [Installation](#installation)
  - [Basic Configuration](#basic-configuration)
  - [Customization](#customization)
- [Compatibility with MeiliSearch](#compatibility-with-meilisearch)
- [Development Workflow](#development-workflow)
- [Related Repositories](#related-repositories)

## Usage

### Before using the plugin

The goal of this plugin is to provide very easy integration of a search bar into your own VuePress documentation. To make that possible, you need to gather your website content in advance, and index it in a MeiliSearch instance.

Luckily, we provide all the tools that you need, and can help you through the whole process, if you follow [this guide](https://docs.meilisearch.com/resources/howtos/search_bar_for_docs.html) 🚀

As a first introduction, you might only want to test this plugin without connecting it to your website.<br>
You can do it by running the VuePress playground provided in this repository:

```bash
$ yarn install
$ yarn serve
```

Then, open your browser on the indicated URL and test the search bar 🙂

The data comes from MeiliSearch documentation.<br>
Type `create an indxe` to live the MeiliSearch experience with the [typo tolerance](https://docs.meilisearch.com/guides/advanced_guides/typotolerance.html).

### Installation

In your VuePress project:

```bash
$ yarn add vuepress-plugin-meilisearch
# or
$ npm install vuepress-plugin-meilisearch
```

### Basic Configuration

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

## Compatibility with MeiliSearch

This package is compatible with the following MeiliSearch versions:

- `v0.12.X`
- `v0.11.X`
- `v0.10.X`

## Development Workflow

### Install <!-- omit in toc -->

```bash
$ yarn install
```

### Test with the Playground <!-- omit in toc -->

A playground of a VuePress environment is provided to test the plugin.

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

A GitHub Actions will be triggered and push the package on [npm](https://www.npmjs.com/package/vuepress-plugin-meilisearch).

## Related Repositories

- [docs-searchbar.js](https://github.com/meilisearch/docs-searchbar.js): the library used to display the dropdown of this plugin. It can be useful if you want a search bar for your documentation but you don't use VuePress.
- [docs-scraper](https://github.com/meilisearch/docs-scraper): the scraper used to scrap websites pages and automatically index the content in MeiliSearch.

<hr>

**MeiliSearch** provides and maintains many **SDKs and Integration tools** like this one. We want to provide everyone with an **amazing search experience for any kind of project**. If you want to contribute, make suggestions, or just know what's going on right now, visit us in the [integration-guides](https://github.com/meilisearch/integration-guides) repository.
