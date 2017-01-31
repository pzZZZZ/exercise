<template>
  <div class="hello">
    <c-title :text="title"></c-title>
    <img class="logo" src="../assets/images/logo.png">
    <p class="welcome">欢迎使用 vue</p>
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
<mt-field label="网站" placeholder="请输入网址" type="url"></mt-field>
<mt-field label="数字" placeholder="请输入数字" type="number"></mt-field>
<mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
    <div v-html="content"></div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import cTitle from 'components/title';
  import { Field } from 'mint-ui';
  import Vue from 'vue';
  Vue.component(Field.name, Field);



  export default {
    data () {
      return {
        title: 'Hello Vue!',
        content: ''
      }
    },
    methods: {
      async getContent () {
        const response = await fetch('/api/hello');
        this.content = await response.text();
      }
    },
    mounted () {
      this.$store.commit('MESSAGE', '欢迎使用 vue！');
      this.getContent();
    },

    components: {cTitle}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
