<!--suppress ALL -->
<template>
  <div id="app">
      <transition name="slide-left">
        <router-view ></router-view>
      </transition>
      <!-- <transition name="bounce">
        <router-view ></router-view>
      </transition> -->
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
  html {
    height: 100%;
    width: 100%;
    font-size: 100px;
  }

  body {
    height: 100%;
    width: 100%;
  }

  #app {
    height:100%;
    width: 100%;
    .bounce-enter-active {
       animation: bounce-in .3s;
     }
     .bounce-leave-active {
       animation: bounce-out .3s;
     }
     @keyframes bounce-in {
       0% {
         opacity: 0;
       }
       100% {
         opacity: 1;
       }
     }
     @keyframes bounce-out {
       0% {
          opacity: 1
       }
       100% {
          opacity: 0
       }
     }
  }
</style>
