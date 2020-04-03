
import NavBar from '@/components/NavBar'
import { mount } from '@vue/test-utils'



// decribes  - allow to group related tests
describe('NavBar', () => {
    // If user is not logged in, do not show logout button
    // individual test(use test or it method)
    test('here we describe what we test, If user is not logged in, do not show logout button', () => {
    const wrapper = mount(NavBar) // mounting the component
    expect(wrapper.find('button').isVisible()).toBe(false)
    })
    // If user is logged in, show logout button
    test('If user loggedIn show button Logout', async () => {
        const wrapper = mount(NavBar)
        wrapper.setData({ loggedIn: true })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})