<!-- components/intellitoggle-section.vue -->
<template>
  <section
    class="intellitoggle-section flex flex-col items-center w-full px-6 md:px-[120px] py-[120px] gap-[80px]"
  >
    <!-- Top Title -->
    <h2
      class="main-title text-[#4338CA] text-[24px] md:text-[32px] font-semibold text-center break-words max-w-[90%] md:max-w-[600px] leading-snug"
    >
      What Is IntelliToggle
    </h2>

    <!-- Content Row -->
    <div
      class="content-row flex flex-col md:flex-row items-center w-full md:gap-[140px] gap-[60px]"
    >
      <!-- Left Column (Text) -->
      <div class="left-col flex-1 max-w-[520px] flex flex-col gap-6 md:gap-8 text-left">
        <!-- Heading -->
        <h3
          class="desktop-heading font-[Inter] font-semibold text-[20px] md:text-[24px] leading-normal text-[#0E121B]"
        >
          Your AI Dart App’s Control Panel 
      <br>For Feature Releases
        </h3>

        <!-- Paragraph -->
        <p
          class="intro-text font-[Inter] font-normal text-[18px] leading-[1.6] text-[#5F5F60]"
        >
          IntelliToggle is a “Dart-Powered” feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control rollouts, run experiments, and fix bugs faster.
        </p>

        <!-- Benefits -->
        <div>
          <h4
            class="font-[Inter] font-semibold text-[24px] md:text-[20px] leading-normal text-[#0E121B] mb-2"
          >
            Benefits
          </h4>
          <ul
            class="benefits-list list-none font-[Inter] font-normal text-[18px] md:text-[20px] leading-normal text-[#5F5F60]"
          >
            <li>Toggle new features without app updates</li>
            <li>Roll out to specific users or regions</li>
            <li>Instantly rollback when needed</li>
          </ul>
        </div>
      </div>

      <!-- Right Column (Image) -->
      <div
        class="right-col flex flex-col justify-center items-center 
               flex-1 max-w-[750px] 
               px-[20px] md:px-[51px] py-[24px] md:py-[46px] 
               bg-gradient-to-b from-[#42389E] to-[#0F1026] 
               rounded-xl shadow-lg"
      >
        <img
          src="/public/intellitoggle-dashboard.png"
          alt="IntelliToggle Dashboard"
          class="w-full h-auto rounded-lg shadow-md object-contain"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
/* iPad (810px–1080px) */
@media (min-width: 810px) and (max-width: 1080px) {
  h2 {
    font-size: 30px;
    line-height: 1.2;
    max-width: 480px;   /* forces into 2 lines */
    white-space: normal;
    margin: 0 ; /* centers + small space below */
  }

  .desktop-heading {
    font-size: 19px;
    line-height: 1.3;
    max-width: 420px;
    margin-bottom: 0px; /* tighter gap below heading */
  }

  .intro-text {
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 0px; /* reduce space before benefits */
  }

  .benefits-heading-text {
    font-size: 17px;   /* heading size */
    line-height: 1.2;  /* consistent spacing */
    margin-bottom: 0px; /* small gap before list */
  }

  .benefits-list {
    font-size: 12px;
    line-height: 1.3;
  }

  .content-row {
    gap: 60px; /* balanced space between left & right */
  }
}


</style>

