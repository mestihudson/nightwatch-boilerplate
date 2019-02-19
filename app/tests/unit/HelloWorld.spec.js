import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renderiza props.message quando informado', () => {
    const message = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })
})
