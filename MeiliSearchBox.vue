<template>
  <form
    id="search-form"
    class="meilisearch-search-wrapper search-box"
    role="search"
    :class="'theme-' + theme"
  >
    <input
      id="meilisearch-search-input"
      class="search-query"
      :placeholder="placeholder"
    />
  </form>
</template>

<script>
export default {
  name: 'MeiliSearchBox',
  data() {
    return {
      theme: false,
      placeholder: undefined
    }
  },
  watch: {
    options(newValue) {
      this.update(newValue)
    }
  },
  mounted() {
    const options = {
      hostUrl: HOST_URL,
      apiKey: API_KEY,
      indexUid: INDEX_UID,
      clientAgents: CLIENT_AGENTS,
      meilisearchOptions: {
        limit:
          MAX_SUGGESTIONS || this.$site.themeConfig.searchMaxSuggestions || 5,
        cropLength: CROP_LENGTH
      },
      autocompleteOptions: {
        keyboardShortcuts: HOT_KEYS
      },
      layout: LAYOUT,
      debug: DEBUG,
      enableDarkMode: ENABLE_DARK_MODE
    }
    this.updateTheme(options)
    this.initialize(options)
    this.placeholder =
      PLACEHOLDER || this.$site.themeConfig.searchPlaceholder || ''
  },

  methods: {
    initialize(userOptions) {
      Promise.all([
        import(
          /* webpackChunkName: "docs-searchbar" */ 'docs-searchbar.js/dist/cdn/docs-searchbar.min.js'
        ),
        import(
          /* webpackChunkName: "docs-searchbar" */ 'docs-searchbar.js/dist/cdn/docs-searchbar.min.css'
        )
      ]).then(([docsSearchBar]) => {
        docsSearchBar = docsSearchBar.default
        const input = Object.assign({}, userOptions, {
          inputSelector: '#meilisearch-search-input',
          handleSelected: (input, event, suggestion) => {
            const { pathname, hash } = new URL(suggestion.url)
            const routepath = pathname.replace(this.$site.base, '/')
            this.$router.push(`${routepath}${hash}`)
          }
        })
        docsSearchBar(input)
      })
    },

    update(options) {
      this.updateTheme(options)
      this.$el.innerHTML =
        '<input id="meilisearch-search-input" class="search-query">'
      this.initialize(options)
    },

    updateTheme(options) {
      if (options.enableDarkMode === true) {
        this.theme = 'dark'
      } else if (options.enableDarkMode === false) {
        this.theme = 'light'
      } else {
        this.theme = 'auto'
      }
    }
  }
}
</script>

<style lang="stylus">
@require './styles/palette.styl'

light-input()
  color lighten($textColor, 25%)
  border 1px solid darken($borderColor, 10%)
  background-color #fff
  &:focus
    border-color $accentColor

dark-input()
  color $textDarkColor
  border 1px solid $borderDarkColor
  background-color $inputDarkBgColor
  &:focus
    border-color $accentDarkColor

// Searchbox
#meilisearch-search-input
  cursor text
  width 10rem
  height: 2rem
  display inline-block
  border-radius 2rem
  font-size 0.9rem
  line-height 2rem
  padding 0 0.5rem 0 2rem
  outline none
  transition border .2s ease
  background: url(assets/search.svg) 0.6rem 0.5rem no-repeat
  &:focus
    cursor auto
  background-size 1rem

.meilisearch-search-wrapper.theme-light
  #meilisearch-search-input
    light-input()

.meilisearch-search-wrapper.theme-dark
  #meilisearch-search-input
    dark-input()

@media (prefers-color-scheme: dark)
  .meilisearch-search-wrapper.theme-auto
    #meilisearch-search-input
      dark-input()

@media (prefers-color-scheme: light)
  .meilisearch-search-wrapper.theme-auto
    #meilisearch-search-input
      light-input()

