# 🔍 Technische Stack Analyse - Zonneplan Wizard

## 📊 Overzicht Software Stack

### Frontend Framework
- **Geen expliciet framework gedetecteerd** (mogelijk vanilla JS of server-side rendered)
- **CSS-in-JS**: styled-components (13 unieke component classes)
- **Build Tool**: Vite of custom build pipeline
- **Bundle structuur**: `/build/assets/` met hash-based naming

### Styling & UI
- **CSS Framework**: styled-components
- **Fonts**: 
  - Effra (primary)
  - Aeonik (secondary)
  - Assistant (Google Fonts)
- **Design Tokens**: CSS variables niet gedetecteerd

### Infrastructure & Hosting
- **Domein**: mijn.zonneplan.nl
- **CDN/Assets**: 
  - AWS S3 (zonneplan.s3.eu-west-1.amazonaws.com)
  - Direct asset serving vanaf hoofddomein
- **SSL**: Volledig HTTPS

### Analytics & Tracking
- **Google Analytics** (UA + GA4)
- **Google Tag Manager** (GTM-TJ6VS9)
- **Facebook Pixel** (ID: 1699415100279657)
- **Custom tracking**: track.mijn.zonneplan.nl

### API & Backend
- **API endpoints gedetecteerd**:
  - POST `/app.js` (tracking)
  - POST `/-/events/page-event`
  - POST `/-/widgets/get`
- **Geen GraphQL/REST API calls** voor data ophalen (server-side rendered)

## 🏗️ Architectuur Kenmerken

### Routing
- **Type**: Server-side routing (traditionele multi-page app)
- **URL structuur**: `/aanbieding/{ID}/{stap-naam}`
- **Stappen**:
  1. `/welkom`
  2. `/advies`
  3. `/besparing`
  4. `/garantie`
  5. `/slim-systeem`
  6. `/deelnemen`

### State Management
- **Geen client-side state management** (Redux/MobX/Recoil)
- **Data persistence**: Via server sessie (waarschijnlijk)
- **Progress tracking**: Server-side (28% op stap 2)

### Component Libraries Gedetecteerd
```javascript
// Bundle files gevonden:
- app-9cf24b75.js (main application)
- client-57a1b146.js
- base-7a3895b4.js
- ThemeProvider-d1a54f2e.js
- ArrowRight-744afb6e.js
- Plan-1cd4da0c.js
- Shadow-96fbe3f3.js
- InfoSection-9fb58706.js
- Specifications-12d305da.js
- ModalHeader-b046f4a9.js
```

## 📦 Dependencies & Libraries

### JavaScript Libraries
- React-achtige component structuur (maar geen React gedetecteerd)
- react-error-boundary (error handling)
- Lucide icons (createLucideIcon)
- CommonJS helpers (module system)

### Performance Optimizations
- **Code splitting**: Ja (lazy loading van componenten)
- **Asset hashing**: Ja (cache busting)
- **Image optimization**: AWS S3 met conversions
- **Font preloading**: Google Fonts

## 🔐 Security & Privacy
- **HTTPS**: Volledig
- **CSP**: Niet gedetecteerd
- **Cookies**: Via GTM/Analytics
- **GDPR**: Tracking scripts aanwezig

## 🎯 UI Component Patterns

### Stap 1 (Welkom)
- Sidebar met progress indicator
- Rating card component
- Personal letter layout
- CTA buttons met icons

### Stap 2 (Advies)
- Product showcase (Nexus 20 kWh)
- Feature list met checkmarks
- Image gallery/carousel
- Specificaties modal trigger
- Navigation (vorige/volgende)

## 📋 Implementatieplan voor Replica

### Fase 1: Setup & Architectuur
```bash
# Project structuur
wizard-replica/
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   ├── ProgressIndicator/
│   │   ├── RatingCard/
│   │   ├── StepNavigation/
│   │   └── ProductShowcase/
│   ├── steps/
│   │   ├── Welcome.jsx
│   │   ├── Advice.jsx
│   │   └── [andere stappen]
│   ├── hooks/
│   │   └── useWizardState.js
│   └── styles/
│       └── tokens.js
```

### Fase 2: State Management
```javascript
// Context voor wizard state
const WizardContext = {
  currentStep: 2,
  totalSteps: 6,
  progress: 28,
  customerData: {
    name: "meneer Ketelaars",
    advisor: "Mark Vuursteen",
    location: "Woudrichem"
  },
  productAdvice: {
    product: "Nexus 20 kWh",
    features: [...],
    specifications: {...}
  }
}
```

### Fase 3: Routing Strategy
```javascript
// React Router setup
const routes = [
  { path: '/welkom', component: Welcome, step: 1 },
  { path: '/advies', component: Advice, step: 2 },
  { path: '/besparing', component: Savings, step: 3 },
  // etc...
]
```

### Fase 4: Component Implementation
```javascript
// Voorbeeld StepNavigation component
const StepNavigation = ({ currentStep, steps }) => {
  return (
    <nav className="step-nav">
      {steps.map((step, index) => (
        <StepItem 
          key={index}
          number={index + 1}
          label={step.label}
          active={currentStep === index + 1}
          completed={currentStep > index + 1}
        />
      ))}
    </nav>
  )
}
```

### Fase 5: Styling Approach
- **Optie 1**: styled-components (zoals origineel)
- **Optie 2**: Tailwind CSS (moderne aanpak)
- **Optie 3**: CSS Modules (voor isolatie)

## 🚀 Deployment Strategie

### Development
```bash
npm create vite@latest wizard-app -- --template react
npm install styled-components react-router-dom
npm install -D tailwindcss postcss autoprefixer
```

### Production
- **Hosting**: Vercel/Netlify (static)
- **API Mock**: JSON Server of MSW
- **Analytics**: Optioneel GA4 integratie

## 📝 Conclusie

De applicatie is een **server-side rendered multi-page applicatie** met:
- Minimale client-side JavaScript
- styled-components voor styling
- Vite als build tool
- Geen zware frontend framework (mogelijk vanilla JS)
- Focus op performance en simpliciteit

Voor een replica is de beste aanpak:
1. **React + React Router** voor de wizard flow
2. **styled-components** voor consistente styling
3. **Context API** voor state management
4. **Vite** als build tool
5. **Mock data** voor de verschillende stappen