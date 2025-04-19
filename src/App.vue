<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/ui/button/Button.vue';
import { Card, CardContent } from '../src/components/ui/card';
import { watchOnce } from '@vueuse/core';
import { Facebook, Mail, Phone, Blocks, Globe, Server, Figma } from 'lucide-vue-next';
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
import GITHUB from "./Icons/github.vue"
import Jobstreet from "./Icons/jobstreet.vue"
import type { CarouselApi } from '../src/components/ui/carousel'
import Fadein from './Fadein.vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
from '../src/components/ui/carousel'

// Project data
const projects = [
  {
    id: 1,
    title: "Web-Based Organizing System in Marilao, Bulacan (Capstone Project)",
    description: "A comprehensive web-based system designed to streamline organizational processes in Marilao, Bulacan. Features include user management, document tracking, and reporting capabilities.",
    icon: '/pictures/Blessed.jpg',
    images: [
      { src: '/pictures/blessedfirstpage.png', title: 'Home Page', description: 'Main dashboard with key features' },
      { src: '/pictures/blessedsecondpage.png', title: 'User Management', description: 'User interface for managing accounts' },
      { src: '/pictures/blessedthirdpage.png', title: 'Document Tracking', description: 'System for tracking important documents' },
      { src: '/pictures/blessedfourthpage.png', title: 'Reports', description: 'Analytics and reporting dashboard' },
      { src: '/pictures/capstonegroup.png', title: 'Captstone Group & Mr. Mark Adriano', description: '' }
    ]
  },
  {
    id: 2,
    title: "To be updated",
    description: "Description for project 2",
    icon: '/pictures/AITBD.png',
    images: [
      { src: '/pictures/AITBD.png', title: 'Feature 1', description: 'Description for feature 1' },
    ]
  },
  {
    id: 3,
    title: "To be updated",
    description: "Description for project 3",
    icon: '/pictures/AITBD.png',
    images: [
      { src: '/pictures/AITBD.png', title: 'Feature 1', description: 'Description for feature 1' },
    ]
  }
];

// Carousel state
const selectedProject = ref(projects[0]);
const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

