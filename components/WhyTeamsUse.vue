<template>
  <section
    class="max-w-screen-xl mx-auto flex flex-col items-center bg-white px-[80px] py-[120px] gap-[120px]"
  >
    <!-- Heading (hidden on mobile) -->
    <h2
      class="text-center font-[700] text-[32px] md:text-[40px] hidden md:block"
      style="
        font-family: var(--Font-Family-Title, Satoshi);
        line-height: normal;
        background: var(--Main-Colors-Hero-gradient, linear-gradient(180deg, #42389E 0%, #0F1026 100%));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      "
    >
      Why Teams Use IntelliToggle
    </h2>

    <!-- Features -->
    <div
      class="w-full flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-[60px]"
    >
      <!-- Feature 1 -->
      <div class="flex flex-col items-start gap-4 flex-1">
        <div
          class="w-[48px] h-[48px] flex items-center justify-center rounded-[8px] border border-[#42389E] bg-[#EDECF6]"
        >
          <img src="/public/ai-operator.svg" alt="AI Operator" class="w-[24px] h-[24px]" />
        </div>
        <h3
          class="text-[20px] md:text-[24px] font-[600] text-[#1A1C3D]"
          style="font-family: var(--Font-Family-Body, Inter); line-height: normal;"
        >
          Safer, faster rollouts
        </h3>
        <p
          class="text-[16px] md:text-[18px]"
          style="
            font-family: var(--Font-Family-Body, Inter);
            font-weight: 400;
            line-height: normal;
            color: var(--Neutral-Colors-Body-Text-2, #5F5F60);
          "
        >
          Control feature releases in minutes, not weeks, without risking production stability.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="flex flex-col items-start gap-4 flex-1">
        <div
          class="w-[48px] h-[48px] flex items-center justify-center rounded-[8px] border border-[#42389E] bg-[#EDECF6]"
        >
          <img src="/public/code-deploy.svg" alt="Code Deploy" class="w-[24px] h-[24px]" />
        </div>
        <h3
          class="text-[20px] md:text-[24px] font-[600] text-[#1A1C3D]"
          style="font-family: var(--Font-Family-Body, Inter); line-height: normal;"
        >
          Confidence to ship
        </h3>
        <p
          class="text-[16px] md:text-[18px]"
          style="
            font-family: var(--Font-Family-Body, Inter);
            font-weight: 400;
            line-height: normal;
            color: var(--Neutral-Colors-Body-Text-2, #5F5F60);
          "
        >
          Ship, target, and roll back. Engineers ship more often knowing they can undo mistakes.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="flex flex-col items-start gap-4 flex-1">
        <div
          class="w-[48px] h-[48px] flex items-center justify-center rounded-[8px] border border-[#42389E] bg-[#EDECF6]"
        >
          <img src="/public/control-filled.svg" alt="Control" class="w-[24px] h-[24px]" />
        </div>
        <h3
          class="text-[20px] md:text-[24px] font-[600] text-[#1A1C3D]"
          style="font-family: var(--Font-Family-Body, Inter); line-height: normal;"
        >
          Future-ready with AI delivery
        </h3>
        <p
          class="text-[16px] md:text-[18px]"
          style="
            font-family: var(--Font-Family-Body, Inter);
            font-weight: 400;
            line-height: normal;
            color: var(--Neutral-Colors-Body-Text-2, #5F5F60);
          "
        >
          Built for DevIT workflows and already prepared for AI-powered rollout automation tomorrow.
        </p>
      </div>
    </div>

    <!-- CTA Box (hidden on mobile) -->
    <div
      class="w-full hidden md:flex justify-between items-center rounded-[12px] border border-[#42389E] bg-[#EDECF6] shadow-md px-[32px] py-[16px]"
    >
      <p
        class="flex-1"
        style="
          font-family: var(--Font-Family-Body, Inter);
          font-size: 24px;
          font-weight: 600;
          line-height: normal;
          color: var(--Neutral-Colors-Header-1, #0E121B);
        "
      >
        Read a 2-min case note: How a sample Flutter app shipped faster with IntelliToggle
      </p>
      <button
        class="flex justify-center items-center gap-[10px]"
        style="
          width: 184px;
          height: 55px;
          padding: 12px 24px;
          border-radius: 8px;
          background: var(--Main-Colors-Seconday-Color, #F9A71E);
          box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
        "
      >
        <span
          style="
            font-family: var(--Font-Family-Body, Inter);
            font-size: var(--Font-Weight-Font-Size-M---Desktop, 18px);
            font-weight: 600;
            line-height: normal;
            background: var(--Main-Colors-Hero-gradient, linear-gradient(180deg, #42389E 0%, #0F1026 100%));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
        >
          Read&nbsp;Now
        </span>
      </button>
    </div>
  </section>
</template>
