<!-- components/Navbar.vue -->
<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(true); // default dark mode
const isOpen = ref(false); // mobile menu open/close

// Load saved theme OR default
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});

//  Toggle theme + add/remove dark class on <html>
const toggleTheme = () => {
  isDark.value = !isDark.value;
  const html = document.documentElement;

  if (isDark.value) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <nav
    class="sticky top-0 z-50 transition-colors duration-300"
    :class="isDark ? 'bg-[#42389E]' : 'bg-white'"
  >
    <div
      class="max-w-[1240px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-[100px] py-4 md:py-6 lg:py-[32px]"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img
          :src="isDark ? '/darklogo.svg' : '/lightlogo.svg'"
          alt="Logo"
          class="w-10 h-10 md:w-[55px] md:h-[51px]"
        />
        <span
          :class="isDark ? 'text-white' : 'text-black'"
          class="text-lg md:text-xl font-semibold"
        >
          IntelliToggle
        </span>
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-16 lg:gap-[290px]">
        <ul
          class="flex items-center gap-6 lg:gap-8 text-sm md:text-base"
          :class="isDark ? 'text-white' : 'text-black'"
        >
          <li><a href="#" class="font-medium">Home</a></li>
          <li>
            <a href="#" :class="isDark ? 'hover:text-gray-200' : 'hover:text-gray-600'">
              About
            </a>
          </li>
          <li>
            <a href="#" :class="isDark ? 'hover:text-gray-200' : 'hover:text-gray-600'">
              Pricing
            </a>
          </li>
        </ul>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <button
            class="bg-[#F9A71E] text-black font-medium px-4 md:px-6 py-2 rounded-md hover:opacity-90 transition"
          >
            Start Sandbox
          </button>
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="ml-2 p-2 rounded-md border hover:bg-gray-100 transition"
            :class="isDark ? 'text-white border-white' : 'text-black border-black'"
          >
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>

      <!-- Mobile Hamburger -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded-md"
        :class="isDark ? 'text-white' : 'text-black'"
      >
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isOpen"
        class="md:hidden px-6 py-4 space-y-4"
        :class="isDark ? 'bg-[#42389E] text-white' : 'bg-white text-black'"
      >
        <a href="#" class="block">Home</a>
        <a href="#" class="block">About</a>
        <a href="#" class="block">Pricing</a>

        <div class="flex flex-col gap-4 mt-4">
          <button
            class="bg-[#F9A71E] text-black font-medium px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Start Sandbox
          </button>
          <button
            @click="toggleTheme"
            class="p-2 rounded-md border hover:bg-gray-100 transition"
            :class="isDark ? 'text-white border-white' : 'text-black border-black'"
          >
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style>
/* Slide down animation for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
