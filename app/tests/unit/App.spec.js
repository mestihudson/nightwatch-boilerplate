const message = 'Fire in the Sky!'

jest.mock('axios', () => ({
  get: jest.fn(() => {
    return Promise.resolve({ message: 'Fire in the Sky!' })
  })
}))

import { shallowMount } from '@vue/test-utils'
import axios from 'axios'

import App from '@/App.vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('App.vue', () => {
  it('configura mensagens com informações recuperadas de uma api', () => {
    const wrapper = shallowMount(App)

    expect(wrapper.find(HelloWorld).props().message).toBe(message)
  })
})
