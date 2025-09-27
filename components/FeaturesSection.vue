<template>
  <section class="feature-wrapper">
    <div class="feature-section">
      <!-- Left Image (Card) -->
      <div class="image-content">
        <img src="/openfeature-stacked-black.png" alt="OpenFeature Logo" />
      </div>

      <!-- Right Content -->
      <div class="text-content">
        <h3 class="heading">
          Seamless Feature Management with <br />OpenFeature
        </h3>
        <p class="body-text">
          Aorten now integrates with OpenFeature to provide developers with a
          powerful, standardized approach to feature flagging and dynamic
          configuration. Ship features faster, test safely, and optimize user
          experiences effortlessly.
        </p>
        <a href="#" class="learn-more">
          Learn More
          <img src="/arrow.svg" alt="arrow" class="arrow-icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* OUTER WRAPPER = Frame with padding */
.feature-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 120px;
  background: #edecf6;
  box-sizing: border-box;
}

/* INNER FRAME (1680 × 618) */
.feature-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  width: 1680px;
  height: 618px;
}

/* Equal columns (image + text) */
.image-content,
.text-content {
  flex: 1;
}

/* Card styling ONLY on image side */
.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 12px;
  border: 0.5px solid #42389e;
  background: #ffffff;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
  height: auto;
  align-self: center;
}

.image-content img {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
}

/* Text content = plain (no card) */
.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #5f5f60;
  padding-right: 40px;
}

.heading {
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 16px;
}

.body-text {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  background: #f9a71e;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s ease;
  width: fit-content;
}

.learn-more:hover {
  background: #42389e;
}

.arrow-icon {
  width: 10px;
  height: 16px;
}
/* 📱 Mobile styles */
@media (max-width: 768px) {
  .feature-wrapper {
    padding: 60px 20px; /* smaller outer padding */
  }

  .feature-section {
    flex-direction: column;
    gap: 32px;
    width: 100%;
    height: auto;
  }

  .image-content {
    width: 100%;
    max-width: 345px;
    height: auto;
    padding: 32px 24px;
    border-radius: 16px;
    border: 1px solid rgba(66, 72, 158, 0.2);
    background: #fff;
    box-shadow: none;
    margin: 0 auto;
  }

  .image-content img {
    width: 160px;
    height: auto;
    object-fit: contain;
  }

  .text-content {
    width: 100%;
    max-width: 345px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    padding: 0;
  }

  .heading {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
  }

  .body-text {
    font-size: 14px;
    line-height: 1.6;
    color: #5f5f60;
    margin: 0;
  }

  /* Figma-accurate button */
  .learn-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 345px;
    height: 40px;
    padding: 24px 36px;
    gap: 10px;

    background: linear-gradient(90deg, #4338ca, #6d28d9);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
/* 📱 Tablet styles */
@media (min-width: 769px) and (max-width: 1024px) {
  .feature-wrapper {
    padding: 64px;
  }

  .feature-section {
    flex-direction: column;
    gap: 46px;
    width: 100%;
    max-width: 1026px;
    height: auto; /* Hug */
  }

  .image-content {
    max-width: 898px;
    padding: 64px;
    border-radius: 16px;
    border: 1px solid rgba(66, 72, 158, 0.2);
    background: #fff;
    box-shadow: none;
    margin: 0 auto;
  }

  .image-content img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  .text-content {
    max-width: 898px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    padding: 0;
    color: #5F5F60;
    text-align: center; /* 🔹 Center align all text */
  }

  .heading {
    font-size: 24px;
    font-weight: 600;
    color: #1A1A1A;
    margin: 0;
  }

  .body-text {
    font-size: 16px;
    line-height: 1.6;
    color: #5F5F60;
    margin: 0;
  }

  /* 🔘 Tablet Button */
  .learn-more {
    display: flex;
    align-items: center;
    justify-content: center; /* 🔹 Center content */
    gap: 10px;

    height: 55px;         /* Fixed height */
    padding: 12px 24px;
    border-radius: 8px;
    width: fit-content;   /* Hug content */
    margin: 0 auto;       /* 🔹 Center button horizontally */

    background: #FACC15;  /* Secondary Yellow */
    color: #1A1A1A;
    font-size: 14px;
    font-weight: 600;

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .learn-more:hover {
    background: linear-gradient(90deg, #4338CA, #6D28D9);
    color: #fff;
    transform: translateY(-2px); /* 🔹 subtle lift */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); /* stronger shadow */
  }
}
</style scoped>