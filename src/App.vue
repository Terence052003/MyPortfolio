<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/ui/button/Button.vue';
import { Card, CardContent } from '../src/components/ui/card';
import { watchOnce } from '@vueuse/core';
import { Facebook, AtSign, Linkedin, BookUser, Mail, Phone, Blocks, Globe, Server, Figma } from 'lucide-vue-next';
import TailwindLogo from '../src/Icons/tailwind.vue'
import Bootstrap from './Icons/bootstrap.vue';
import Canva from "../src/Icons/canva.vue"
import HTML from "../src/Icons/html.vue"
import CSS from "../src/Icons/css.vue"
import Vue from './Icons/vue.vue';
import JS from "../src/Icons/javascript.vue"
import TS from "../src/Icons/typescript.vue"
import PHP from "../src/Icons/php.vue"
import Laravel from "./Icons/laravel.vue"
import type { CarouselApi } from '../src/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
from '../src/components/ui/carousel'

// Static image data
const images = [
  {
    id: 1,
    src: '/src/assets/terence.jpg',
    title: 'Project 1',
    description: 'Description for project 1'
  },
  {
    id: 2,
    src: '/src/assets/terence.jpg',
    title: 'Project 2',
    description: 'Description for project 2'
  },
  {
    id: 3,
    src: '/src/assets/terence.jpg',
    title: 'Project 3',
    description: 'Description for project 3'
  },
  {
    id: 4,
    src: '/src/assets/terence.jpg',
    title: 'Project 4',
    description: 'Description for project 4'
  }
];

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value)
    return
  emblaMainApi.value.scrollTo(index)
}

// Navigation function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi)
    return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})

</script>

