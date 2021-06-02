import { shallowMount } from '@vue/test-utils'
import MeiliSearchBox from '../MeiliSearchBox.vue'

describe('MeiliSearchBox', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(
      MeiliSearchBox,
      {
        mocks: {
          $site: { themeConfig: {} }
        }
      }
    )
  })

  it('renders default form and input', () => {
    expect(wrapper.html()).toContain('<form id="search-form" role="search" class="meilisearch-search-wrapper search-box">')
    expect(wrapper.html()).toContain('<input id="meilisearch-search-input" class="search-query" placeholder="">')
  })
})
