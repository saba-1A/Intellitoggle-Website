# Frontend Developer Assignment

Recreate the provided Figma **home page design** using Nuxt 3 + Vue 3 + TailwindCSS, and verify layout fidelity using **Pixelay**.  

Interactivity  
- Mobile menu toggle  
- Light/dark mode 

Responsiveness  
- Fully responsive across mobile(iphone), tablet(ipad),Pc.  

Pixelay Evidence  

`/pixelay` folder contains:  
- `pixelay-pc.png`  
- `pixelay-iphone.png`
- pixelay -ipad.png
- `notes.md` — short note 

---
Here are the main challenges or constraints I faced while implementing the design

- New Framework (Nuxt): Although I have prior Vue experience, this was my first project in Nuxt. I spent time learning its structure, routing, and folder conventions before building components.  
- Figma Assumptions & Missing Specs: Some spacing, sizing, and typography details were not fully defined, so I made best‑fit decisions to preserve layout consistency.  
- Pixel Perfection vs Responsiveness: To ensure the layout works across desktop, tablet, and mobile, I adjusted certain pixel values in favor of flexibility and accessibility.  
- Browser Rendering Differences: Fonts, shadows, and spacing render slightly differently across browsers, which impacted 1:1 pixel matching.  
- Time Split Between Learning and Building: Since this was a new stack for me, part of the time went into learning conventions before implementing, which may reflect in small design gaps.  
Conclusion:
I didn’t want to rush into just making the page visually appealing—even though it matches the Figma design, I chose to take my time understanding each section first. This helped me grasp what was required, and while the process was long and challenging, it turned out to be a valuable experience. It has made me more confident about learning new skills and tackling unfamiliar frameworks.

## Live Demo  
1.https://intellitoggle-website.vercel.app/

---
Tech Stack  
- Nuxt 3  
- Vue 3
- TailwindCSS 

---

Setup Instructions  

Clone the repo:  

```bash
git clone https://github.com/saba-1A/Intellitoggle-Website.git
cd Intellitoggle-Website
npm install
npm run dev
