<template>
    <div class="container" v>
        <HelloWorld :a="loading" />
        <HiWorld :a="loading" />
    </div>
    <div class="login-form">
        <Login @login="login" />
    </div>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import HelloWorld from "./components/HelloWorld.vue";
  import HiWorld from "@/components/HiWorld.vue";
  import Login from "@/components/Login.vue";
  import {UserService} from "@/service/UserService";

  @Options({
    components: {
      HelloWorld,
      Login,
      HiWorld,
    }
  })
  export default class App extends Vue {
    private loading: boolean = false;

    async login () {
      this.loading = true;
      await UserService.login();
      this.loading = false;
    }
  }
</script>

<style>
    .container {
        display: flex;
        width: 50%;
        margin: 100px auto;
    }

    .login-form {
        display: flex;
        place-content: center;
    }
</style>
