import { defineStore } from 'pinia';

/**
 * 案例购物车store用法
 */
const useCartStore = defineStore('storeId2useCart', {
	//使用箭头函数具备完整类型推断
	//简写了这里 完成为 state: () => { return{count: 0} },
	state: () => ({
		count: 0,
	}),
	getters: {
		overNumber2Str: state => (state.count > 9 ? '99+' : state.count),
	},
	actions: {
		countAdd() {
			this.count += 1;
		},
	},
});

export default useCartStore;
