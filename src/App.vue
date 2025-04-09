<script setup lang="ts">
// import { ref } from 'vue';
import Button from './components/ui/button/Button.vue';
import { Facebook, AtSign, Linkedin, BookUser } from 'lucide-vue-next';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
}
from '/xampp/htdocs/MyPortfolio/MyPortfolio/src/components/ui/carousel'
</script>

<template class="bg-gray-200">
  <header class="h-16 bg-gray-300 fixed top-0 w-full z-50">
    <nav class="flex items-center justify-between h-full px-4">
      <div class="text-xl font-bold">Portfolio</div>
      <ul class="flex space-x-4">
        <li><Button variant="link" class="text-gray-700 text-md font-semibold">Home</Button></li>
        <li><Button variant="link" class="text-gray-700 text-md font-semibold" >Services</Button></li>
        <li><Button variant="link" class="text-gray-700 text-md font-semibold">Contact</Button></li>
      </ul>
    </nav>
  </header>

  <main class="container mx-auto">
    <section class="grid grid-cols-2">
      <div class="h-screen px-8 place-content-center">
        <article class="space-y-4">
          <h1 class="text-4xl font-bold underline underline-offset-16 mb-6">Terence Alaban</h1>
          <h2 class="text-2xl font-semibold">I am a web developer with a passion for creating beautiful and functional websites.</h2>
          <p class="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi soluta consectetur rerum consequatur corporis voluptatem, 
            neque quibusdam cupiditate illo odio natus temporibus molestias dolorum harum maiores inventore, rem reprehenderit id!.
          </p>
        </article>

        <Icons class="flex flex-row gap-4 mt-8">
          <Facebook :stroke-width="0" fill="white" class="bg-blue-500 text-black p-1 border-2 rounded-md border-black size-16"/>
          <Linkedin :stroke-width="0" fill="white" class="bg-blue-500 p-1 border-2 rounded-md border-black size-16"/>
          <label class="border-r-3 rounded-md border-black"></label>
          <AtSign :stroke-width="1.5" class="bg-red-500 text-white p-1 border-2 rounded-md border-black size-16"/>
          <BookUser :stroke-width="1" class="bg-white p-1 border-2 rounded-md border-black size-16"/>
        </Icons>
      </div>

      <div class="h-screen px-8 place-content-center">
        <img src="../assets/terence.jpg" alt="No image" class="rounded-md h-124 object-cover border-2 border-black" />
      </div>
    </section>

    <section class="grid grid-cols-3 space-y-6 space-x-6 px-8">
      <header class="col-span-3 ">
        <h1 class="flex flex-row items-center justify-center text-3xl font-bold">
          My Experiences
        </h1>
        <h2 class="flex flex-row items-center justify-center text-xl">
          The following are my forte and the services that I offer as your potential programmer
        </h2>
      </header>

      <div class="h-76 border-2 border-black rounded-md">

      </div>
      <div class="h-76 border-2 border-black rounded-md">

      </div>
      <div class="h-76 border-2 border-black rounded-md">

      </div>

      <header class="col-span-3 ">
        <h1 class="flex flex-row items-center justify-center text-3xl font-bold">
          My Current Projects
        </h1>
        <h2 class="flex flex-row items-center justify-center text-xl">
          Please Select To View
        </h2>
      </header>

      <div class="h-42 border-2 border-black rounded-md">

      </div>
      <div class="h-42 border-2 border-black rounded-md">

      </div>
      <div class="h-42 border-2 border-black rounded-md">

      </div>

      <h2 class="col-span-3 flex flex-row text-center items-center justify-center text-xl">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos, 
        nesciunt earum qui reprehenderit veniam dolores! Temporibus porro, nesciunt enim ipsum, quam fuga sint vel repudiandae tenetur dignissimos consequatur eos.
      </h2>

      <div>
        <Carousel
        :opts="{
          align: 'start',
          loop: true,
        }"
      >
        <CarouselContent>
          <CarouselItem>123</CarouselItem>
          <CarouselItem>123</CarouselItem>
          <CarouselItem>123</CarouselItem>
        </CarouselContent>
      </Carousel>
      </div>
    </section>
  </main>
</template>
