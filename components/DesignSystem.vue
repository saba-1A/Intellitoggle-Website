<!-- components/DesignSystem.vue -->
<template>
  <section
    class="w-full max-w-[1920px] mx-auto flex flex-col px-[120px] py-[120px] gap-[32px] bg-white"
  >
    <!-- Gradient Header 1 -->
    <h1
  class="header-1 text-center"
  :style="{
    fontFamily: 'Satoshi, sans-serif',
    fontSize: '40px',
    lineHeight: 'normal',
    color: '#1A1C3D', // ✅ Solid dark text instead of gradient background
  }"
>
  Dart-Powered Feature Flag
</h1>


    <!-- Solid Header 2 -->
    <h2
      class="header-2 font-semibold text-center"
      :style="{
        fontFamily: 'Inter, sans-serif',
        fontSize: '32px',
        lineHeight: 'normal',
        color: '#1A1C3D',
      }"
    >
      Not Another Generic Feature Flag Tool
    </h2>

    <!-- Body -->
    <p
      class="body-text font-normal text-center"
      :style="{
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        lineHeight: 'normal',
        color: '#5F5F60',
      }"
    >
      Most tools are built for every language, which means extra layers and slower
      toggles.
      <br />
      IntelliToggle is built in Dart, for Dart — so it’s faster, safer, and built
      for your stack.
    </p>

    <!-- Comparison Table -->
    <div class="table-wrapper overflow-x-auto">
      <table class="comparison-table min-w-[900px] border-collapse rounded-lg overflow-hidden shadow">
        <thead>
          <tr class="bg-gradient-to-r from-[#4338CA] to-[#1E1B4B] text-white">
            <th class="px-6 py-4 text-left text-[24px] font-semibold">Features</th>
            <th class="px-6 py-4 text-center text-[24px] font-semibold">IntelliToggle</th>
            <th class="px-6 py-4 text-center text-[24px] font-semibold">Other Feature Flag</th>
          </tr>
        </thead>
        <tbody class="bg-[#F9FAFB] text-[#1A1C3D] text-[18px]">
          <tr class="border-t" v-for="(feature, index) in features" :key="index">
            <td class="px-6 py-4">{{ feature.name }}</td>
            <td class="px-6 py-4 text-center">
              <img v-if="feature.intelli" src="/tick.svg" class="w-5 h-5 mx-auto" />
              <img v-else src="/cancel.svg" class="w-5 h-5 mx-auto" />
            </td>
            <td class="px-6 py-4 text-center">
              <img v-if="feature.other" src="/tick.svg" class="w-5 h-5 mx-auto" />
              <img v-else src="/cancel.svg" class="w-5 h-5 mx-auto" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pager (iPad only) -->
    <div class="pager">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="pager-btn"
        :class="{ active: currentSlide === index }"
        @click="scrollToRow(index)"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  { name: "Dart-native SDK & server", intelli: true, other: false },
  { name: "End-to-end type safety", intelli: true, other: false },
  { name: "AI-assisted roll-outs & cleanup", intelli: true, other: false },
  { name: "A/B testing built-in", intelli: true, other: false },
  { name: "Dart-Powered SDKs", intelli: true, other: false },
]);

const currentSlide = ref(0);

function scrollToRow(index) {
  currentSlide.value = index;
  const row = document.querySelectorAll(".comparison-table tr")[index + 1];
  if (row) row.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}
</script>

<style scoped>
/* 📱 iPhone (0 – 767px) */
@media (max-width: 767px) {
  section {
    padding: 40px 20px;
    gap: 20px;
  }

  .header-1 {
    text-align: left;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.3;
  }

  .header-2 {
    text-align: left;
    font-size: 18px;
    line-height: 1.3;
  }

  .body-text {
    text-align: left;
    font-size: 14px;
    line-height: 1.6;
    font-weight: normal;
  }

  /* ✅ hide <br> only on mobile */
  .body-text br {
    display: none;
  }

  .comparison-table {
    min-width: 500px;
    font-size: 14px;
  }

  .pager {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 16px;
  }

  .pager-btn {
    width: 6px;
    height: 6px;
    border-radius: 100px;
    background: #c5c8e7;
    transition: all 0.3s ease;
  }

  .pager-btn.active {
    width: 28px;
    height: 6px;
    background: linear-gradient(180deg, #42389e 0%, #0f1026 100%);
  }
}

/* 💻 iPad (768px – 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  section { padding: 80px 60px; gap: 28px; }
  .header-1 { text-align: left; font-size: 28px; line-height: 1.4; }
  .header-2 { text-align: left; font-size: 22px; line-height: 1.4; }
  .body-text {
    text-align: left;
    font-size: 16px;
    line-height: 1.6;
    white-space: normal;
  }
  .comparison-table { min-width: 800px; font-size: 16px; }
  .pager { display: flex; justify-content: center; gap: 8px; margin-top: 20px; }
  .pager-btn { width: 8px; height: 8px; border-radius: 100px; background: #c5c8e7; transition: all 0.3s ease; }
  .pager-btn.active { width: 36px; height: 8px; background: linear-gradient(180deg, #42389e 0%, #0f1026 100%); }
}

/* 🖥 Desktop (>1024px) */
@media (min-width: 1025px) {
  section { padding: 120px; gap: 32px; }

  .comparison-table {
    margin-left: auto;
    margin-right: auto;
    display: table;
  }

  .pager { display: none; }
}
</style>
