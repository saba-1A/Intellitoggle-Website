<template>
  <section class="hero-section">
    <!-- ✅ Button -->
    <div class="custom-layer">
      Coming Soon
    </div>

    <!-- ✅ Heading -->
    <h1 class="hero-title">
      DartCodeAI That Actually Changes Flagging
    </h1>

    <!-- ✅ 4 Feature Boxes -->
    <div class="features-wrapper">
      <!-- ✅ Feature 1 -->
      <div class="feature-box with-icon">
        <div class="icon-box">
          <img src="/icon1.png" alt="icon" />
        </div>
        <div class="feature-content">
          <h3 class="feature-title">AutoFlag AI (LLM-Assisted Flag Creation)</h3>
          <p class="feature-desc">
            Create new flags by just typing what you need. The AI names it, sets rules, and configures for you.
          </p>
        </div>
      </div>

      <!-- ✅ Feature 2 -->
      <div class="feature-box with-icon">
        <div class="icon-box">
          <img src="/icon2.png" alt="icon" />
        </div>
        <div class="feature-content">
          <h3 class="feature-title">SmartRamp AI (AI-Driven Rollout Optimization)</h3>
          <p class="feature-desc">
            Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.
          </p>
        </div>
      </div>

      <!-- ✅ Feature 3 -->
      <div class="feature-box with-icon">
        <div class="icon-box">
          <img src="/icon3.png" alt="icon" />
        </div>
        <div class="feature-content">
          <h3 class="feature-title">ExplainFlags AI (LLM Root-Cause + Insights)</h3>
          <p class="feature-desc">
            Understand issues instantly with AI-generated, plain-language insights tied to your flags.
          </p>
        </div>
      </div>

      <!-- ✅ Feature 4 -->
      <div class="feature-box with-icon">
        <div class="icon-box">
          <img src="/icon4.png" alt="icon" />
        </div>
        <div class="feature-content">
          <h3 class="feature-title">AutoSegment AI (Behavioral Segmentation)</h3>
          <p class="feature-desc">
            Target the right users automatically. AI builds segments from live behavior—no manual rules.
          </p>
        </div>
      </div>
    </div>

    <!-- ✅ Enterprise Only above bottom box -->
    <div class="enterprise-label">Enterprise Only</div>

    <!-- ✅ Bottom Wide Box -->
    <div class="bottom-box">
      <p class="bottom-text">
        <span class="highlight-text">Be The First To Try Our New AI Features.</span>
      </p>

      <div class="email-box">
        <input
          v-model="email"
          type="text"
          placeholder="Enter email address"
          class="email-input"
        />
        <button class="cta-btn" @click="submitEmail">Join AI Early Access</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const submitEmail = () => {
  console.log("Email submitted:", email.value);
  // ▸ You can replace this with an API call if needed
};
</script>

<style scoped>
.hero-section {
  display: flex;
  padding: 120px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  gap: 32px;
  background: linear-gradient(
      180deg,
      rgba(66, 56, 158, 0.8) 0%,
      rgba(26, 28, 61, 0.8) 100%
    ),
    url('/image.jpg') lightgray 50% / cover no-repeat;
}

.custom-layer {
  display: flex;
  padding: 10px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 32px;
  background: #F9A71E;
  color: white;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 8px;
}

.hero-title {
  align-self: stretch;
  text-align: center;
  color: #FEFEFF;
  font-family: var(--Font-Family-Title, Satoshi);
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 8px 0;
}

/* ✅ Feature grid */
.features-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1100px;
}

.feature-box {
  position: relative;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  border: 0.2px solid #FFF;
  background: rgba(255, 255, 255, 0.02);
  color: #FEFEFF;
}

.with-icon .icon-box {
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: #EDECF6;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-box img {
  width: 22px;
  height: 22px;
}

.feature-content {
  text-align: center;
  margin-top: 55px;
}

.feature-title {
  color: #FFF;
  text-align: center;
  font-family: var(--Font-Family-Body, Inter);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 8px 0;
}

.feature-desc is {
  font-size: 14px;
  opacity: 0.8;
  line-height: 1.4;
  margin: 0;
}

.enterprise-label {
  margin-top: -13px;
  margin-bottom: -8px;
  text-align: center;
  color: var(--Main-Colors-Seconday-Color, #F9A71E);
  font-family: var(--Font-Family-Body, Inter);
  font-size: var(--Font-Weight-Font-Size-L2---Desktop, 32px);
  font-weight: 600;
}

/* ✅ Bottom Box */
.bottom-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px; /* ✅ spacing between text + input */
  padding: 18px;
  width: 100%;
  max-width: 1100px;
  border-radius: 12px;
  border: 0.2px solid #FFFFFF;
  background: rgba(255, 255, 255, 0.02);
  color: #FEFEFF;
}

.cta-btn {
  background: #F9A71E;
  padding: 12px 40px;
  border-radius: 4px;
  border: 0px solid #F9A71E;
  color: #1A1A1A;
  cursor: pointer;
  max-width : 300;
  font-weight: 600;
}

.email-box {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #EDECF6;
  width: 100%;
  max-width: 480px;
}

.email-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #FFF;
  font-size: 14px;
}

.highlight-text {
  color: #F9A71E;
  font-weight: 600;
}

.bottom-text {
  display: inline-flex;
  margin: 0;
  padding: 0;
  font-size: inherit;
}
/* ✅ Tablet (iPad) */
@media (max-width: 1024px) {
  .bottom-box {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
.email-box {
  align-items: center;
  max-width: 90%;
}
  

  .cta-btn {
    width: 70%;
  }
}

/* ✅ Mobile (iPhone) */
@media (max-width: 600px) {
  .hero-section {
    padding: 60px 20px;
  }

  .features-wrapper {
    grid-template-columns: 1fr; /* single column */
  }

  .hero-title {
    font-size: 28px;
  }

  .bottom-box {
    flex-direction: column;
    gap: 14px;
    padding: 18px;
  }

 @media (max-width: 480px) {
  .email-box {
    padding: 4px 8px;
    gap: 9px;
  }

  .email-input {
    font-size: 12px;
    padding: 2px 0;
  }

  .cta-btn {
    padding: 6px 14px;
    font-size: 8px;
  }
}


  .bottom-text {
    text-align: center;
  }
}
/* ✅ iPad & small tablets */
@media (max-width: 1024px) and (min-width: 481px) {
  .email-box {
    padding: 8px 12px;
    gap: 8px;
    max-width: 360px;   /* ✅ Prevents it from stretching too wide */
  }

  .email-input {
    font-size: 14px;
    padding: 4px 0;
  }

  .cta-btn {
    padding: 10px 20px;
    font-size: 10px;
    border-radius: 4px;
    max-width: 140px;
  }
}

</style>
