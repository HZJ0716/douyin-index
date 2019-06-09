<template>
	<div class="container">
		<span @click="shLogin">首页</span>
		<span @click="shLogin">发现</span>
		<span @click="shLogin"><img src="/static/image/more.svg"></span>
		<span @click="shLogin">消息</span>
		<span @click="shLogin">我</span>
	</div>
</template>

<script>
export default{
  name: 'Flooter',
  methods: {
    shLogin () {
      this.$emit('shLogin')
    }
  }
}
</script>

<style scoped lang="stylus">
	span
	  color: rgba(255, 255, 255, 0.8)
	  font-size: 1rem
	img
	  position:relative
	  top: 0.5rem
	  width: 80%
	  height: 80%
	  border-radius: 0.3rem
	.container
	  display: flex
	  flex-direction: row
	  justify-content: space-around
	  align-items: flex-end
	  border-top: 0.1rem solid rgba(255, 255, 255, 0.8)
</style>
