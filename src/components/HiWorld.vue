<template>
    <div class="a">
        <div>
            Hi, {{username}} <br/>
            Password: {{password}}
        </div>
    </div>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import {UserService} from "@/service/UserService";
  import {PasswordService} from "@/service/PasswordService";

  @Options({})
  export default class HiWorld extends Vue {
    private username = "";
    private password = "";

    created() {
      UserService.onChange("Hi1", (username: string) => {
        this.username = username;
      })

      PasswordService.onChange("Hi2", (password: string) => {
        this.password = password;
      })
    }

  }
</script>

<style scoped>
    .a {
        flex: 1;
        height: 200px;
        display: flex;
        align-items: center;
        place-content: center;
        background: #ffc7c7;
    }
</style>
