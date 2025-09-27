<template>
  <section
    class="flex flex-col items-center py-6 sm:py-10 md:py-[120px] gap-2 md:gap-[40px] w-full -mt-6 sm:-mt-8 md:mt-0"
  >
    <!-- Title -->
    <h3
      class="text-[#1A1C3D] text-base md:text-3xl font-semibold text-center"
    >
      Trusted by various engineering teams
    </h3>

    <!-- Logos Row -->
    <div
      class="grid grid-cols-2 gap-6 sm:gap-8 md:flex md:flex-wrap md:justify-center md:items-center md:gap-16"
    >
      <!-- Only show these two on mobile -->
      <img src="/aws.svg" alt="AWS" class="h-14 md:h-10 block md:hidden" />
      <img src="/azure.svg" alt="Azure" class="h-14 md:h-10 block md:hidden" />

      <!-- Show all logos on tablet & desktop -->
      <img src="/aws.svg" alt="AWS" class="hidden md:block h-10" />
      <img src="/public/Googlecloud.svg" alt="Google Cloud" class="hidden md:block h-10" />
      <img src="/azure.svg" alt="Azure" class="hidden md:block h-10" />
      <img src="/digitalocean.svg" alt="DigitalOcean" class="hidden md:block h-10" />
      <img src="/ibm.svg" alt="IBM" class="hidden md:block h-10" />
    </div>
  </section>
</template>
