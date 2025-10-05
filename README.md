# S.INNOVATION - Site Web Corporate

Site web interactif et moderne pour S.INNOVATION, développé avec Next.js 14, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design Responsive** : Optimisé pour tous les appareils
- **Animations Fluides** : Utilisation de Framer Motion pour des transitions élégantes
- **Interface Moderne** : Design créatif avec gradients et effets visuels
- **Navigation Smooth** : Défilement fluide entre les sections
- **Formulaire de Contact** : Formulaire interactif avec validation
- **Section Clients** : Espace dédié aux logos et témoignages clients
- **Optimisé SEO** : Métadonnées optimisées pour le référencement

## 🛠️ Technologies Utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique pour une meilleure robustesse
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations
- **Lucide React** : Icônes modernes et légères

## 📦 Installation

1. **Cloner le projet**
   ```bash
   cd "D:\Business Project\SI"
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du Projet

```
SI/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── Header.tsx           # Navigation
│   ├── HeroSection.tsx      # Section hero
│   ├── ServicesSection.tsx  # Section services
│   ├── AboutSection.tsx     # Section à propos
│   ├── ClientsSection.tsx   # Section clients
│   ├── ContactSection.tsx   # Section contact
│   └── Footer.tsx           # Pied de page
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Sections du Site

### 🏠 Hero Section
- Titre principal avec animations
- Boutons d'action
- Statistiques de l'entreprise
- Éléments visuels animés

### 🔧 Services
- **Conception et Développement** : Web & Applications
- **Formation** : Programmation & Développement personnel  
- **Consultation d'Entreprise** : Transformation digitale
- Technologies et expertises

### 👥 À Propos
- Histoire de l'entreprise
- Mission et vision
- Équipe internationale (Madagascar, France, Inde, Russie)
- Statistiques et valeurs

### 🤝 Clients
- Logos des clients (placeholder)
- Témoignages clients
- Statistiques de satisfaction

### 📞 Contact
- Formulaire de contact interactif
- Informations de contact
- Validation et feedback utilisateur

## 🚀 Déploiement

### Build de Production
```bash
npm run build
npm start
```

### Déploiement Vercel
```bash
npm i -g vercel
vercel
```

### Déploiement Netlify
```bash
npm run build
# Déployer le dossier .next/static et .next/server
```

## 🎯 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.ts` :
```typescript
colors: {
  primary: {
    // Vos couleurs primaires
  },
  secondary: {
    // Vos couleurs secondaires
  }
}
```

### Contenu
- **Services** : Modifiez `ServicesSection.tsx`
- **À Propos** : Modifiez `AboutSection.tsx`
- **Clients** : Ajoutez vos vrais logos dans `ClientsSection.tsx`
- **Contact** : Intégrez votre service d'email dans `ContactSection.tsx`

### Logo Clients
Remplacez les placeholders dans `ClientsSection.tsx` :
```typescript
const clientLogos = [
  { name: "Votre Client", logo: "/path/to/logo.png", sector: "Secteur" },
  // ...
]
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Scripts Disponibles

- `npm run dev` : Serveur de développement
- `npm run build` : Build de production
- `npm run start` : Serveur de production
- `npm run lint` : Vérification du code

## 📄 Licence

© 2024 S.INNOVATION. Tous droits réservés.

---

**Contact** : contact@sinnov.info  
**Site** : [s-innovation.com](https://sinnov.info)
