<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FieldPropsDefine } from "../types";
export default defineComponent({
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const value = Number(e.target.value);
      if (Number.isNaN(value)) {
        props.onChange(undefined);
      } else {
        props.onChange(value);
        console.log(value);
      }
    };
    return {
      handleChange
    };
  }
});
</script>

<style></style>
