<template>
  <section class="flex my-10 flex-col gap-4 items-left relative lg:p-0 p-4">
    <div>
      <div class="flex flex-col gap-y-2">
        <NuxtImg
          src="/avatar.webp"
          class="w-16 h-16 rounded-full"
          alt="Rasyadh Abdul Aziz"
          preload
        />
        <h1 class="text-lg font-semibold text-black">Hi, I'm Rasyadh Abdul Aziz 👋</h1>
        <div class="flex flex-col gap-y-2 max-w-2xl text-gray-600">
          <p class="text-lg">
            Experienced Software Engineer specializing in Flutter and iOS
            development, with a focus on scalable architecture and developer
            tooling.
          </p>
          <p class="text-lg">
            Passionate about building eﬃcient, maintainable, and high-quality
            applications.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-x-3 w-fit">
          <div v-for="social in socials" :key="social.name">
            <a
              :href="social.url"
              target="_blank"
              class="text-xs md:text-sm border-b border-gray-200 font-medium hover:border-blue-700 transition-all duration-300 ease-in-out"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { TSocial } from "~/types/social";

const socials: TSocial[] = [
  {
    name: "Resume",
    url: "/Resume.pdf",
  },
  {
    name: "Github",
    url: "http://github.com/rasyadh/",
  },
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/rasyadh/",
  },
  {
    name: "Email",
    url: "mailto:rasyadhabdulaziz@gmail.com",
  },
];
</script>
