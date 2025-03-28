<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:p-0 p-2">
    <div
      v-for="et in experienceTypes"
      :key="et.title"
      class="flex flex-col gap-y-4"
    >
      <h5 class="text-sm font-medium text-gray-500">{{ et.title }}</h5>
      <div class="flex flex-col gap-y-2">
        <div
          v-for="exp in et.experiences"
          :key="exp.title"
          class="flex flex-col gap-y-1"
        >
          <a
            :href="exp.url"
            class="w-fit border-b border-gray-200 font-medium hover:border-blue-700 transition-all duration-300 ease-in-out"
            target="_blank"
          >
            {{ exp.title }}
          </a>
          <p class="text-gray-600 text-sm">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TExperienceType } from "~/types/experience";

const experienceTypes: TExperienceType[] = [
  {
    title: "Works.",
    experiences: [
      {
        title: "Bukalapak",
        description:
          "Contributed to product development and maintained mobile architecture, shared libraries, and developer enablement tools.",
        url: "https://apps.apple.com/id/app/bukalapak-jual-beli-online/id1003169137",
      },
      {
        title: "Best for Less",
        description:
          "Developed and improved a hybrid mobile app by applying architectural best practices and optimizing tracking for scalability and maintainability.",
        url: "https://www.bukalapak.com/promo-campaign/best-for-less",
      },
      {
        title: "ItemX",
        description:
          "Developed a collectible and trading card marketplace platform across multiple tech stacks.",
        url: "https://www.bukalapak.com/promo-campaign/best-for-less",
      },
    ],
  },
  {
    title: "Projects.",
    experiences: [
      {
        title: "Daxium Team iOS",
        description:
          "Develop the iOS app of Daxium Team, centralizes chats, news, and teamwork in one mobile-friendly collaborative platform.",
        url: "https://www.daxium.com",
      },
      {
        title: "Legoas iOS",
        description:
          "Developed the iOS app for Legoas, a smart digital auction platform enabling seamless mobile bidding.",
        url: "https://apps.apple.com/id/app/legoas-smart-digital-auction/id1472305357",
      },
      {
        title: "Periksain.id",
        description:
          "Built cross-platform mobile apps for Periksain.id, a homecare marketplace connecting clinics and labs across Indonesia to customers in one unified platform.",
        url: "https://periksain.id",
      },
    ],
  },
];
</script>
