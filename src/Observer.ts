import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
}

export function useIntersectionObserver(
  targetRef: Ref<Element | null>,
  options: IntersectionObserverOptions = { threshold: 0.1 }
): { isVisible: Ref<boolean> } {
  const isVisible = ref<boolean>(false)
  let observer: IntersectionObserver | null = null

  const callback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    if (entry?.isIntersecting) {
      isVisible.value = true
      if (observer && targetRef.value) {
        observer.unobserve(targetRef.value) // observe only once
      }
    }
  }

  onMounted(() => {
    if (targetRef.value) {
      observer = new IntersectionObserver(callback, options)
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
    }
  })

  return { isVisible }
}
