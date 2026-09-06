# OmniERP Marketing Landing Page

Modern, high-converting product marketing landing page built with **Next.js 16 (App Router)**, **Tailwind CSS 4**, and **DaisyUI 5**, configured for **100% free static export on Vercel**.

---

## 🚀 Key Highlights & Features

- **Built with Next.js App Router + TypeScript**: Ultra-fast performance with zero runtime overhead.
- **DaisyUI 5 + Tailwind 4**: Clean, modern component styling with dark mode theme switching (`light` & `night`).
- **FontAwesome Icons & Google Fonts**: Integrated Plus Jakarta Sans and Kantumruy Pro for bilingual Khmer/English aesthetic.
- **Product Modules Showcase**: Details HR & Attendance, Auto Dealerships, Leave Balances, Cloud POS, Commissions, and Multi-tenant features.
- **Flutter Mobile App Spotlight**: Visual phone mockup previewing selfie biometric clock-in, geofence status, and mobile leave applications.
- **Static Export Ready (`output: 'export'`)**: Compiles to pure static HTML/CSS/JS in the `out/` folder, deployable on Vercel's free tier with no server charges.

---

## 💻 Local Development

```bash
cd landing-page
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building Static Output

```bash
npm run build
```

This generates static HTML and client bundles inside `landing-page/out/`.

---

## 🌐 Deploy to Vercel for Free

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Connect via GitHub
1. Push `site-project` (or the `landing-page` repo) to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. Set **Root Directory** to `landing-page`.
5. Vercel automatically detects Next.js. Click **Deploy**.
