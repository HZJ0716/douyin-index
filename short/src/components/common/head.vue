<template>
<div class="container">
	<span @click="shLogin"><img src="/static/image/camera.svg"></span>
	<span class="near" @click="shLogin">推荐 | 附近</button></span>
	<span @click="shLogin"><img src="/static/image/search.svg"></span>
</div>
</template>

<script>
export default{
  name: 'Head',
  methods: {
    shLogin () {
      this.$emit('shLogin')
    }
  }
}
</script>

<style scoped lang="stylus">
	span
		color: #fff
		font-size: 1rem
	img
		width: 1.5rem
		height: 1.5rem
		margin-top: 0.6rem
		border-radius: 0.3rem
	.container
		display: flex
		flex-direction: row
		justify-content: space-around
		align-items: center
	.near
		width: 40%
		text-align:center
</style>
