<template>
    <div v-show="isLoggedIn" class="container" v>
        <HelloWorld/>
    </div>
    <div v-show="!isLoggedIn" class="login-form">
        <Login :loading="loading" @login="login"/>
    </div>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import HelloWorld from "./components/HelloWorld.vue";
  import Login from "@/components/Login.vue";
  import {$store} from "@/service/store";
  import {User} from "@/service/user/UserService";

  @Options({
    components: {
      HelloWorld,
      Login,
    }
  })
  export default class App extends Vue {
    private loading: boolean = false;
    private isLoggedIn: boolean = false;

    created() {
      $store.user.onChange("APP", (user: User) => {
        if (user) {
          this.isLoggedIn = true;
        }
      })
      console.log(this.isLoggedIn)

    }

    async login(username: string, password: string) {
      this.loading = true;
      await $store.user.loginAsyncAwait(username, password);
      this.loading = false;
    }
  }
</script>

<style>
</style>
