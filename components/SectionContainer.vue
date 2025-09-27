<template>
  <section
    class="w-full max-w-[1920px] mx-auto flex flex-col gap-[48px] px-[120px] py-[120px]"
  >
    <!-- Heading -->
    <h1
      class="w-full max-w-[1680px] mx-auto font- text-[30px] leading-[54px] text-center 
             bg-[#4338CA] text-transparent bg-clip-text"
    >
      Control & Power-focused
    </h1>

    <!-- Features Wrapper -->
    <div class="features-wrapper">
      <!-- Features Row -->
      <div class="features-row flex flex-row justify-center gap-[40px]">
        <!-- Feature 1 -->
        <div
          class="feature1 bg-white rounded-[12px] p-[24px] shadow-sm flex flex-col gap-[16px]"
        >
          <div class="p-[8px] bg-[#4338CA] rounded-[8px]">
            <img
              src="\public\connect.png"
              alt="Feature 1"
              class="w-full h-[200px] object-cover rounded-[6px]"
            />
          </div>
          <h3 class="font-semibold text-[20px] leading-[29px] text-[#1A1C3D]">
            Connect
          </h3>
          <p class="font-normal text-[16px] leading-[22px] text-[#4B5563]">
            Install SDK in your Dart project in 2 mins.
          </p>
          <button
            class="mt-auto flex items-center justify-center gap-[10px] 
                   w-[243px] h-[46px] 
                   px-[24px] py-[12px] 
                   rounded-[8px] border border-[#F9A71E] 
                   shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] 
                   text-[18px] leading-[22px] font-normal text-[#F9A71E]"
          >
            View Documentation
          </button>
        </div>

        <!-- Feature 2 -->
        <div
          class="feature2 bg-white rounded-[12px] p-[24px] shadow-sm flex flex-col gap-[16px]"
        >
          <div class="p-[8px] bg-[#4338CA] rounded-[8px]">
            <img
              src="\public\createflag.png"
              alt="Feature 2"
              class="w-full h-[200px] object-cover rounded-[6px]"
            />
          </div>
          <h3 class="font-semibold text-[20px] leading-[22px] text-[#1A1C3D]">
            Create Flags
          </h3>
          <p class="font-normal text-[16px] leading-[22px] text-[#4B5563]">
            Define features in IntelliToggle dashboard.
          </p>
          <button
            class="mt-auto flex items-center justify-center gap-[10px] 
                   w-[243px] h-[46px] 
                   px-[24px] py-[12px] 
                   rounded-[8px] border border-[#F9A71E] 
                   shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] 
                   text-[18px] leading-[22px] font-normal text-[#F9A71E]"
          >
            View Documentation
          </button>
        </div>

        <!-- Feature 3 -->
        <div
          class="feature3 bg-white rounded-[12px] p-[24px] shadow-sm flex flex-col gap-[16px]"
        >
          <div class="p-[8px] bg-[#4338CA] rounded-[8px]">
            <img
              src="\public\ships&control.png"
              alt="Feature 3"
              class="w-full h-[200px] object-cover rounded-[6px]"
            />
          </div>
          <h3 class="font-semibold text-[20px] leading-[29px] text-[#1A1C3D]">
            Ship & Control
          </h3>
          <p class="font-normal text-[16px] leading-[22px] text-[#4B5563]">
            Flip switches anytime, see instant results.
          </p>
          <button
            class="mt-auto flex items-center justify-center gap-[10px] 
                   w-[243px] h-[46px] 
                   px-[24px] py-[12px] 
                   rounded-[8px] border border-[#F9A71E] 
                   shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] 
                   text-[18px] leading-[22px] font-normal text-[#F9A71E]"
          >
            View Documentation
          </button>
        </div>
      </div>

      <!-- Pager (only visible on iPad) -->
      <div class="pager">
        <div class="pager-btn active"></div>
        <div class="pager-btn"></div>
        <div class="pager-btn"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 📱 Mobile (iPhone) */
@media (max-width: 767px) {
  section {
    padding: 40px 20px !important;
  }

  .features-row {
    flex-direction: column !important;
    align-items: center !important;
    gap: 60px !important;
  }

  .features-row > div {
    width: 100% !important;
    max-width: 360px;
  }

  h1 {
    font-size: 20px !important;
    line-height: 28px !important;
    text-align: center !important;
    white-space: normal !important;
    margin-bottom: 32px !important;
  }

  button {
    width: 100% !important;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  .pager {
    display: none;
  }
}

/* 💻 iPad (768px – 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  section {
    padding: 80px 40px !important;
  }

  .features-row {
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
    gap: 40px !important;
    scrollbar-width: none;
  }

  .features-row::-webkit-scrollbar {
    display: none;
  }

  .features-row > div {
    flex: 0 0 auto;
    width: 420px !important;
    min-height: auto !important; /* ✅ no fixed height */
  }

  button {
    align-self: flex-start;
    width: 243px !important;
  }

  h1 {
    font-size: 26px !important;
    line-height: 36px !important;
    text-align: center !important;
    margin-bottom: 40px !important;
  }

  /* Pager styles */
  .pager {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }

  .pager-btn {
    width: 8px;
    height: 8px;
    border-radius: 100px;
    background: #c5c8e7;
    transition: all 0.3s ease;
  }

  .pager-btn.active {
    width: 36px;
    height: 8px;
    background: linear-gradient(180deg, #42389e 0%, #0f1026 100%);
  }
}

/* 🖥 Desktop (>1024px) */
@media (min-width: 1025px) {
  .pager {
    display: none;
  }
}
</style>
