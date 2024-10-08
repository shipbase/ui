<script setup lang="ts">
import { Button } from "@ui/vue/button"
import Examples from "@ui/vue/examples"
import { RotateCcw } from "lucide-vue-next"
import { Suspense, defineAsyncComponent, ref } from "vue"

const props = defineProps<{
  name: string
  hidden: boolean
}>()

const key = ref(0)

const Component = defineAsyncComponent(
  props.hidden ? () => Promise.resolve() : Examples[props.name]
)
</script>

<template>
  <div
    :key="key"
    v-if="!hidden"
    class="relative flex size-full flex-1 items-center justify-center p-4 md:p-10"
  >
    <Button
      @click="() => key += 1"
      variant="ghost"
      class="absolute top-2 right-2"
    >
      <RotateCcw aria-label="restart-btn" :size="16" />
    </Button>
    <Suspense>
      <Component />
    </Suspense>
  </div>
</template>


