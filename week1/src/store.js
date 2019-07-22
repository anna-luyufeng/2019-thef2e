import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [{
                id: 6,
                name: '完成到數計時器（開始、暫停、重置）',
                description: '描述文字描述文字描述文字',
                compelete: false,
                compelete_at: '',
                records: [1, 1, 1],
            },
            {
                id: 5,
                name: '區分未完成與已完成事項',
                description: '描述文字描述文字描述文字',
                compelete: false,
                compelete_at: '',
                records: [1, 1, 1],
            },
            {
                id: 4,
                name: '基本待辦事項新增、勾選完成',
                description: '描述文字描述文字描述文字',
                compelete: false,
                compelete_at: '',
                records: [1],
            },
            {
                id: 3,
                name: '完成基本的 HTML 版面',
                description: '描述文字描述文字描述文字',
                compelete: false,
                compelete_at: '',
                records: [],
            },
            {
                id: 2,
                name: '安裝 Ant Design Vue 並引入使用',
                description: '描述文字描述文字描述文字',
                compelete: true,
                compelete_at: '',
                records: [1, 1],
            },
            {
                id: 1,
                name: '用 Vue CLI 創建專案',
                description: '描述文字描述文字描述文字',
                compelete: true,
                compelete_at: '',
                records: [1, 1, 1, 1, 1],
            },
        ]
    },
    mutations: {},
    actions: {}
});