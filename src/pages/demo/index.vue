<template>
	<view class="warp">
		<text class="text" @click="loginActive">登录(演示登录)</text>
		<text>当前购物车数量{{ count }}</text>
		<text>显示{{ isEven }}</text>
		<text class="text" @click="storeActive">购物车加1(pinia)</text>

		<view class="ali-icon-dian">22</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent, computed } from 'vue';
	import { useSaasApi } from '@/api';
	import { storeToRefs } from 'pinia';
	import { useCartStore } from '@/store';

	export default defineComponent({
		setup(props, context) {
			//获取购物车Store实例对象
			const cartStore = useCartStore();

			const loginActive = () => {
				useSaasApi.login('lvcq', '123456').then(res => {
					console.log(res);
				});
			};

			const storeActive = () => {
				cartStore.countAdd();
			};

			const isEven = computed(() => cartStore.overNumber2Str);

			return {
				isEven,
				...storeToRefs(cartStore),
				loginActive,
				storeActive,
			};
		},
	});
</script>

<style lang="scss">
	.warp {
		background: red;

		.text {
			background: blue;
		}
	}
</style>
