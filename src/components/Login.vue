<template>
    <div class="login">
        <input placeholder="username" type="text" v-model="username"/>
        <input placeholder="password" type="password" v-model="password"/>
        <button @click="login">Login</button>
        <span>{{passwordRender()}}</span>
    </div>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import {Prop} from "vue-property-decorator";
  import {useMemo} from "@/components/hook/MemoCustom";

  @Options({})
  export default class Login extends Vue {
    @Prop({required: false, default: false}) private loading: boolean;
    private username = "";
    private password = "";

    private memo = useMemo(() => this.changeText(this.password));

    // useMemo
    passwordRender() {
      return this.memo(this.password);
    }

    changeText(text: string) {
      console.log("COMPLEX LOGICCCC")
      return text + "   <= đây là password";
    }


    login() {
      this.$emit("login", this.username, this.password);
    }

  }
</script>

<style scoped>
    .login {
        margin: 100px auto;
        display: flex;
        justify-content: center;
        width: 500px;
        border: 1px solid #ccc;
        border-radius: 15px;
        flex-direction: column;
        padding: 10px;
    }

    .login input {
        margin-top: 20px;
        height: 25px;
    }

    .login button {
        margin-top: 20px;
        width: 200px;
        height: 25px;
        place-self: center;
    }
</style>
