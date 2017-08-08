<template>
  <div>
    <div class="title">上下布局可调整组件</div>
    <div class="flex">
      <div class="flex-top" ref="top">
        <div id="divider" class="flex-top-resizer" ref="resizer" @mousedown="mouseDown" @></div>
      </div>
      <div class="flex-bottom" ref="bottom">
      </div>
    </div>
  </div>
</template>
<script>
  import './index.less'

  export default {
    computed: {
      divider () {
        return this.$refs.resizer
      },
      top () {
        return this.$refs.top
      },
      bottom () {
        return this.$refs.bottom
      }
    },
    methods: {
      mouseDown (e) {
        console.log('mousedown...')
        e = e || window.event
        let startHeight = this.top.offsetHeight
        let endHeight = startHeight
        let startY = e.clientY
        let minHeight = this.divider.offsetHeight
        document.onmousemove = e => {
          console.log('moving...')
          let maxHeight = window.innerHeight
          e = e || window.event
          endHeight = startHeight + (e.clientY - startY)
          if (endHeight < minHeight) {
            endHeight = minHeight
          } else if (endHeight > maxHeight) {
            endHeight = maxHeight
          }
          this.divider.style.cssText = 'display:block;top:' + (endHeight) + 'px'
        }
        document.onmouseup = e => {
          document.onmousemove = null
          document.onmouseup = null
          this.top.style.height = endHeight + 'px'
        }
        return false
      }
    }
  }
</script>