<template>
  <div class="min-h-screen bg-[#1a1a1a]">
    <header class="h-16 bg-white fixed top-0 w-full z-50 shadow-md">
      <nav class="flex items-center justify-between h-full px-4 md:px-8 lg:px-12 container mx-auto">
        <div class="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">Portfolio</div>
        <ul class="flex space-x-2 md:space-x-4 lg:space-x-6">
          <li><Button variant="link" class="text-gray-700 hover:text-blue-600 text-sm md:text-md lg:text-lg font-semibold cursor-pointer duration-300" @click="scrollToSection('home')">Home</Button></li>
          <li><Button variant="link" class="text-gray-700 hover:text-blue-600 text-sm md:text-md lg:text-lg font-semibold cursor-pointer duration-300" @click="scrollToSection('services')">Services</Button></li>
          <li><Button variant="link" class="text-gray-700 hover:text-blue-600 text-sm md:text-md lg:text-lg font-semibold cursor-pointer duration-300" @click="scrollToSection('contact')">Contact</Button></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto pt-16 px-4 md:px-8 lg:px-12">
      <section id="home" class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 scroll-mt-16 min-h-screen">
        <div class="flex flex-col justify-center px-4 md:px-8">
          <article class="space-y-4">
            <h1 class="text-3xl md:text-4xl lg:text-4xl font-bold text-white underline underline-offset-16 mb-6">Terence Alaban</h1>
            <h2 class="text-xl md:text-2xl lg:text-2xl font-semibold text-gray-300">UI/UX Designer & Front-End Developer</h2>
            <p class="text-base md:text-lg lg:text-lg text-gray-400">
              Hi! I am a web developer with a desire to learn and grow in the field of web development.
              My main goal is to create a website that is not only functional but also aesthetically pleasing. 
              Let's work together and create your idea into a beautiful and functional website.
            </p>
          </article>

          <Icons class="flex flex-wrap gap-4 mt-8">
            <Facebook :stroke-width="0" fill="white" class="bg-gray-800 text-white p-1 border-2 rounded-md border-gray-700 size-12 md:size-14 lg:size-16 hover:bg-blue-700 hover:scale-110 transition-transform duration-150"/>
            <Linkedin :stroke-width="0" fill="white" class="bg-gray-800 text-white p-1 border-2 rounded-md border-gray-700 size-12 md:size-14 lg:size-16 hover:bg-blue-700 hover:scale-110 transition-transform duration-150"/>
            <label class="border-r-3 rounded-md border-gray-700"></label>
            <AtSign :stroke-width="1.5" class="bg-gray-800 text-white p-1 border-2 rounded-md border-gray-700 size-12 md:size-14 lg:size-16 hover:bg-red-600 hover:scale-110 transition-transform duration-150"/>
            <BookUser :stroke-width="1" class="bg-gray-800 text-white p-1 border-2 rounded-md border-gray-700 size-12 md:size-14 lg:size-16 hover:bg-gray-900 hover:scale-110 transition-transform duration-150"/>
          </Icons>
        </div>

        <div class="flex items-center justify-center px-4 md:px-8">
          <img src="../public/pictures/AIFormal.png" alt="No image" class="rounded-md w-full md:w-auto h-auto max-h-[70vh] object-contain" />
        </div>
      </section>

      <section id="services" class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-8 lg:px-12 scroll-mt-16 py-8 lg:py-12">
        <header class="col-span-1 md:col-span-3 text-center mb-8">
          <h1 class="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4">
            My Experiences
          </h1>
          <h2 class="text-lg md:text-xl lg:text-xl text-gray-300">
            The following are my forte and the services that I offer as your potential programmer
          </h2>
        </header>

        <div class="h-auto border-2 border-gray-700 rounded-md bg-gray-800 p-4 md:p-6">
          <Icon class="flex flex-row items-center justify-self-center text-white mb-4">
            <Blocks :stroke-width="1" class="size-10 md:size-12 lg:size-14"/> <span class="text-lg md:text-xl lg:text-xl font-semibold ml-2">UI/UX Design</span>
          </Icon>
          <div class="space-y-4">
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <Figma class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">Figma</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <Canva class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">Canva</p>
            </section>
          </div>
        </div>

        <div class="h-auto border-2 border-gray-700 rounded-md bg-gray-800 p-4 md:p-6">
          <Icon class="flex flex-row items-center justify-self-center text-white mb-4">
            <Globe :stroke-width="1" class="size-10 md:size-12 lg:size-14"/> <span class="text-lg md:text-xl lg:text-xl font-semibold ml-2">Front-End Development</span>
          </Icon>
          <div class="h-[250px] md:h-[300px] lg:h-[350px] overflow-y-auto pr-2 space-y-4 scrollbar-hide hover:scrollbar-default">
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <Vue class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">Vue.js</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <TailwindLogo class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">Tailwind</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <Bootstrap class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">Bootstrap</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <TS class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">TypeScript</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <JS class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">JavaScript</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <HTML class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">HTML</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <CSS class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">CSS</p>
            </section>
          </div>
        </div>

        <div class="h-auto border-2 border-gray-700 rounded-md bg-gray-800 p-4 md:p-6">
          <Icon class="flex flex-row items-center justify-self-center text-white mb-4">
            <Server :stroke-width="1" class="size-10 md:size-12 lg:size-14"/> <span class="text-lg md:text-xl lg:text-xl font-semibold ml-2">Back-End Development</span>
          </Icon>
          <div class="space-y-4">
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <PHP class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">PHP</p>
            </section>
            <section class="flex items-center rounded-sm shadow-md bg-white px-3 py-2 space-x-4 hover:border-2 hover:border-blue-500 duration-300">
              <Laravel class="size-8 md:size-9 lg:size-10"/> <p class="text-lg md:text-xl lg:text-xl font-semibold">Laravel</p>
            </section>
          </div>
        </div>

        <header class="col-span-1 md:col-span-3 text-center mt-12 mb-8">
          <h1 class="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4">
            My Current Projects
          </h1>
          <h2 class="text-lg md:text-xl lg:text-xl text-gray-300">
            Please Select To View
          </h2>
        </header>

        <Card class="flex flex-row items-center h-auto border-2 border-gray-700 rounded-md bg-gray-800 p-4 md:p-6 hover:border-blue-500 hover:scale-102 transition-transform duration-150">
          <Icon class="flex items-center">
            <img src="../public/pictures/Blessed.jpg" alt="No image" class="rounded-md size-16 md:size-20 lg:size-24 object-cover" />
            <span class="text-lg md:text-xl lg:text-xl font-semibold ml-4 text-white">Web-Based Organizing System in Marilao, Bulacan</span>
          </Icon>
        </Card>
        <Card class="h-auto border-2 border-gray-700 rounded-md bg-gray-800 p-4 md:p-6 hover:border-blue-500 hover:scale-102 transition-transform duration-150">
          <!-- Project content -->
        </Card>
        <Card class="h-auto border-2 border-gray-700 rounded-md bg-gray-800 p-4 md:p-6 hover:border-blue-500 hover:scale-102 transition-transform duration-150">
          <!-- Project content -->
        </Card>

        <h2 class="col-span-1 md:col-span-3 text-center text-lg md:text-xl lg:text-xl text-gray-300 mt-8">
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eos, 
          nesciunt earum qui reprehenderit veniam dolores! Temporibus porro, nesciunt enim ipsum, quam fuga sint vel repudiandae tenetur dignissimos consequatur eos.
        </h2>

        <div class="col-span-1 md:col-span-3 mt-12">
          <Carousel
            class="relative w-full max-w-3xl mx-auto"
            @init-api="(val) => emblaMainApi = val"
          >
            <CarouselContent>
              <CarouselItem v-for="image in images" :key="image.id">
                <div class="p-1">
                  <Card class="bg-gray-800 border-gray-700">
                    <CardContent class="flex flex-col items-center justify-center p-4 md:p-6">
                      <img 
                        :src="image.src" 
                        :alt="image.title"
                        class="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md"
                      />
                      <h3 class="text-lg md:text-xl lg:text-xl font-semibold mt-4 text-white">{{ image.title }}</h3>
                      <p class="text-gray-400 mt-2 text-sm md:text-base lg:text-base">{{ image.description }}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="left-2 bg-gray-800 text-white border-gray-700 hover:bg-gray-700 duration-300" />
            <CarouselNext class="right-2 bg-gray-800 text-white border-gray-700 hover:bg-gray-700 duration-300" />
          </Carousel>

          <Carousel
            class="relative w-full max-w-3xl mx-auto mt-4"
            @init-api="(val) => emblaThumbnailApi = val"
          >
            <CarouselContent class="flex gap-1 ml-0">
              <CarouselItem 
                v-for="(image, index) in images" 
                :key="image.id" 
                class="pl-0 basis-1/4 cursor-pointer" 
                @click="onThumbClick(index)"
              >
                <div class="p-1" :class="index === selectedIndex ? 'ring-2 ring-blue-500' : 'opacity-50'">
                  <Card class="bg-gray-800 border-gray-700">
                    <CardContent class="flex aspect-square items-center justify-center p-2">
                      <img 
                        :src="image.src" 
                        :alt="image.title"
                        class="w-full h-full object-cover rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>

    <div id="contact" class="w-full bg-white py-8 md:py-10 lg:py-12 px-4 md:px-8 lg:px-12 mt-14">
      <h1 class="text-center text-2xl md:text-3xl lg:text-3xl font-bold mb-8">Contact Info.</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-3xl mx-auto">
        <Card class="bg-gray-800 flex items-center p-4 md:p-5 lg:p-6 rounded hover:bg-gray-700 duration-300">
          <Mail class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          <span class="text-base md:text-lg lg:text-xl font-semibold ml-4 text-white">terencealaban@gmail.com</span>
        </Card>

        <Card class="bg-gray-800 flex items-center p-4 md:p-5 lg:p-6 rounded hover:bg-gray-700 duration-300">
          <Facebook class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          <span class="text-base md:text-lg lg:text-xl font-semibold ml-4 text-white">Terence Alaban</span>
        </Card>

        <Card class="bg-gray-800 flex items-center p-4 md:p-5 lg:p-6 rounded hover:bg-gray-700 duration-300">
          <Phone class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          <span class="text-base md:text-lg lg:text-xl font-semibold ml-4 text-white">+63 9493796181</span>
        </Card>

        <Card class="bg-gray-800 flex items-center p-4 md:p-5 lg:p-6 rounded hover:bg-gray-700 duration-300">
          <Linkedin class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
          <span class="text-base md:text-lg lg:text-xl font-semibold ml-4 text-white">Terence Alaban</span>
        </Card>
      </div>
    </div>

    <footer class="w-full py-4 md:py-5 lg:py-6">
      <h1 class="text-center text-base md:text-lg lg:text-xl font-bold mb-4 text-white">© Terence Alaban 2025 | All right reversed</h1>
    </footer>
  </div>
</template>
