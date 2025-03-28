<template>
  <div class="flex flex-col gap-y-4 mb-8">
    <div class="flex flex-col gap-y-4">
      <StaggerMotion :delay="1200">
        <h5 class="text-sm font-medium text-gray-500">
          Based in Jakarta, Indonesia.
        </h5>
      </StaggerMotion>
      <div class="flex flex-wrap items-center gap-x-3 w-fit">
        <StaggerMotion :delay="1250">
          <div
            class="text-xs md:text-sm font-medium hover:text-blue-700 transition-all duration-300 ease-in-out"
          >
            RSDH 2025.
          </div>
        </StaggerMotion>
        <StaggerMotion :delay="1300">
          <div
            class="text-xs md:text-sm font-medium hover:text-blue-700 transition-all duration-300 ease-in-out"
          >
            Rasyadh Abdul Aziz
          </div>
        </StaggerMotion>
      </div>
    </div>
  </div>
</template>
