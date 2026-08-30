# Technology Monastery Website

[![Deploy to GitHub Pages](https://github.com/FreeForCharity/Technologymonastery.org/actions/workflows/deploy.yml/badge.svg)](https://github.com/FreeForCharity/Technologymonastery.org/actions/workflows/deploy.yml)

Official website for The Technology Monastery - Empowering small nonprofits with free technology solutions through our dedicated community of technology monks.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (Static Export)
- **Content Management:** Decap CMS
- **CI/CD:** GitHub Actions

## 🌟 Features

- **Modern Next.js 14**: Built with the latest App Router and React Server Components
- **TypeScript**: Type-safe code throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach with accessibility (WCAG) compliance
- **Static Site Generation**: Optimized static export for fast loading and easy hosting
- **Headless CMS**: Decap CMS for content management
- **SEO Optimized**: Structured data, meta tags, and sitemap
- **Performance Optimized**: Built-in Next.js optimizations for fast page loads
- **Security Headers**: Configured for maximum security
- **Integrations**: 
  - Zeffy donation forms (100% free processing)
  - VolunteerMatch widgets

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── get-started/page.tsx # Get Started page
│   ├── contact/page.tsx   # Contact page
│   ├── privacy-policy/page.tsx   # Privacy policy page
│   ├── terms-of-service/page.tsx # Terms of service page
│   ├── cookie-policy/page.tsx    # Cookie policy page
│   ├── donation-policy/page.tsx  # Donation policy page
│   ├── free-for-charity-donation-policy/page.tsx # FFC donation policy page
│   ├── vulnerability-disclosure-policy/page.tsx  # Vulnerability disclosure policy
│   ├── security-acknowledgements/page.tsx        # Security acknowledgements
│   ├── not-found.tsx      # 404 page
│   ├── error.tsx          # Error boundary page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── ServiceCard.tsx   # Service card component
│   └── Button.tsx        # Reusable button component
├── public/               # Static assets
│   ├── admin/           # Decap CMS admin interface
│   ├── privacy.html     # Legacy redirect stub -> /privacy-policy/
│   ├── terms.html       # Legacy redirect stub -> /terms-of-service/
│   ├── manifest.json    # PWA manifest
│   └── ...              # Other static files
├── next.config.js       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions CI/CD
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/FreeForCharity/Technologymonastery.org.git
cd Technologymonastery.org
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm run dev
```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
pnpm run build
```

The static site will be generated in the `out/` directory.

### Content Management

Access the CMS at `/admin/` (e.g., `http://localhost:3000/admin/`)

**Note**: For local CMS development, you'll need to:
1. Enable local backend in `admin/config.yml`
2. Run `npx decap-server` in a separate terminal

## 🔧 Configuration

### Next.js Configuration

The `next.config.js` is configured for static export to GitHub Pages:
- `output: 'export'` - Enables static HTML export
- `basePath: '/Technologymonastery.org'` - Sets the base path for GitHub Pages
- `images.unoptimized: true` - Required for static export

### Tailwind CSS

Tailwind is configured in `tailwind.config.ts` with custom colors matching the nonprofit aesthetic (blue/purple color scheme).

### Decap CMS Setup

1. **Enable GitHub OAuth**:
   - Go to GitHub Settings > Developer Settings > OAuth Apps
   - Create a new OAuth app
   - Set Homepage URL to your site
   - Set Authorization callback URL to `https://api.netlify.com/auth/done`

2. **Configure Git Gateway** (if using Netlify Identity):
   - Alternative: Use GitHub backend directly

### Third-Party Integrations

#### Zeffy Donation Form
1. Sign up at [zeffy.com](https://www.zeffy.com)
2. Create a donation form
3. Get embed code
4. Update the contact page with your form

#### VolunteerMatch Widget
1. Register at [volunteermatch.org](https://www.volunteermatch.org)
2. Get your organization's widget code
3. Add to the appropriate page

### Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

**Deployment URL:** `https://freeforcharity.github.io/Technologymonastery.org/`

## 📊 Performance

- Next.js optimized build with automatic code splitting
- Static generation for fast page loads
- Tailwind CSS purging for minimal CSS bundle size
- Optimized images and assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

## 📄 License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

The Technology Monastery
- Website: [technologymonastery.org](https://technologymonastery.org)
- Email: info@technologymonastery.org

## 🙏 Acknowledgments

- Built with Next.js 14 and React
- Styled with Tailwind CSS
- Hosted on GitHub Pages
- Content managed with Decap CMS
- Donation processing by Zeffy
- Volunteer matching by VolunteerMatch
