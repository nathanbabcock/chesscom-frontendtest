import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import App from '../../App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Selected Squares')
  })

  it('renders 64 squares', () => {
    const wrapper = mount(App)
    expect(wrapper.findAll('.square').length).toBe(64)
  })

  it('lists each selected square in sidebar', async () => {
    const wrapper = mount(App)

    // Click A8
    const firstSquare = wrapper.find('.square')
    firstSquare.trigger('click')
    await nextTick()
    expect(wrapper.text()).toContain('A8')

    // Click B8
    const secondSquare = wrapper.find('.square')
    secondSquare.trigger('click')
    await nextTick()
    expect(wrapper.text()).toContain('A8')
  })
})
