<template>
    <div class="login">
        <label>
            <input style="width: 300px" type="text" v-model="username"/>
        </label>
        <label>
            <input style="width: 300px" type="text" v-model="password"/>
        </label>
        <label>
            <button @click="login"/>
        </label>
    </div>
</template>

<script lang="ts">
  import {Watch} from 'vue-property-decorator';
  import {Options, Vue} from "vue-class-component";
  import {UserService} from "@/service/UserService";
  import {PasswordService} from "@/service/PasswordService";

  @Options({})
  export default class Login extends Vue {
    private username = ""
    private password = ""

    @Watch("username")
    watchUsername(v: string) {
      UserService.set(v)
    }

    @Watch("password")
    watchPassword(v: string) {
      PasswordService.set(v)
    }

    login() {
      this.$emit("login")
    }

  }
</script>

<style scoped>
</style>
