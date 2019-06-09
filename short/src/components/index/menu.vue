<template>
	<div class="container">
		<img class="avatar" :src="avatar" @click="shLogin">
		<div class="like" @click="shLogin">
			<img src="/static/image/like.svg">
			<span>{{like}}</span>
		</div>
		<div class="comment" @click="shLogin">
			<img src="/static/image/comment.svg">
			<span>{{comment}}</span>
		</div>
		<img src="/static/image/share.svg" @click="shLogin">
		<img class="cd" src="/static/image/CD.svg" @click="shLogin">
	</div>
</template>

<script>
export default{
  name: 'Menu',
  props: {
    like: String,
    comment: String,
    avatar: String
  },
  methods: {
    shLogin () {
      this.$emit('shLogin')
    }
  }
}
</script>

<style lang="stylus">
	img
	  width: 2rem
	  height: 2rem
	span
	  font-size: 0.8rem
	  width: 2rem
	  margin-bottom: 0.8rem
	  color: #fff
	.container
	  display: flex
	  flex-direction: column
	.avatar
	  border-radius:50%
	  margin-bottom: 0.8rem
	.like, .comment
	  display: flex
	  flex-direction: column
	  text-align:center
	.cd
	  margin-top: 1rem
</style>
