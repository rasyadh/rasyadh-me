<template>
  <div class="flex flex-col gap-y-4 my-10">
    <div class="flex flex-col gap-y-4">
      <h5 class="text-sm font-medium text-gray-500">Currently expertise.</h5>
      <div class="flex flex-wrap items-center gap-x-3 w-fit">
        <div v-for="skill in skills" :key="skill.name">
          <a
            :href="skill.url"
            target="_blank"
            class="text-xs md:text-sm border-b border-gray-200 font-medium hover:border-blue-700 transition-all duration-300 ease-in-out"
          >
            {{ skill.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TSkill } from "~/types/skill";

const skills: TSkill[] = [
  {
    name: "iOS",
    url: "https://developer.apple.com/ios",
  },
	{
    name: "Swift",
    url: "https://www.swift.org",
  },
	{
    name: "Flutter",
    url: "https://flutter.dev",
  },
	{
    name: "Nuxt",
    url: "https://nuxt.com",
  },
	{
    name: "VueJs",
    url: "https://vuejs.org",
  },
	{
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
  },
];
</script>