// Function to handle project selection
const selectProject = (project: typeof projects[0]) => {
  selectedProject.value = project;
  selectedIndex.value = 0;
  if (emblaMainApi.value) {
    emblaMainApi.value.scrollTo(0);
  }
  if (emblaThumbnailApi.value) {
    emblaThumbnailApi.value.scrollTo(0);
  }
};

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
    <header class="fixed top-0 z-50 w-full h-16 bg-white shadow-md">
      <nav class="container flex items-center justify-between h-full px-4 mx-auto md:px-8 lg:px-12">
        <div class="text-lg font-bold text-gray-800 md:text-xl lg:text-2xl">Portfolio</div>
        <ul class="flex space-x-2 md:space-x-4 lg:space-x-6">
          <li><Button variant="link" class="text-sm font-semibold text-gray-700 duration-300 cursor-pointer hover:text-blue-600 md:text-md lg:text-lg" @click="scrollToSection('home')">Home</Button></li>
          <li><Button variant="link" class="text-sm font-semibold text-gray-700 duration-300 cursor-pointer hover:text-blue-600 md:text-md lg:text-lg" @click="scrollToSection('services')">Services</Button></li>
          <li><Button variant="link" class="text-sm font-semibold text-gray-700 duration-300 cursor-pointer hover:text-blue-600 md:text-md lg:text-lg" @click="scrollToSection('contact')">Contact</Button></li>
        </ul>
      </nav>
    </header>

    <main class="container px-4 pt-32 mx-auto md:px-8 lg:px-12 md:pt-16">
      <section id="home" class="grid min-h-screen grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 scroll-mt-16">
        <div class="flex flex-col items-center justify-center px-4 text-center md:text-left md:items-start md:px-8">
          <Fadein direction="left">
            <article class="space-y-4">
              <h1 class="mb-6 text-3xl font-bold text-white underline md:text-4xl lg:text-4xl underline-offset-16">Terence Alaban</h1>
              <h2 class="text-xl font-semibold text-gray-300 md:text-2xl lg:text-2xl">UI/UX Designer & Front-End Developer</h2>
              <p class="text-base text-gray-400 md:text-lg lg:text-lg">
                Hi! I am a web developer with a desire to learn and grow in the field of web development.
                My main goal is to create a website that is not only functional but also aesthetically pleasing. 
                Let's work together and create your idea into a beautiful and functional website.
              </p>
            </article>

            <Icons class="flex flex-wrap justify-center gap-4 mt-8 md:justify-start">
              <a href="https://www.facebook.com/Terence.rrrrrr/" target="_blank" rel="noopener noreferrer" class="transition-transform duration-150 hover:scale-110">
                <Facebook :stroke-width="0" fill="white" class="p-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md size-12 md:size-14 lg:size-16 hover:bg-gray-900"/>
              </a>
              <a href="https://ph.jobstreet.com/profile/terenceroi-alaban-2cmmgXZxGN" target="_blank" rel="noopener noreferrer" class="transition-transform duration-150 hover:scale-110">
                <Jobstreet :stroke-width="0" fill="white" class="p-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md size-12 md:size-14 lg:size-16 hover:bg-gray-900"/>
              </a>
              <label class="border-gray-700 rounded-md border-r-3"></label>
              <a href="mailto:terencealaban@gmail.com" class="transition-transform duration-150 hover:scale-110">
                <Mail :stroke-width="1.5" class="p-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md size-12 md:size-14 lg:size-16 hover:bg-gray-900"/>
              </a>
              <Phone :stroke-width="1" @click="scrollToSection('contact')" class="p-1 text-white transition-transform duration-150 bg-gray-800 border-2 border-gray-700 rounded-md cursor-pointer size-12 md:size-14 lg:size-16 hover:bg-gray-900 hover:scale-110"/>
              <label class="border-gray-700 rounded-md border-r-3"></label>
              <a href="https://github.com/Terence052003" target="_blank" rel="noopener noreferrer" class="transition-transform duration-150 hover:scale-110">
                <GITHUB class="p-1 text-white bg-gray-800 border-2 border-gray-700 rounded-md size-12 md:size-14 lg:size-16 hover:bg-gray-900"/>
              </a>
            </Icons>
          </Fadein>
        </div>

        <div class="flex items-center justify-center px-4 md:px-8">
          <Fadein direction="right">
            <img src="/pictures/AIFormal.png" alt="No image" class="rounded-md w-full md:w-auto h-auto max-h-[70vh] object-contain" />
          </Fadein>
        </div>
      </section>

      <section id="services" class="grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3 lg:gap-8 md:px-8 lg:px-12 scroll-mt-16 lg:py-12">
        <Fadein direction="left" class="col-span-1 md:col-span-3">
          <header class="mb-8 text-center">
            <h1 class="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-3xl">
              My Experiences
            </h1>
            <h2 class="text-lg text-gray-300 md:text-xl lg:text-xl">
              The following are my forte and the services that I offer as your potential programmer
            </h2>
          </header>
        </Fadein>

        <Fadein direction="left" class="col-span-1">
          <div class="h-[300px] p-4 bg-gray-800 border-2 border-gray-700 rounded-md md:p-6">
            <Icon class="flex flex-row items-center mb-4 text-white justify-self-center">
              <Blocks :stroke-width="1" class="size-10 md:size-12 lg:size-14"/> <span class="ml-2 text-lg font-semibold md:text-xl lg:text-xl">UI/UX Design</span>
            </Icon>
            <div class="h-[200px] overflow-y-auto pr-2 space-y-4 scrollbar-hide hover:scrollbar-default">
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <Figma class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">Figma</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <Canva class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">Canva</p>
              </section>
            </div>
          </div>
        </Fadein>

        <Fadein direction="left" :delay="200" class="col-span-1">
          <div class="h-[300px] p-4 bg-gray-800 border-2 border-gray-700 rounded-md md:p-6">
            <Icon class="flex flex-row items-center mb-4 text-white justify-self-center">
              <Globe :stroke-width="1" class="size-10 md:size-12 lg:size-14"/> <span class="ml-2 text-lg font-semibold md:text-xl lg:text-xl">Front-End Development</span>
            </Icon>
            <div class="h-[200px] overflow-y-auto pr-2 space-y-4 scrollbar-hide hover:scrollbar-default">
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <Vue class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">Vue.js</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <TailwindLogo class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">Tailwind</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <Bootstrap class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">Bootstrap</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <TS class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">TypeScript</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <JS class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">JavaScript</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <HTML class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">HTML</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <CSS class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">CSS</p>
              </section>
            </div>
          </div>
        </Fadein>

        <Fadein direction="left" :delay="400" class="col-span-1">
          <div class="h-[300px] p-4 bg-gray-800 border-2 border-gray-700 rounded-md md:p-6">
            <Icon class="flex flex-row items-center mb-4 text-white justify-self-center">
              <Server :stroke-width="1" class="size-10 md:size-12 lg:size-14"/> <span class="ml-2 text-lg font-semibold md:text-xl lg:text-xl">Back-End Development</span>
            </Icon>
            <div class="h-[200px] overflow-y-auto pr-2 space-y-4 scrollbar-hide hover:scrollbar-default">
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <PHP class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">PHP</p>
              </section>
              <section class="flex items-center px-3 py-2 space-x-4 duration-300 bg-white rounded-sm shadow-md hover:bg-gray-100">
                <Laravel class="size-8 md:size-9 lg:size-10"/> <p class="text-lg font-semibold md:text-xl lg:text-xl">Laravel</p>
              </section>
            </div>
          </div>
        </Fadein>

        <header class="col-span-1 mt-12 mb-8 text-center md:col-span-3">
          <Fadein direction="left">
            <h1 class="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-3xl">
              My Current Projects
            </h1>
            <h2 class="text-lg text-gray-300 md:text-xl lg:text-xl">
              Please Select To View
            </h2>
          </Fadein>
        </header>

        <Fadein 
          v-for="(project, index) in projects" 
          :key="project.id"
          direction="left"
          :delay="index * 200"
        >
          <Card 
            class="flex flex-row items-center h-auto p-4 transition-transform duration-150 bg-gray-800 border-2 border-gray-700 rounded-md cursor-pointer md:p-6 hover:border-blue-500 hover:scale-102"
            @click="selectProject(project)"
          >
            <Icon class="flex items-center">
              <img :src="project.icon" :alt="project.title" class="object-cover rounded-md size-16 md:size-20 lg:size-24" />
              <span class="ml-4 text-lg font-semibold text-white md:text-xl lg:text-xl">{{ project.title }}</span>
            </Icon>
          </Card>
        </Fadein>

        <Fadein direction="left" class="col-span-1 md:col-span-3 md:text-xl lg:text-xl">
          <div class="mt-8 text-lg text-center text-gray-300 ">
            {{ selectedProject.description }}
          </div>
        </Fadein>

        <div class="col-span-1 mt-12 md:col-span-3">
          <Fadein direction="left">
            <Carousel
              class="relative w-full max-w-3xl mx-auto"
              @init-api="(val) => emblaMainApi = val"
            >
              <CarouselContent>
                <CarouselItem v-for="(image, index) in selectedProject.images" :key="index">
                  <div class="p-1">
                    <Card class="bg-gray-800 border-gray-700">
                      <CardContent class="flex flex-col items-center justify-center p-4 md:p-6">
                        <img 
                          :src="image.src" 
                          :alt="image.title"
                          class="object-cover w-full h-48 rounded-md md:h-56 lg:h-64"
                        />
                        <h3 class="mt-4 text-lg font-semibold text-white md:text-xl lg:text-xl">{{ image.title }}</h3>
                        <p class="mt-2 text-sm text-gray-400 md:text-base lg:text-base">{{ image.description }}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious class="text-white duration-300 bg-gray-800 border-gray-700 left-2 hover:bg-gray-700" />
              <CarouselNext class="text-white duration-300 bg-gray-800 border-gray-700 right-2 hover:bg-gray-700" />
            </Carousel>
          </Fadein>

          <Fadein direction="up" class="mt-4">
            <Carousel
              class="relative w-full max-w-3xl mx-auto"
              @init-api="(val) => emblaThumbnailApi = val"
            >
              <CarouselContent class="flex gap-1 ml-0">
                <CarouselItem 
                  v-for="(image, index) in selectedProject.images" 
                  :key="index" 
                  class="pl-0 cursor-pointer basis-1/4" 
                  @click="onThumbClick(index)"
                >
                  <div class="p-1" :class="index === selectedIndex ? 'ring-2 ring-blue-500' : 'opacity-50'">
                    <Card class="bg-gray-800 border-gray-700">
                      <CardContent class="flex items-center justify-center p-2 aspect-square">
                        <img 
                          :src="image.src" 
                          :alt="image.title"
                          class="object-cover w-full h-full rounded-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </Fadein>
        </div>
      </section>
    </main>

    <div id="contact" class="w-full px-4 py-8 bg-white md:py-10 lg:py-12 md:px-8 lg:px-12 mt-14">
      <h1 class="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-3xl">Contact Info.</h1>

      <div class="grid max-w-3xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 md:gap-6 lg:gap-8">
        <Card class="flex items-center p-4 duration-300 bg-gray-800 rounded md:p-5 lg:p-6 hover:bg-gray-700">
          <Mail class="w-5 h-5 text-white md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span class="ml-4 text-base font-semibold text-white md:text-lg lg:text-xl">terencealaban@gmail.com</span>
        </Card>

        <Card class="flex items-center p-4 duration-300 bg-gray-800 rounded md:p-5 lg:p-6 hover:bg-gray-700">
          <Facebook class="w-5 h-5 text-white md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span class="ml-4 text-base font-semibold text-white md:text-lg lg:text-xl">Terence Alaban</span>
        </Card>

        <Card class="flex items-center p-4 duration-300 bg-gray-800 rounded md:p-5 lg:p-6 hover:bg-gray-700">
          <Phone class="w-5 h-5 text-white md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span class="ml-4 text-base font-semibold text-white md:text-lg lg:text-xl">+63 9493796181</span>
        </Card>

        <Card class="flex items-center p-4 duration-300 bg-gray-800 rounded md:p-5 lg:p-6 hover:bg-gray-700">
          <Jobstreet class="w-5 h-5 text-white md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span class="ml-4 text-base font-semibold text-white md:text-lg lg:text-xl">Terence Roi Alaban</span>
        </Card>
      </div>
    </div>

    <footer class="w-full py-4 md:py-5 lg:py-6">
      <h1 class="mb-4 text-base font-bold text-center text-white md:text-lg lg:text-xl">© Terence Alaban 2025 | All right reversed</h1>
    </footer>
  </div>
</template>
