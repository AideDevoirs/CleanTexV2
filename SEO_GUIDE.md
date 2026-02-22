# Migration CleanTex vers Next.js - Guide d'Utilisation

## 🚀 Démarrage Rapide

### Installation des dépendances
```bash
cd frontend
npm install --legacy-peer-deps
```

### Mode développement
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:3000`

### Build pour la production
```bash
npm run build
npm start
```

## 📋 Améliorations SEO Implémentées

### 1. **Server-Side Rendering (SSR) avec Next.js**
- Tous les contenus sont pré-rendus côté serveur
- Google peut indexer directement le contenu HTML
- Meilleur temps de chargement initial

### 2. **Métadonnées SEO Complètes**
- `title` dynamique et descriptif
- `meta description` optimisée
- Open Graph pour les réseaux sociaux
- Twitter Card pour partages sur Twitter
- Canonical URL pour éviter le contenu dupliqué

### 3. **Structured Data (Schema.org)**
- LocalBusiness schema pour l'activité
- Organization schema pour la marque
- Service schema pour les services offerts
- AggregateRating pour les avis clients
- Données structurées en JSON-LD

### 4. **Sitemap et Robots.txt**
- `sitemap.xml` généré automatiquement
- `robots.txt` pour guider les crawlers
- Priorités et fréquences de mise à jour configurées

### 5. **Performance Optimization**
- Image optimization avec Next.js Image component
- CSS minification automatique
- JavaScript code-splitting
- Compression gzip
- Fonts preconnection

### 6. **Mobile First & Responsive**
- Design 100% responsive
- Mobile-friendly meta tags
- Web App manifest pour PWA
- Apple Web App support

### 7. **Sécurité & Headers**
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Referrer Policy strict
- CSP (Content Security Policy)
- CORS handling

## 🔧 Configuration Environnement

Créer un fichier `.env.local` avec:
```env
NEXT_PUBLIC_SITE_URL=https://cleantex.com
NEXT_PUBLIC_API_URL=https://api.cleantex.com
```

## 📁 Structure du Projet

```
app/
├── layout.jsx           # Layout principal avec métadonnées
├── page.jsx            # Page d'accueil
├── globals.css         # Styles globaux
├── robots.js           # Configuration robots.txt
├── sitemap.js          # Configuration sitemap.xml
├── middleware.js       # Middleware Next.js
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Results.jsx
│   ├── Reviews.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ui/            # Composants UI réutilisables
├── hooks/
│   └── use-toast.js
├── api/
│   └── contact/
│       └── route.js    # API route pour formulaire de contact
├── lib/
│   └── utils.js       # Utilitaires (cn, etc.)
└── data/
    └── mockData.js    # Données statiques

public/
├── manifest.json      # PWA manifest
├── favicon.ico
└── assets/           # Images et ressources statiques
```

## 🔍 Vérification SEO

### Google Search Console
1. Aller sur https://search.google.com/search-console
2. Ajouter votre propriété de site
3. Soumettre le sitemap: `https://cleantex.com/sitemap.xml`
4. Vérifier les données structurées

### PageSpeed Insights
- Visiter https://pagespeed.web.dev
- Analyser votre domaine
- Vérifier les Core Web Vitals

### Lighthouse
- Ouvrir DevTools (F12)
- Aller dans l'onglet Lighthouse
- Générer un rapport
- Chercher les améliorations SEO

## 📊 Métriques de Performance

Objectifs à atteindre:
- **Lighthouse SEO Score**: 90+/100
- **Core Web Vitals**: Tous au vert
- **Pages indexed by Google**: 2000+ pages (sitemap soumis)
- **Mobile Usability**: Pas d'erreurs

## 🔄 Intégration Backend

L'API route `/api/contact` communique avec votre backend FastAPI:
```javascript
// POST /api/contact
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

### Configuration Backend
Assurez-vous que votre FastAPI a:
- CORS configuré pour Next.js
- Route `/api/contact` pour les demandes de devis
- Email service intégré

```python
# Exemple dans server.py
@api_router.post("/contact")
async def handle_contact(contact: ContactRequest):
    # Traiter et envoyer l'email
    return {"status": "success"}
```

## 🚀 Déploiement

### Sur Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Variables d'environnement pour production:
- Ajouter `NEXT_PUBLIC_SITE_URL`
- Ajouter `NEXT_PUBLIC_API_URL` pointant vers votre API de production

### Après déploiement:
1. Vérifier le sitemap: `https://yourdomain.com/sitemap.xml`
2. Vérifier robots.txt: `https://yourdomain.com/robots.txt`
3. Soumettre à Google Search Console
4. Ajouter domain dans Google Business Profile

## 📝 Checklist SEO Final

- [ ] Sitemap soumis à Google
- [ ] Robots.txt accessible
- [ ] Search Console configurée
- [ ] Métadonnées vérifiées
- [ ] Structured data validée
- [ ] Mobile-friendly confirmé
- [ ] Core Web Vitals en vert
- [ ] Images optimisées
- [ ] SSL/HTTPS activé
- [ ] Backlinks internes OK
- [ ] Google Analytics configuré
- [ ] Google Business Profile à jour

## 🆘 Troubleshooting

### Pages non indexées
1. Vérifier que le site est public (pas de robots.txt restrictif)
2. Soumettre sitemap à Google Search Console
3. Attendre 1-2 semaines pour l'indexation

### Métadonnées non apparaissent
1. Vérifier la console devtools pour les erreurs
2. Valider le JSON-LD sur https://schema.org/validator
3. Vérifier que les métadonnées sont dans `layout.jsx`

### Images ne se chargent pas
1. Vérifier les chemins dans `public/`
2. Utiliser `Image` de next/image pour les images dynamiques
3. Vérifier la configuration CORS

## 📚 Ressources Supplémentaires

- [Next.js Documentation](https://nextjs.org/docs)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Web.dev](https://web.dev/learn)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Dernière mise à jour**: Février 2026
**Version**: 2.0 (Next.js)
