<!-- PromoSection.vue -->
<template>
  <section
    class="w-full max-w-[1920px] mx-auto bg-[#EDECF6] flex flex-col items-center gap-[48px] px-[120px] py-[120px]"
  >
    <!-- Heading -->
    <h1
      class="text-center font-[Satoshi] text-[40px] font-bold leading-none bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent mb-[32px]"
    >
      Plans Built For Every Stage Of Growth
    </h1>

    <!-- Pricing Card + CTA -->
    <div class="flex flex-col items-center gap-4">
      <!-- ✅ Hidden on iPad -->
      <div
        class="price-card w-[370px] h-[154px] p-6 rounded-[12px] bg-gradient-to-b from-[#42389E] to-[#0F1026] flex flex-col justify-between items-center"
      >
        <p
          class="font-['Merriweather Sans'] text-[20px] font-bold leading-none text-[#FEFEFF]"
          style="transform: rotate(0.002deg);"
        >
          Prices starts at
        </p>

        <div
          class="flex items-center justify-center gap-[18px] w-[221px]"
          style="transform: rotate(0.002deg);"
        >
          <span
            class="font-['Merriweather Sans'] text-[48px] font-bold leading-none text-[#FEFEFF]"
            >$10</span
          >
          <span
            class="font-['Segoe UI'] text-[24px] font-normal leading-none text-[#FEFEFF]"
            >/month</span
          >
        </div>
      </div>

      <button
        class="w-[371px] h-[59px] px-[20px] py-[10px] rounded-[8px] bg-[#F9A71E] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] flex items-center justify-center"
      >
        <!-- ✅ Desktop & Mobile -->
        <span
          class="price-text font-[Inter] font-semibold text-[18px] leading-none bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent desktop-text"
        >
          View Subscription Details
        </span>

        <!-- ✅ iPad text -->
        <span
          class="price-text font-[Inter] font-semibold text-[18px] leading-none bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent ipad-text"
        >
          View Full Price Comparison
        </span>
      </button>
    </div>

    <!-- Full-width Promo Banner -->
    <div
      class="promo-banner w-full rounded-[12px] border-[0.2px] border-[#42389E] bg-white shadow-[0_0_10px_10px_rgba(0,0,0,0.05)] px-[32px] py-[64px] flex items-center justify-between"
    >
      <!-- Left copy -->
      <div class="flex flex-col">
        <h2
          class="text-[#1A1C3D] font-[Inter] font-semibold text-[32px] leading-none"
        >
          Start Your 7-Day Free Sandbox Plan
        </h2>
        <p
          class="mt-2 text-[#5F5F60] font-[Inter] text-[18px] font-normal leading-none"
        >
          Join over 1,000+ startups already growing with Untitled.
        </p>
      </div>

      <!-- Button layer -->
      <div class="promo-buttons flex items-center gap-[32px]">
        <button
          class="flex justify-center items-center w-[184px] h-[55px] px-[24px] py-[12px] rounded-[8px] bg-[#F9A71E] text-white font-[Inter] font-semibold text-[18px] shadow-[0_0_10px_10px_rgba(0,0,0,0.05)]"
        >
          Get Started
        </button>
        <button
          class="flex justify-center items-center w-[184px] h-[55px] px-[24px] py-[12px] rounded-[8px] border border-[#F9A71E] text-[#F9A71E] font-[Inter] font-semibold text-[18px] bg-white shadow-[0_0_10px_10px_rgba(0,0,0,0.05)]"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// static UI — no logic required
</script>

<style scoped>
/* ✅ Default states */
.desktop-text {
  display: inline;
}
.ipad-text {
  display: none;
}

/* ✅ iPad / Tablet layout (only 768px–1024px) */
@media (max-width: 1024px) and (min-width: 768px) {
  /* Center the white section and make it fit properly */
  .promo-banner {
    width: 100%;
    max-width: 899px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
    background: white;
    border: 0.2px solid #42389E;
    flex-direction: row;
  }

  .promo-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-end;
  }

  section {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  /* ✅ Reduced font sizes */
  .promo-banner h2 {
    font-size: 26px;
    margin-bottom: 19px;   /* ✅ added gap here */
  }

  .promo-banner p {
    font-size: 14px;
  }

  .promo-buttons button {
    font-size: 14px;
  }
}
/* ✅ iPhone / Mobile layout (below 768px) */
@media (max-width: 767px) {
  .promo-banner {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 24px 16px;        /* slightly more breathing room */
    flex-direction: column;   
    text-align: center;       
    align-items: center;
  }

  /* ✅ Add gap between heading and text */
  .promo-banner h2 {
    margin-bottom: 10px;       /* space between heading & sentence */
    line-height: 1.2;
  }

  /* ✅ Join sentence into one clean line + small gap after */
  .promo-banner p {
    margin-bottom: 18px;       /* gap before buttons */
    line-height: 1.4;
    white-space: normal;       /* prevent awkward line breaks */
  }

  .promo-buttons {
    width: 100%;
    flex-direction: column;
    gap: 16px;                 /* slightly more gap between buttons */
    align-items: center;
  }

  .promo-buttons a,
  .promo-buttons button {
    width: 100%;              
    text-align: center;
  }

  section {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  /* ✅ Hide purple price card + its button */
  .price-card,
  .price-card + button {
    display: none !important;
  }

  /* ✅ Hide the main heading on mobile */
  section > h1 {
    display: none !important;
  }
}
</style scoped>

