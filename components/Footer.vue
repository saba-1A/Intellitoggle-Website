<template>
  <!--  Outer CTA Section -->
  <section
    class="w-full flex justify-center items-center"
    style="padding-top: 120px; padding-bottom: 200px; background: #FFFFFF;"
  >
    <!-- Narrow Container -->
    <div class="w-full max-w-[1100px] px-[20px] mx-auto">
      <div
        class="flex flex-col justify-center items-center gap-[10px]"
        style="
          width: 100%;
          padding: 29px;
          border-radius: 12px;
          background: var(--Main-Colors-Hero-gradient, linear-gradient(180deg, #42389E 0%, #0F1026 100%));
          box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
        "
      >
        <h2
          class="text-center font-[600] text-white text-[22px] md:text-[24px]"
          style="font-family: var(--Font-Family-Body, Inter); line-height: normal;"
        >
          Launch Features Confidently With AI<br />
          Driven Feature Flags
        </h2>

        <p
          class="text-center text-white/80 text-[14px] md:text-[16px] mt-[4px]"
          style="font-family: var(--Font-Family-Body, Inter); line-height: normal;"
        >
          Start for free, scale as your team grows
        </p>

        <div class="flex justify-center items-center gap-[16px] mt-[20px]">
          <button
            class="px-[24px] py-[10px] rounded-[6px] font-[600] text-[14px] md:text-[16px]"
            style="
              background: var(--Main-Colors-Seconday-Color, #F9A71E);
              font-family: var(--Font-Family-Body, Inter);
              line-height: normal;
            "
          >
            Start for $1/mo
          </button>
          <button
            class="px-[24px] py-[10px] rounded-[6px] border font-[600] text-[14px] md:text-[16px] text-white border-white/30"
            style="font-family: var(--Font-Family-Body, Inter); line-height: normal;"
          >
            Join AI Early Access
          </button>
        </div>
      </div>
    </div>
  </section>

  <!--  Footer -->
 <footer class="w-full bg-[#F3F2F8] py-10 px-6 md:px-12 lg:px-16">
  <div
    class="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10"
  >
    <!-- Logo/About -->
    <div class="space-y-3">
      <img src="/public/lightlogo.svg" alt="Logo" class="h-10" />
      <p class="text-sm leading-relaxed text-gray-600">
        IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
      </p>
     <img
  src="/github.png"
  alt="GitHub"
  class="w-8 h-8"
/>
</div>

    <!-- Company -->
    <div class="space-y-2">
      <h3 class="font-semibold mb-2">Company</h3>
      <ul class="text-sm space-y-1">
        <li><a href="#" class="hover:underline">Pricing</a></li>
        <li><a href="#" class="hover:underline">Documentation</a></li>
        <li><a href="#" class="hover:underline">About Us</a></li>
      </ul>
    </div>

    <!-- Resources -->
    <div class="space-y-2">
      <h3 class="font-semibold mb-2">Resources</h3>
      <ul class="text-sm space-y-1">
        <li><a href="#" class="hover:underline">Why IntelliToggle is different</a></li>
        <li><a href="#" class="hover:underline">Customer Support</a></li>
        <li><a href="#" class="hover:underline">Terms & conditions</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
      </ul>
    </div>

    <!-- Newsletter: placed under Company + Resources on iPad only -->
    <div
      class="space-y-3 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
    >
      <h3 class="font-semibold">Subscribe to Newsletter</h3>
      <div class="flex">
        <input
          type="email"
          placeholder="Enter email address"
          class="flex-grow px-3 py-2 border rounded-l-md text-sm"
        />
        <button
          class="px-4 py-2 bg-[#F6A40F] text-white text-sm rounded-r-md"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</footer>
</template>