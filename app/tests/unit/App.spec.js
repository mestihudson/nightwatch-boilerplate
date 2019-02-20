jest.mock('@/services/api')

import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import api from '@/services/api'
import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('App.vue', () => {
  it('configura mensagens com informações recuperadas de uma api', async () => {
    const message = 'Fire in the Sky!'

    api.getMessage = jest.fn(() => {
      return Promise.resolve({ message })
    })

    const wrapper = shallowMount(App)

    await flushPromises()

    expect(wrapper.find(HelloWorld).props().message).toBe(message)
  })
})
