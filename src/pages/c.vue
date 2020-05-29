<template>
	<div class="c">
		<p>THIS IS C</p>
    <h1>用户名:{{this.$store.getters.userName}}</h1>
    <button @click="onClick">点击触发Vuex</button>
		<!--<p>image</p>-->
		<!--<img src="~assets/111111.gif" alt="">-->
		<!--<p>background-image</p>-->
		<!--<div class="pic"></div>-->
	</div>
</template>

<script>
  import { mapGetters} from 'vuex'
  export default {
	data(){
		return {

		}
	},
	created(){

	},
    mounted(){
      // console.log(this, '===========')
    },
	methods: {
    onClick(){
      this.$store
        .dispatch('changeUserName', {name: 'lisi'})
      // this.$store
      //   .dispatch("Login", "li")
      //   .then(() => {
      //     this.loading = false;
      //     this.$router.push({ path: "/" });
      //   })
      //   .catch(() => {
      //     this.loading = false;
      //   });
    }
	}
}
</script>

<style lang="less" scoped>
	.c{
		background-color: blue;
		color: #fff;
	}
	.pic{
		width: 352px;
		height: 240px;
		background-size: 100%;
	}
</style>
