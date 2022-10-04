import { shallowMount } from '@vue/test-utils'
import MeiliSearchBox from '../MeiliSearchBox.vue'

describe('MeiliSearchBox', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(MeiliSearchBox, {
      mocks: {
        $site: { themeConfig: {} }
      },
      attachTo: document.body
    })
  })

  it('renders default form and input', () => {
    expect(wrapper.html()).toContain(
      '<form id="search-form" role="search" class="meilisearch-search-wrapper search-box theme-light">'
    )
    expect(wrapper.html()).toContain(
      '<input id="meilisearch-search-input" class="search-query dsb-input" placeholder="" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-label="search input" aria-owns="meilisearch-autocomplete-listbox-0" style="vertical-align: top;" dir="auto">'
    )
  })

  afterEach(() => {
    wrapper.destroy()
  })
})
