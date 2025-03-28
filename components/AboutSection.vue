<template>
  <section class="flex my-8 flex-col gap-4 items-left relative lg:p-0 p-4">
    <div>
      <div class="flex flex-col gap-y-2">
        <NuxtImg
          v-motion-pop-visible-once
          src="/avatar.png"
          class="w-16 h-16 rounded-full transform transition duration-300 ease-in-out hover:scale-130 hover:rotate-8"
          alt="Rasyadh Abdul Aziz"
          preload
        />
        <StaggerMotion :delay="0">
          <h1 class="text-lg font-semibold text-black">
            Hi, I'm Rasyadh Abdul Aziz <span>👋</span>
          </h1>
        </StaggerMotion>
        <div class="flex flex-col gap-y-2 max-w-2xl text-gray-600">
          <StaggerMotion :delay="100">
            <p class="text-lg">
              Experienced Software Engineer specializing in Flutter and iOS
              development, with a focus on scalable architecture and developer
              tooling.
            </p>
          </StaggerMotion>
          <StaggerMotion :delay="150">
            <p class="text-lg">
              Passionate about building eﬃcient, maintainable, and high-quality
              applications.
            </p>
          </StaggerMotion>
        </div>
        <div class="flex flex-wrap items-center gap-x-4 w-fit">
          <StaggerMotion
            v-for="(social, index) in socials"
            :key="index"
            :delay="250 + index * 50"
          >
            <a
              :href="social.url"
              target="_blank"
              class="text-xs md:text-sm border-b-2 border-gray-200 font-medium hover:border-blue-700 transition-all duration-300 ease-in-out"
            >
              {{ social.name }}
            </a>
          </StaggerMotion>
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
    url: "http://github.com/rasyadh",
  },
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/rasyadh",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/rasyadh",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rasyadh_",
  },
  {
    name: "Email",
    url: "mailto:rasyadhabdulaziz@gmail.com",
  },
];
</script>
