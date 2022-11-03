<script lang="ts">
import {useCounterLogic} from "../usecase/ChildLogic";
import {Ref} from "vue";
import {ICounterLogic} from "./Counter.vue";

export interface IHelloWorldLogic {
  message: Ref<string>
  counterLogic: ICounterLogic
}
</script>
<script setup lang="ts">
import Counter from "./Counter.vue";
import {useCounterLogic} from "../usecase/ChildLogic";

defineProps<{ logic: IHelloWorldLogic }>()

</script>

<template>

  <h1>{{ logic.message }}</h1>

  <Counter :logic="logic.counterLogic"/>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
