<template>
  <div class="page-error">
    <div class="box">
      <h4>该项目不支持该浏览器...</h4>
    </div>
  </div>
</template>
<script>
export default{
  name: 'browser-compatible'
}
</script>
<style lang="scss">
.page-error {
  color: #707473;
  text-align: center;
  .box{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 360px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
}
</style>
