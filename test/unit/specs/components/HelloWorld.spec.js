import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld';

describe('# src/components/HelloWorld/index.vue', () => {

    describe('# 初始化渲染测试', () => {

        it("标题应渲染为 'Welcome to Your Vue.js App' ", () => {
            const wrapper = shallowMount(HelloWorld, {});
            expect(wrapper.find("h1").text()).to.equal("Welcome to Your Vue.js App")
        });
    });
});