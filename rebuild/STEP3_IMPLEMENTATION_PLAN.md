# 📋 Implementatieplan Stap 3: Besparing

## 🎯 Overzicht
Stap 3 toont de financiële voordelen van de thuisbatterij met een tab-interface voor verschillende energiecontracten.

## 🔍 Geanalyseerde Componenten

### 1. Tab Interface
- **2 tabs**: "Overige energiecontracten" en "Zonneplan Energie"
- **Actieve tab styling**: `aria-selected:bg-white aria-selected:text-midnight-black`
- **Inactieve tab styling**: `bg-horizon-gray text-slate-gray`
- **Tab classes**: `font-bold font-aeonik text-center py-4`

### 2. Besparingsbedrag Component
```html
<dl>
  <dt>Geschatte besparing per jaar tot</dt>
  <dd class="text-6xl text-kelly-green">€ 200</dd>
</dl>
```

### 3. Voordelen Lijst
- ✓ Gebruik je eigen zonnestroom zelf
- ✓ Voorkom terugleverkosten  
- ✓ Klaar voor afschaffing salderen

### 4. Informatie Artikelen
- "Bespaar met gebruik eigen zonnestroom" (met uitklap)
- "Ontvang aanvullende verdiensten" (disabled state)

## 📝 Exacte Implementatiestappen

### Stap 1: Analyseer Volledige DOM Structuur
```javascript
// Extract exact classes and structure
- Tab container structuur
- Savings display component
- Benefits checklist layout
- Article cards met buttons
```

### Stap 2: Maak StepSavings Component
```jsx
const StepSavings = ({ wizardData }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div>
      {/* Tab Navigation */}
      <div role="tablist" className="grid grid-cols-2">
        {/* Tabs */}
      </div>
      
      {/* Tab Content */}
      <div role="tabpanel">
        {/* Savings Amount */}
        {/* Benefits List */}
        {/* Information Articles */}
      </div>
    </div>
  );
};
```

### Stap 3: Implementeer Tab Switching
```jsx
// Tab switching logic
const tabs = [
  { 
    name: "Overige energiecontracten",
    savings: "€ 200",
    benefits: [...] 
  },
  { 
    name: "Zonneplan Energie",
    savings: "€ 450",
    benefits: [...]
  }
];
```

### Stap 4: Voeg Nieuwe Classes Toe
```css
/* New utility classes discovered */
.text-6xl { font-size: 3.75rem; }
.text-kelly-green { color: #00AA65; }
.bg-horizon-gray { background-color: #f3f4f6; }
.bg-unnoted-gray { background-color: #9ca3af; }
.border-kind-gray { border-color: #e5e7eb; }

/* Aria selectors */
.aria-selected\:bg-white[aria-selected="true"] {
  background-color: white;
}
.aria-selected\:text-midnight-black[aria-selected="true"] {
  color: #1a1a1a;
}
```

### Stap 5: Implementeer Accordion/Collapse
```jsx
const [expandedArticle, setExpandedArticle] = useState(null);

const toggleArticle = (index) => {
  setExpandedArticle(expandedArticle === index ? null : index);
};
```

### Stap 6: Update WizardFlowV2.jsx
```jsx
// Add to main component
{currentStep === 3 && <StepSavings wizardData={wizardData} />}

// Update progress to 45% for step 3
```

### Stap 7: Test Responsiveness
- Mobile: Single column layout
- Desktop: Maintain tab structure
- Print styles: Hide interactive elements

## 🎨 Design Tokens voor Stap 3

### Nieuwe Kleuren
- `kelly-green`: #00AA65 (hoofdkleur besparing)
- `horizon-gray`: #f3f4f6 (tab achtergrond)
- `unnoted-gray`: #9ca3af (disabled state)
- `kind-gray`: #e5e7eb (borders)

### Typography
- Besparingsbedrag: `text-6xl` (3.75rem)
- Tab labels: `font-bold font-aeonik`
- Body text: `text-base` (1rem)

### Spacing
- Tab padding: `py-4` (1rem vertical)
- Content gap: `gap-6` (1.5rem)
- Article gap: `md:gap-8` (2rem op desktop)

## ✅ Checklist

- [ ] Extract exacte HTML/CSS van stap 3
- [ ] Creëer StepSavings component
- [ ] Implementeer tab switching logica
- [ ] Voeg savings display component toe
- [ ] Bouw benefits checklist
- [ ] Maak article cards met collapse
- [ ] Update CSS met nieuwe utility classes
- [ ] Test tab keyboard navigation
- [ ] Implementeer ARIA attributes correct
- [ ] Test responsive behavior
- [ ] Voeg smooth transitions toe
- [ ] Update progress indicator (45%)

## 🚀 Volgende Acties

1. **Direct uitvoeren**: Fetch complete HTML structure van stap 3
2. **Component maken**: StepSavings.jsx met exacte structuur
3. **Styling toevoegen**: Nieuwe utility classes in CSS
4. **Integreren**: Toevoegen aan WizardFlowV2
5. **Testen**: Tab switching en responsive gedrag

## 💡 Aandachtspunten

- Tab component moet keyboard accessible zijn (Arrow keys)
- Gebruik `aria-selected`, `role="tab"`, `role="tabpanel"`
- Disabled state voor tweede article ("Ontvang aanvullende verdiensten")
- Smooth transitions bij tab switching
- Behoud exacte font sizes (vooral text-6xl voor bedrag)
- Match exact de groene kleur voor besparingsbedrag

## 🔄 State Management

```javascript
const [savingsData] = useState({
  tabs: [
    {
      id: 'overige',
      name: 'Overige energiecontracten',
      savingsAmount: 200,
      benefits: [
        'Gebruik je eigen zonnestroom zelf',
        'Voorkom terugleverkosten',
        'Klaar voor afschaffing salderen'
      ],
      articles: [
        {
          title: 'Bespaar met gebruik eigen zonnestroom',
          content: '...',
          enabled: true
        },
        {
          title: 'Ontvang aanvullende verdiensten',
          content: '...',
          enabled: false
        }
      ]
    },
    {
      id: 'zonneplan',
      name: 'Zonneplan Energie',
      savingsAmount: 450,
      benefits: [
        'Extra voordeel met Zonneplan tarief',
        'Automatische optimalisatie',
        'Geen verborgen kosten'
      ],
      articles: [...]
    }
  ]
});
```

## 📊 Geschatte Tijd

- HTML/CSS extractie: 15 min
- Component development: 30 min
- Tab logic: 20 min
- Styling & transitions: 20 min
- Testing & refinement: 15 min
- **Totaal: ~1.5 uur**