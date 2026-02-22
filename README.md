# CleanTex - Site Web SEO Optimisé avec Next.js

Site professionnel de dieptereiniging (nettoyage en profondeur) **migré de Create React App vers Next.js 16** pour une meilleure visibilité sur Google et des performances accrues.

## 🎯 Objectifs

✅ **SEO Maximal** - SSR, Sitemap, Structured Data (JSON-LD)  
✅ **Performance** - Image optimization, Code splitting, Caching  
✅ **Mobile-First** - Design responsive et PWA ready  
✅ **Sécurité** - Security headers, CORS, Input validation  
✅ **Accessibilité** - WCAG 2.1 AA compliance  

## 🚀 Démarrage Rapide

### 1. Installation
```bash
cd frontend
npm install --legacy-peer-deps
```

### 2. Mode développement
```bash
npm run dev
```
Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### 3. Build production
```bash
npm run build
npm start
```

## 📊 Améliorations SEO Implémentées ✨

### ✅ Server-Side Rendering (SSR)
- Contenu rendu côté serveur → Google indexe le HTML complet
- Meilleur Core Web Vitals score
- Temps de chargement initial rapide

### ✅ Métadonnées & Open Graph
- Title dynamique et descriptif
- Meta description optimisée
- Open Graph pour Facebook, LinkedIn
- Twitter Card pour partages sociaux
- Canonical URL pour éviter duplication

### ✅ Structured Data (Schema.org)
- LocalBusiness schema pour l'activité
- Organization schema
- Service schema
- AggregateRating pour avis clients
- Microdata JSON-LD complètes

### ✅ Sitemap & Robots.txt
- `sitemap.xml` généré automatiquement
- `robots.txt` pour crawler guidance
- Prêt pour Google Search Console

### ✅ Performance Optimization
- Image optimization avec Next.js Image component
- CSS minification automatique
- JavaScript code-splitting
- Compression gzip
- Fonts preconnection

### ✅ Mobile & PWA
- 100% responsive design
- Mobile-friendly meta tags
- Web App manifest
- Apple Web App support
- Installation sur home screen

### ✅ Sécurité
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Referrer Policy strict
- Permissions Policy
- Input validation

## 📁 Structure du Projet

```
frontend/
├── app/
│   ├── layout.jsx              # Layout + métadonnées SEO
│   ├── page.jsx               # Page d'accueil
│   ├── globals.css            # Styles Tailwind
│   ├── robots.js              # robots.txt dynamique
│   ├── sitemap.js             # sitemap.xml dynamique
│   ├── middleware.js          # Security headers
│   ├── components/
│   │   ├── Header.jsx         # Navigation
│   │   ├── Hero.jsx           # Section hero
│   │   ├── Services.jsx       # Nos services
│   │   ├── Results.jsx        # Galerie résultats
│   │   ├── Reviews.jsx        # Avis clients
│   │   ├── Contact.jsx        # Formulaire contact
│   │   ├── Footer.jsx         # Pied de page
│   │   └── ui/               # Composants UI réutilisables
│   ├── api/
│   │   └── contact/route.js   # API endpoint POST
│   ├── hooks/
│   │   └── use-toast.js       # Toast notifications
│   ├── lib/
│   │   └── utils.js           # Utilitaires
│   └── data/
│       └── mockData.js        # Données statiques
├── public/
│   ├── manifest.json          # PWA Manifest
│   ├── favicon.ico
│   └── assets/                # Images et ressources
├── next.config.js             # Config Next.js optimisée
├── tailwind.config.js         # Tailwind CSS
├── tsconfig.json              # TypeScript config
├── middleware.js              # Middleware Next.js
├── package.json
├── .env.example              # Template variables
├── .env.local                # Variables locales
├── SEO_GUIDE.md              # Guide SEO détaillé
└── README.md                 # Ce fichier
```

## 🔧 Configuration

### Variables d'environnement (.env.local)
```env
NEXT_PUBLIC_SITE_URL=https://cleantex.com
NEXT_PUBLIC_API_URL=https://api.cleantex.com
```

### Tailwind CSS
Configuré avec:
- Composants personnalisés
- Dark mode support
- Animations fluides
- Plugin accessibility

## 🌐 Déploiement

### Sur Vercel (Recommandé pour Next.js)
```bash
npm install -g vercel
vercel
```

### Sur autres serveurs
```bash
npm run build
npm start
```

### Variables en production
Ajouter dans votre hosting:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_URL`

## 📈 Vérification SEO

### Google Search Console
1. Aller sur https://search.google.com/search-console
2. Ajouter propriété
3. Soumettre sitemap: `https://cleantex.com/sitemap.xml`
4. Vérifier les données structurées

### PageSpeed Insights
```
https://pagespeed.web.dev
```

### Schema.org Validator
```
https://validator.schema.org
```

## 🔌 Intégration Backend

### API Contact Route
```javascript
// POST /api/contact
{
  name: "string",
  email: "string", 
  phone: "string",
  message: "string"
}
```

Communique avec FastAPI backend avec fallback EmailJS

## 📦 Dépendances Principales

- **next**: ^16.1.6 - Framework React optimisé SEO
- **react**: ^19.0.0 - UI library
- **tailwindcss**: ^3.4.17 - Styling
- **@radix-ui**: Composants accessibles
- **lucide-react**: Icônes SVG
- **emailjs/browser**: Email fallback
- **clsx**: Utility classes

## 🔒 Sécurité

Middleware activé:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=()`

## 🎨 Styling

- Tailwind CSS pour responsive design
- CSS Variables pour thématisation
- Mobile-first approach
- Dark mode compatible

## 📱 PWA (Progressive Web App)

- manifest.json configuré
- Service worker ready
- Offline support possible
- Install to home screen
- App shortcuts

## 🆘 Troubleshooting

### Port 3000 déjà utilisé
```bash
npm run dev -- -p 3001
```

### Erreur de build
```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Métadonnées non indexées
1. Vérifier `app/layout.jsx`
2. Valider JSON-LD sur schema.org
3. Soumettre sitemap à Google

## 📚 Documentation Complète

Voir **[SEO_GUIDE.md](./SEO_GUIDE.md)** pour le guide complet d'optimisation SEO avec checklist et métriques de performance

## 📖 Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Google SEO Starter Guide](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [Web.dev Learning](https://web.dev/learn)
- [MDN Web Docs](https://developer.mozilla.org/)

## 👥 Support

Pour l'optimisation SEO complète: Voir [SEO_GUIDE.md](./SEO_GUIDE.md)

---

**Migré vers Next.js**: Février 2026  
**Version**: 2.0  
**Status**: ✅ Production Ready
