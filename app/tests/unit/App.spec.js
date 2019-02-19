import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('configura mensagens com informações recuperadas de uma api', () => {
    const wrapper = shallowMount(App, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
