<template>
  <!-- Hero Section -->
  <section class="relative w-full min-h-screen flex-shrink-0 overflow-hidden">
    <!-- Background SVG -->
    <svg
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 1920 1177"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M2.99736 93.3147L2.99738 1177L1920 613.982L1920 93.314L2.99736 93.3147Z"
        fill="#EDECF6"
      />
      <path
        d="M0.00147606 0L0 1148.38L1920 523.777V0H0.00147606Z"
        fill="url(#paint0_linear_1440_7008)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1440_7008"
          x1="960"
          y1="0"
          x2="960"
          y2="1177"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#42389E" />
          <stop offset="1" stop-color="#0F1026" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Content Wrapper -->
    <div
      class="relative z-10 max-w-[1680px] mx-auto 
             px-5 sm:px-10 md:px-20 
             pt-[120px] md:pt-[154px] 
             flex flex-col items-center gap-12 md:gap-[141px] text-center"
    >
      <!-- Hero Text -->
      <div class="max-w-[700px] flex flex-col items-center">
        <h1
          class="text-white font-[Satoshi] leading-snug
                 text-[22px] sm:text-[28px] md:text-[40px]"
        >
          The First
          <span
            class="inline-block px-2 py-1 bg-[#F9A71E] text-[#0F1026] font-[Inter] 
                   font-semibold rounded-md 
                   text-[14px] sm:text-[18px] md:text-[28px]"
          >
            Dart-Native
          </span>
          Feature Flag <br class="hidden sm:block" />
          With DartCodeAI
        </h1>

        <!-- Phone text (short version) -->
        <p
          class="mt-4 font-[Inter] font-medium text-[#FEFEFF] leading-relaxed
                 text-[13px] sm:hidden"
        >
          Ship faster, control rollouts, and get ready for AI-powered delivery,
          starting at just $1/month for a limited time
        </p>

        <!-- Tablet/Desktop text (detailed version) -->
        <p
          class="mt-4 font-[Inter] font-medium text-[#FEFEFF] leading-relaxed
                 text-[15px] md:text-[18px] hidden sm:block"
        >
          Feature flags built for Dart, ship faster, roll back safely, and scale
          with AI-powered delivery
          <span class="text-[#F9A71E] font-semibold">
            <br />Starting at just $1/month
          </span>
        </p>

        <!-- Buttons -->
        <div class="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm sm:max-w-md">
          <button
            class="w-full sm:w-[180px] h-[44px] rounded-[8px] bg-[#F9A71E] text-[#0F1026] font-[Inter] 
                   font-medium text-[15px] md:text-[16px] shadow-md cursor-pointer"
          >
            Get Started
          </button>
          <button
            class="w-full sm:w-[180px] h-[44px] rounded-[8px] border border-[#F9A71E] font-[Inter] 
                   font-medium text-[15px] md:text-[16px] text-[#F9A71E] 
                   hover:bg-[#F9A71E] hover:text-[#0F1026] transition cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      <!-- Video Card -->
<div
  class="bg-white rounded-none shadow-lg flex items-center justify-center
         w-full max-w-[320px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1200px]
         h-[160px] sm:h-[240px] md:h-[500px]"
>
  <img
    src="/Group.svg"
    alt="Play Button"
    class="w-[40px] sm:w-[60px] md:w-[90px] cursor-pointer hover:scale-105 transition"
  />
</div>
    </div>
  </section>
</template>