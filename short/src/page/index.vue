<template>
  <div class="container">
  <video
  :style="{height: height}"
  :src="vidurl" autoplay
  loop @click='pause'
  poster="/static/image/bg.jpg"></video>
  <div class="desc">
    <span class="author">{{nickname}}</span><br>
    <span class="des">{{desc}}</span>
  </div>
  <head-cmp class='head' @shLogin='shLogin'></head-cmp>
  <menu-cmp class='menu' :like='like' :comment='comment' :avatar="avatar" @shLogin='shLogin'></menu-cmp>
  <flooter-cmp class="flooter" @shLogin='shLogin'></flooter-cmp>
  <transition name="lg">
    <login-cmp class="lgshade" v-show="islogin" @hidLogin='hidLogin'></login-cmp>
  </transition>
  </div>
</template>

<script>
import HeadCmp from '../components/common/head.vue'
import MenuCmp from '../components/index/menu.vue'
import FlooterCmp from '../components/index/flooter.vue'
import LoginCmp from '../components/index/login.vue'
import touch from '../util/change.js'
export default{
  name: 'Index',
  components: {
    HeadCmp,
    MenuCmp,
    FlooterCmp,
    LoginCmp
  },
  data () {
    return {
      vid: {},
      vidurl: '',
      like: '',
      desc: '',
      comment: '',
      avatar: '',
      nickname: '',
      play: true,
      height: '',
      islogin: false,
      startY: 0,
      endY: 0
    }
  },
  methods: {
    // 手指滑动开始
    TouchStart (event) {
      this.startY = event.changedTouches[0].clientY
    },
    // 手指滑动结束
    TouchEnd (event) {
      this.endY = event.changedTouches[0].clientY
    },
    // 登陆页
    hidLogin () {
      this.islogin = false
    },
    // 登陆页
    shLogin () {
      let video = document.querySelector('video')
      this.islogin = true
      video.pause()
    },
    // 加载
    load () {
      console.log('load')
    },
    pause () {
      // 控制播放
      this.play = !this.play
      let video = document.querySelector('video')
      // 暂停
      if (this.play) { video.pause() } else { video.play() }
    }
  },
  created () {
    // 监听滑动
    window.addEventListener('touchstart', this.TouchStart)
    window.addEventListener('touchend', this.TouchEnd)
  },
  mounted () {
    let video = document.querySelector('video')
    console.log(video.networkState)
    this.$http.get('https://kuaiyinshi.com/api/hot/videos/?source=kuai-shou&page=3&callback=__jp4').then(res => {
      // 处理数据
      let vid = touch.changeJson(res)
      this.vid = vid
      let index = Math.round(Math.random() * 19)
      vid = vid.data[index]
      // 数据处理
      this.like = touch.changePage(vid.statistics.zan)
      this.comment = touch.changePage(vid.statistics.comment)
      this.avatar = vid.avatar
      this.vidurl = vid.video_url
      this.desc = vid.desc
      this.nickname = vid.nickname
    })

    // 获取屏幕高度
    let height = document.documentElement.clientHeight + 'px'
    this.height = height
  },
  watch: {
    endY: function (newval, oldval) {
      // 控制切换视频
      if (Math.abs(this.startY - this.endY) >= 70) {
        let index = Math.round(Math.random() * 19)
        let vid = this.vid.data[index]
        this.like = touch.changePage(vid.statistics.zan)
        this.comment = touch.changePage(vid.statistics.comment)
        this.avatar = vid.avatar
        this.nickname = vid.nickname
        this.vidurl = vid.video_url
        this.desc = vid.desc
      }
    }
  }
}
</script>

  <style scoped>
  .container{
    margin: 0;
    padding: 0;
  }
  video{
    width: 100%;
  height: 100%;
  object-fit: fill
  }
  .head{
  width: 100%;
  position: absolute;
  top: 1rem;
  }
  .menu{
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  }
  .flooter{
  position: absolute;
  bottom: 0rem;
  left: 0;
  width: 100%;
  }
  .desc{
  position: absolute;
  bottom: 2.5rem;
  left: 1.5rem;
  }
  .author{
  font-size: 1.2rem;
  font-weight: bold;
  }
  .des{
  width: 90%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:3;
  font-size: 1rem;
  }
  /* 过渡动画 */
  .lg-leave-to{
    transform: translate3d(0,100%,0);
    opacity: 0;
  }
  .lg-enter{
    transform: translate3d(0,100%,0);
    opacity: 0;
  }
  .lg-leave-active,.lg-enter-active{
    transition: all 0.5s ease;
  }
  </style>
