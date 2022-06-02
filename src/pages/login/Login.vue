<template>
	<view class="login">
		<view class="content">
			<view class="header-back"><view class="logo"></view></view>
			<!-- 主体表单 -->
			<view class="main">
				<view class="login-input solid round">
					<text class="iconfont icon-user"></text>
					<input type="text" v-model="username" maxlength="20" placeholder="登录账号" placeholder-style="color:#666" />
				</view>
				<view class="login-input solid round">
					<text class="iconfont icon-pwd"></text>
					<input type="password" v-model="password" maxlength="20" placeholder="密码" placeholder-style="color:#666" />
				</view>
				<view class="hr"></view>
				<!-- <wButton class="text-xxl" text="登 录" :rotate="isRotate" bgColor="linear-gradient(to right, rgba(128, 166, 254, 1), rgba(19, 143, 245, 0.9))" @click="startLogin()"></wButton>

				<tui-button class="text-xxl" shape="circle" :loading="isRotate" @click="startLoginActive">登 录</tui-button> -->
			</view>
		</view>
		<view class="page-footer">协同办公系统</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue';

	export default defineComponent({
		setup() {
			/**
			 * 数据实体
			 */
			const data = reactive({
				username: '',
				password: '',
				isRotate: false,
			});

			/**
			 * 登录 Method
			 */
			const startLoginActive = () => {
				console.log('登录');
			};

			return { ...toRefs(data), startLoginActive };
		},
	});
</script>

<style lang="scss" scoped>
	page {
		background-color: #ffffff;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header-back {
		height: 34vh;
		position: relative;
		background-image: url(../../static/img/login/bg.png);
		background-position: center;
		background-size: cover;
	}

	.header-back .logo {
		position: absolute;
		top: 90%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 160rpx;
		height: 160rpx;
		background-image: url(../../static/img/logo.png);
		background-position: center;
		background-size: cover;
		border-radius: 30rpx;
		box-shadow: 0 10rpx 10rpx rgba(222, 222, 222, 0.9); /*阴影出现在元素下方*/
	}

	/* 主体 */
	.main {
		display: flex;
		flex-direction: column;
		padding: 70upx;
		position: relative;
		z-index: 2;
	}

	.login-input {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 28rpx;
		margin-top: 30rpx;
		display: flex;
	}

	.login-input .iconfont {
		padding-left: 10rpx;
		width: 96rpx;
		text-align: center;
		color: #1793f9;
		font-size: 48rpx;
	}

	.login-input input {
		height: 100rpx;
		line-height: 100rpx;
		flex-grow: 1;
	}

	.page-footer {
		text-align: center;
		padding-top: 200rpx;
		color: #999;
		font-size: 30rpx;
	}

	.login-input.solid::after {
		border: 1upx solid rgba(0, 0, 0, 0.2);
	}

	.hr {
		height: 30rpx;
	}
</style>
