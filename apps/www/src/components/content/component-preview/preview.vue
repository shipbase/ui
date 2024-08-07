<script setup lang="ts">
import { Suspense, defineAsyncComponent } from "vue"

const props = defineProps<{
  component: string
  name: string
}>()

const Component = defineAsyncComponent(
  () =>
    import(
      `../../../../node_modules/@ui/vue/dist/examples/${props.component}/${props.name}.js`
    )
)
</script>

<template>
  <Suspense>
    <Component />
  </Suspense>
</template>


