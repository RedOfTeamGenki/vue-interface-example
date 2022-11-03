<template>
  <div class="card">
    <button type="button" @click="logic.count++">count is {{ logic.count }}</button>
    <p>
      Edit
      <code>components/Counter.vue</code> to test HMR
    </p>
  </div>
</template>
<script lang="ts">
import {Ref} from "vue";

export interface ICounterLogic {
  count: Ref<number>
}
</script>
<script setup lang="ts">
import {reactive} from "vue";

const props = defineProps<{ logic: ICounterLogic }>();
const logic = reactive(props.logic)

</script>