.meilisearch-search-wrapper
  display: inline-block;
  position: relative;
  margin-right 1rem
  & > div > span
    vertical-align middle
  .dsb-cursor
    background rgba($accentColor, 0.05)
  .meilisearch-autocomplete
    line-height: 2

    // Layout "columns"
    .docs-searchbar-suggestion:not(.suggestion-layout-simple)
      border-color $borderColor
      .docs-searchbar-suggestion--category-header
        background #f1f3f5
        padding 5px 10px
        border-radius 4px
        background lighten($accentColor, 20%)
        font-weight 600
        color #fff
        .docs-searchbar-suggestion--highlight
          box-shadow none
          background lighten($accentColor, 70%)
      .docs-searchbar-suggestion--wrapper
        display flex
        padding 0
        .docs-searchbar-suggestion--highlight
          color darken($accentColor, 20%)
      .docs-searchbar-suggestion--title
        margin-bottom 0
        color $textColor
      .docs-searchbar-suggestion--subcategory-column
        border-color $borderColor
      .docs-searchbar-suggestion--subcategory-column-text
        color #555
      .docs-searchbar-suggestion--text
        .docs-searchbar-suggestion--highlight
          box-shadow inset 0 -2px 0 0 lighten($accentColor, 20%)
          color: inherit

    // Layout simple
    .suggestion-layout-simple
      .docs-searchbar-suggestion--title
        color: $accentColor
        &:before
          color: darken($accentColor, 20%)
      .docs-searchbar-suggestion--category-header
        .docs-searchbar-suggestion--highlight
          box-shadow unset
          color: darken($accentColor, 20%)
          background-color rgba($accentColor, 0.05)
      .docs-searchbar-suggestion--category-header-lvl0, .docs-searchbar-suggestion--category-header-lvl1
        .docs-searchbar-suggestion--highlight
          background-color: transparent
          box-shadow inset 0 -2px 0 0 lighten($accentColor, 20%)
          color inherit

    // Footer
    .docs-searchbar-footer
      display flex !important
      justify-content space-between !important
      align-items center !important
      .docs-searchbar-footer-logo
        margin-bottom -4px
    .dsb-cursor .docs-searchbar-suggestion--content
      background-color #e7edf3
      color $textColor

  // Dark theme
  div[data-ds-theme="dark"]
    .meilisearch-autocomplete
      .dsb-dropdown-menu [class^=dsb-dataset-], .docs-searchbar-suggestion
        background $dropdownBgDarkColor

      // Layout "columns"
      .docs-searchbar-suggestion:not(.suggestion-layout-simple)
        border-color $borderDarkColor
        .docs-searchbar-suggestion--wrapper
          .docs-searchbar-suggestion--highlight
            color $accentDarkColor
        .docs-searchbar-suggestion--category-header
          background $accentDarkColor
          .docs-searchbar-suggestion--highlight
            background lighten($accentDarkColor, 20%)
        .docs-searchbar-suggestion--title
          color $textDarkColor
        .docs-searchbar-suggestion--subcategory-column
          border-color $borderDarkColor // Simple ?
        .docs-searchbar-suggestion--subcategory-column-text
          color $textDarkColor
        .docs-searchbar-suggestion--text
          .docs-searchbar-suggestion--highlight
            box-shadow inset 0 -2px 0 0 lighten($accentDarkColor, 20%)

      // Layout "simple"
      .suggestion-layout-simple
        .docs-searchbar-suggestion--category-header
          .docs-searchbar-suggestion--category-header-lvl0, .docs-searchbar-suggestion--category-header-lvl1
            .docs-searchbar-suggestion--highlight
              box-shadow inset 0 -2px 0 0 darken($accentDarkColor, 10%)
          .docs-searchbar-suggestion--title
            .docs-searchbar-suggestion--highlight
              color lighten($accentDarkColor, 20%)
              background rgba($accentDarkColor, 10%)
        .docs-searchbar-suggestion--category-header-lvl0, .docs-searchbar-suggestion--category-header-lvl1
          .docs-searchbar-suggestion--highlight
            color inherit

      // Suggestion on hover
      .dsb-dropdown-menu .dsb-suggestions .dsb-cursor
        .docs-searchbar-suggestion.suggestion-layout-simple
          background-color rgba($accentDarkColor, 30%)
        .docs-searchbar-suggestion:not(.suggestion-layout-simple)
          .docs-searchbar-suggestion--content
            background-color rgba($accentDarkColor, 30%)

@media (min-width: $MQMobile)
  .meilisearch-search-wrapper
    .meilisearch-autocomplete
      .docs-searchbar-suggestion
        .docs-searchbar-suggestion--subcategory-column
          float none
          width 150px
          min-width 150px
          display table-cell
        .docs-searchbar-suggestion--content
          float none
          display table-cell
          width 100%
          vertical-align top
        .dsb-dropdown-menu
          min-width 515px !important

@media (max-width: $MQMobile)
  .meilisearch-search-wrapper
    .dsb-dropdown-menu
      min-width calc(100vw - 4rem) !important
      max-width calc(100vw - 4rem) !important
    .docs-searchbar-suggestion--wrapper
      padding 5px 7px 5px 5px !important
    .docs-searchbar-suggestion--subcategory-column
      padding 0 !important
      background white !important
    .docs-searchbar-suggestion--subcategory-column-text:after
      content " > "
      font-size 10px
      line-height 14.4px
      display inline-block
      width 5px
      margin -3px 3px 0
      vertical-align middle
    div[data-ds-theme="dark"]
      .docs-searchbar-suggestion--subcategory-column
        background transparent !important
</style>
