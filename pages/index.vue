<!-- pages/index.vue -->
<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Logos-->
    <LogoSection />

    <!--intellitoggle-section-->
    <intellitoggle-Section/>

    <!--Features-Section-->
    <FeaturesSection/>
    
    <!--Section-Container-->
  <SectionContainer/>

  <!--Design-System-->
  <DesignSystem/>

  <!--CTASection-->
  <CTASection/>

  <!--PromoSection-->
  <PromoSection/>

  <!--WhyTeamUse-->
  <WhyTeamsUse/>

  <!--Footer-->
  <Footer/>
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import LogoSection from '~/components/LogoSection.vue'
import intellitoggleSection from '~/components/intellitoggle-section.vue'
import FeaturesSection from '~/components/FeaturesSection.vue' 
import SectionContainer from '~/components/SectionContainer.vue'
import DesignSystem from '~/components/DesignSystem.vue'
import CTASection from '~/components/CTASection.vue'
import PromoSection from '~/components/PromoSection.vue'
import WhyTeamsUse from '~/components/WhyTeamsUse.vue'
import Footer from '~/components/Footer.vue'
</script>
