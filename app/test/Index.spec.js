import {shallowMount} from '@vue/test-utils'
import Footer from '@/components/footer/Footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
});
