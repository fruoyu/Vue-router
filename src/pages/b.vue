<template>
	<div class="b">
		<p class="red">THIS IS B</p>
		<p class="arrow">{{Object.keys(this.$route.query).length ? this.$route.query.userId : ''}}</p>
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	created(){

	},
	methods: {

	}
}
</script>

<style lang="less" scoped>

	@import '~assets/less/mixin.less';

	.b{
		background-color: black;
		color: #fff;
	}
	.arrow{
		.arrow_down(5px, #fff);
	}
</style>
