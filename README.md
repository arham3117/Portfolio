# Muhammad Arham - Portfolio

A modern, interactive portfolio website showcasing my expertise as a Cloud Engineer. Built with Next.js 15, featuring smooth animations, custom cursor interactions, and elegant typography.

## 🌟 Features

- **Bilingual Design**: English and Urdu (اردو) name display
- **Interactive Navigation**: Smooth section transitions with keyboard/mouse controls
- **Custom Cursor**: Dynamic cursor that adapts to different pages and hover states
- **Hover-Triggered Social Links**: LinkedIn, GitHub, and Resume access
- **Project Carousel**: Elegant project showcase with progress indicators
- **Responsive Design**: Optimized for all device sizes
- **Animated Elements**: Staggered text animations and smooth transitions
- **Ethereal Background**: Dynamic shadow effects with noise textures

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **React**: 19.0.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display, Montserrat, Crimson Text, Dancing Script, Noto Nastaliq Urdu)
- **Language**: TypeScript

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout with custom cursor
│   ├── page.tsx             # Landing page
│   └── portfolio/
│       └── page.tsx         # Main portfolio sections
├── components/
│   └── ui/
│       ├── custom-cursor.tsx    # Global custom cursor component
│       └── etheral-shadow.tsx   # Background shadow effects
├── data/
│   └── portfolio.ts         # Skills, projects, and certifications data
└── types/
    └── index.ts             # TypeScript type definitions
```

## 🎮 Navigation

- **Arrow Keys**: Navigate between sections
- **Mouse Wheel**: Scroll through portfolio sections
- **Left Edge Hover**: Access social navigation (LinkedIn, GitHub, Resume)
- **Project Navigation**: Use PREV/NEXT buttons or progress indicators

## 🎨 Design Features

- **Landing Page**: Features both English and Urdu names with elegant typography
- **Portfolio Sections**: About, Skills, Projects, and Certifications
- **Color Scheme**: Sophisticated dark theme with strategic white accents
- **Typography**: Carefully selected font combinations for readability and elegance
- **Custom Cursor**: Black on landing page, white on portfolio with smooth transitions

## 🚀 Deployment

The project is optimized for deployment on Vercel:

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 Contact

- **LinkedIn**: [Muhammad Arham](https://www.linkedin.com/in/muhammad-arham-profile)
- **GitHub**: [Your GitHub Profile]
- **Resume**: Available via portfolio navigation

---

Built with ❤️ by Muhammad Arham