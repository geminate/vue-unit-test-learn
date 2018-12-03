import axios from '@/common/http';

const apiMap = {
    'testMessage': '/testMessage'
};

const api = {};

for (let key in apiMap) {
    api[key] = async (params) => {
        const {data} = await axios.post(apiMap[key], params);
        return data
    }
}

const install = function (Vue) {
    if (install.installed) return;
    install.installed = true;
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return api
            }
        }
    })
};

export default {install};