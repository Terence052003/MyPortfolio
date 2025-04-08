<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/ui/button/Button.vue';
</script>

<template class="bg-gray-200">
  <header class="h-16 bg-gray-300">
    <nav class="flex items-center justify-between h-full px-4">
      <div class="text-xl font-bold">Portfolio</div>
      <ul class="flex space-x-4">
        <li><Button variant="link" class="text-gray-700 text-xl font-semibold">Home</Button></li>
        <li><Button variant="link" class="text-gray-700 text-xl font-semibold" >Services</Button></li>
        <li><Button variant="link" class="text-gray-700 text-xl font-semibold">Contact</Button></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto">
    <section class="flex flex-col items-left h-screen justify-center">
      <h1 class="text-4xl font-bold mb-4">Terence Alaban</h1>
      <article class="text-lg mb-8">I am a web developer with a passion for creating beautiful and functional websites.</article>
      

    </section>
  </main>
</template>
