<p align="center">
  <img src="https://raw.githubusercontent.com/meilisearch/integration-guides/main/assets/logos/meilisearch_vuepress.svg" alt="Meilisearch-VuePress" width="200" height="200" />
</p>

<h1 align="center">Meilisearch VuePress</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/meilisearch">Meilisearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://discord.meilisearch.com">Discord</a> |
  <a href="https://roadmap.meilisearch.com/tabs/1-under-consideration">Roadmap</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/vuepress-plugin-meilisearch"><img src="https://img.shields.io/npm/v/vuepress-plugin-meilisearch.svg" alt="npm version"></a>
  <a href="https://github.com/meilisearch/vuepress-plugin-meilisearch/actions"><img src="https://github.com/meilisearch/vuepress-plugin-meilisearch/workflows/Tests/badge.svg" alt="GitHub Workflow Status"></a>
  <a href="https://github.com/meilisearch/vuepress-plugin-meilisearch/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
  <a href="https://ms-bors.herokuapp.com/repositories/46"><img src="https://bors.tech/images/badge_small.svg" alt="Bors enabled"></a>
</p>

<p align="center">⚡ The Meilisearch plugin for VuePress</p>

**Meilisearch VuePress** is a **Meilisearch** plugin for VuePress.

**Meilisearch** is an open-source search engine. [Discover what Meilisearch is!](https://github.com/meilisearch/meilisearch)

If you don't use VuePress for your documentation, but you still need a search bar, you might check out this [front-end SDK](https://github.com/meilisearch/docs-searchbar.js).

![Meilisearch docs demo](assets/docs-searchbar-demo.gif).

This plugin is used in production on the [Meilisearch documentation](https://docs.meilisearch.com/).

## Table of Contents <!-- omit in toc -->

- [Usage](#usage)
  - [Before using the plugin](#before-using-the-plugin)
  - [Installation](#installation)
  - [Basic Configuration](#basic-configuration)
  - [Customization](#customization)
- [Compatibility with Meilisearch](#compatibility-with-meilisearch)
- [Development Workflow and Contributing](#development-workflow-and-contributing)
- [Related Repositories](#related-repositories)

## Usage

### Before using the plugin

The goal of this plugin is to provide very easy integration of a search bar into your own VuePress documentation. To make that possible, you need to gather your website content in advance, and index it in a Meilisearch instance.

Luckily, we provide all the tools that you need, and can help you through the whole process, if you follow [this guide](https://docs.meilisearch.com/create/how_to/search_bar_for_docs.html) 🚀

As a first introduction, you might only want to test this plugin without connecting it to your website.<br>
You can do it by running the VuePress playground provided in this repository:

```bash
yarn install
yarn playground
```

Then, open your browser on the indicated URL and test the search bar 🙂

The data comes from Meilisearch documentation.<br>
Type `create an indxe` to live the Meilisearch experience with the [typo tolerance](https://docs.meilisearch.com/reference/under_the_hood/typotolerance.html).

### Installation

In your VuePress project:

```bash
yarn add vuepress-plugin-meilisearch
# or
npm install vuepress-plugin-meilisearch
```

### Basic Configuration

In your `config.js` file:

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-meilisearch',
      {
        hostUrl: 'https://mymeilisearch.com',
        apiKey: 'XXX',
        indexUid: 'docs'
      }
    ]
  ]
}
```

**WARNING**: Since the configuration file is public, we recommend providing the Meilisearch public key, which is enough to perform searches.<br>
Read more about [Meilisearch authentication](https://docs.meilisearch.com/reference/features/authentication.html#authentication).

### Customization

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-meilisearch',
      {
        hostUrl: 'https://mymeilisearch.com', // Mandatory
        apiKey: 'XXX', // Mandatory
        indexUid: 'docs-test', // Mandatory
        placeholder: 'Search as you type...', // Default: ""
        maxSuggestions: 10, // Default: 5
        hotKeys: [], // Default: ['s', '/']
        cropLength: 50, // Default: 30
        layout: 'simple', // Default: "columns"
        debug: true, // Default: false
        enableDarkMode: 'auto' // Default: false
      }
    ]
  ]
}
```

#### Dark mode

You can enable dark mode by adding `enableDarkMode: 'auto'` to your configuration file.

To override the default theme of the search bar, you can edit your `.vuepress/styles/palette.styl` file.<br>
A few variables are available:

```js
$accentDarkColor
$inputDarkBgColor
$textDarkColor
$borderDarkColor
$dropdownBgDarkColor
```

You can also find an example in our [playground's `palette.styl` file](./playground/.vuepress/styles/palette.styl)

## Compatibility with Meilisearch

This package only guarantees the compatibility with the [version v0.30.0 of Meilisearch](https://github.com/meilisearch/meilisearch/releases/tag/v0.30.0).

## Development Workflow and Contributing

Any new contribution is more than welcome in this project!

If you want to know more about the development workflow or want to contribute, please visit our [contributing guidelines](/CONTRIBUTING.md) for detailed instructions!

## Related Repositories

- [docs-searchbar.js](https://github.com/meilisearch/docs-searchbar.js): the library used to display the dropdown of this plugin. It can be useful if you want a search bar for your documentation but you don't use VuePress.
- [docs-scraper](https://github.com/meilisearch/docs-scraper): the scraper used to scrap websites pages and automatically index the content in Meilisearch.

<hr>

**Meilisearch** provides and maintains many **SDKs and Integration tools** like this one. We want to provide everyone with an **amazing search experience for any kind of project**. If you want to contribute, make suggestions, or just know what's going on right now, visit us in the [integration-guides](https://github.com/meilisearch/integration-guides) repository.
