import {mount, createLocalVue} from '@vue/test-utils';
import api from '@/api';
import HelloWorld from '@/components/HelloWorld';
import sinon from 'sinon';

describe('# src/components/HelloWorld/index.vue', () => {

    const localVue = createLocalVue();
    localVue.use(api);

    describe('# 初始化渲染测试', () => {

        it("副标题在 mounted 后应被渲染为 'mounted message' ", async () => {
            const wrapper = mount(HelloWorld, {localVue});
            wrapper.vm.$nextTick().then(() => {
                expect(wrapper.find("h2").text()).to.equal("mounted message");
            });
        });

        it("按钮点击后 getMessage 方法 应被调用", async () => {
            const spy = sinon.spy(HelloWorld.methods, 'getMessage');
            const wrapper = mount(HelloWorld, {localVue});
            wrapper.find('button').trigger('click');
            wrapper.vm.$nextTick().then(() => {
                expect(spy.called).to.equal(true);
            });
            sinon.restore();
        });

        it("按钮点击后 副标题应被渲染为 接口返回结果", async () => {
            const stub = sinon.stub(HelloWorld.methods, 'getMessage').returns('return message');
            const wrapper = mount(HelloWorld, {localVue});
            wrapper.find('button').trigger('click');
            wrapper.vm.$nextTick().then(() => {
                expect(wrapper.find("h2").text()).to.equal("return message");
            });
            sinon.restore();
        });
    });
});