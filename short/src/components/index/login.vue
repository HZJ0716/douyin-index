<template>
	<div class="container">
		<div class="top">
			<img src="/static/image/back.svg" @click="hidden">
			<span class="pwd">密码登陆</span>
		</div>
		<div class="center">
			<span class="tab">手机号登陆有助于您快速找到好友</span>
			<div class="input">
				<input type="text" placeholder='输入手机号码'>
			  <input type="text" placeholder="输入密码">
			</div>
		</div>
	</div>
</template>

<script>
export default{
  methods: {
    hidden () {
      this.$emit('hidLogin')
    }
  }
}
</script>

<style scoped lang='stylus'>
	input
	  margin: 0.2rem 0
	  width: 70%
	  height: 2rem
	  outline: none
	  background-color: rgba(245, 245, 245, 0.3)
	  border: 0
	  border-radius: 0.2rem
	input::-webkit-input-placeholder
	  padding-left: 1rem
	  color: rgba( 235,  235, 235, 0.8)
	img
	  width: 2rem
	  height: 2rem
	.container
	  display:flex
	  flex-direction: column
	  background: linear-gradient(rgba(129, 104, 255, 0.8),rgba(176, 27, 249, 0.8))
	  position: absolute
	  top: 0
	  bottom: 0
	  left: 0
	  right: 0
	.top
	  display:flex
	  flex-direction: row
	  justify-content: space-between
	  align-items: center
	  padding: 1.5rem 1.5rem
	.center
	  display:flex
	  flex-direction:column
	  margin-top: 4rem
	.input
	  text-align:center
	.tab
	  width: 100%
	  text-align:center
	  color: rgb( 235,  235, 235)
	.pwd
	  width: 100%
	  text-align:right

</style>
