export default{
  changeJson (res) {
    let str = res.data.replace(/__jp4[(]/, '')
    str = str.replace(/[)]/, '')
    str = str.replace(/[;]/g, '')
    let vid = JSON.parse(str)
    return vid
  },
  changePage (num) {
    if (num > 10000) {
      return Math.floor(num / 10000) + 'W'
    } else {
      return num + ''
    }
  }
}
