<template>
    <div class="a">
        <div>
            Hello, {{username}} <br/>
        </div>
    </div>
</template>

<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  import {$store} from "@/service/store";
  import {User} from "@/service/user/UserService";

  @Options({})
  export default class HelloWorld extends Vue {
    private username = "";

    created() {
      $store.user.onChange("Hello1", (user: User) => {
        this.username = user.username;
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
        background: #ccc;
    }
</style>
