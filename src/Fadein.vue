<template>
    <div
      ref="target"
      class="transition-all duration-1000"
      :class="[
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
        getDirectionClass
      ]"
      :style="{
        transitionDelay: `${$props.delay || 0}ms`,
      }"
    >
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useIntersectionObserver } from './Observer'
  
  const target = ref<HTMLElement | null>(null)
  const { isVisible } = useIntersectionObserver(target)
  
  type Direction = 'left' | 'right' | 'up' | 'down'
  
  const props = defineProps<{
    delay?: number
    direction?: Direction
  }>()
  
  const getDirectionClass = computed(() => {
    const direction = props.direction || 'left'
    
    switch (direction) {
      case 'left':
        return isVisible.value ? 'translate-x-0' : '-translate-x-20'
      case 'right':
        return isVisible.value ? 'translate-x-0' : 'translate-x-20'
      case 'up':
        return isVisible.value ? 'translate-y-0' : '-translate-y-20'
      case 'down':
        return isVisible.value ? 'translate-y-0' : 'translate-y-20'
      default:
        return ''
    }
  })
  </script>