<template>
  <div id="app">
    <div class="top">
      <a href="/home"> Gentle Expeditions </a></div>
    <div class="content" id="scroll_content">
        <router-view></router-view>
    </div>
    <div class="footer">
      <span> &#9400; Gentle Expeditions 2016-2019  </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
html {
  overflow-y: hidden !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  .content {
    overflow: auto;
    height: 93vh;
  }
  .footer, .top {
    display: flex;
    align-items: center;
    color: white;
    background-color: #000;
  }
  .footer {
    height: 3vh;
    font-size: 16px;
    justify-content: center;
  }
  .top {
    height: 4vh;
    font-size: 18px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .page-enter-active, .page-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

  #scroll_content::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    background-color: #F5F5F5;
    border-radius: 6px;
  }

  #scroll_content::-webkit-scrollbar
  {
    width: 6px;
    background-color: #F5F5F5;
  }

  #scroll_content::-webkit-scrollbar-thumb
  {
    border-radius: 6px;
    background-color: #FFF;
    background-image: -webkit-gradient(linear,
            40% 0%,
            75% 84%,
            from(#1d1d1d),
            to(#303030),
            color-stop(.6, #404040))
  }
}
</style>
