# 📋 Pop-up Implementatieplan voor Bevestiging Aanbod

## 🎯 Overzicht
Implementatie van twee verschillende pop-ups voor de "Direct bestellen" en "Leningaanvraag starten" knoppen in stap 6 (Uw aanbod).

## 🔍 Geanalyseerde Pop-up Structuur

### Gemeenschappelijke Elementen (Beide Pop-ups)
1. **Overlay**: Donkere achtergrond (backdrop) die de hele pagina bedekt
2. **Modal Container**: Witte centrale container met afgeronde hoeken
3. **Sluiten Knop**: X-knop rechtsboven met "Sluiten" label
4. **Titel**: "Bevestig uw aanbod"
5. **Checklist met voorwaarden**:
   - ✓ Uw systeem geeft mogelijk minder opbrengst...
   - ✓ Aanmelding bij uw netbeheerder
   - ✓ Geldigheid tot datum
6. **Algemene voorwaarden link**
7. **Checkbox voor akkoord**
8. **Bevestigen knop** (groen, disabled tot checkbox aangevinkt)

### Verschillen tussen Pop-ups
- **Tab indicator**: "Zonder lening" vs "Met lening" bovenaan
- **Context**: Behoud van de geselecteerde tab context

## 📐 Design Specificaties

### Layout
```
┌──────────────────────────────────────┐
│         [Tab: Met/Zonder lening]      │
│                                       │
│         Bevestig uw aanbod    [X]    │
│  ┌──────────────────────────────┐   │
│  │                                │   │
│  │    ✓ Voorwaarde 1              │   │
│  │    ✓ Voorwaarde 2              │   │
│  │    ✓ Voorwaarde 3              │   │
│  │                                │   │
│  │    Algemene voorwaarden link   │   │
│  │                                │   │
│  │    [ ] Ik ga akkoord...        │   │
│  │                                │   │
│  │    [====Bevestigen====]        │   │
│  └──────────────────────────────┐   │
└──────────────────────────────────────┘
```

### Kleuren & Styling
- **Overlay**: rgba(0, 0, 0, 0.5) - semi-transparant zwart
- **Modal background**: #FFFFFF
- **Groene accenten**: #00AA65 (kelly-green)
- **Tekst**: #1a1a1a (midnight-black)
- **Disabled state**: #9ca3af (gray)
- **Border radius**: 16px voor modal
- **Shadow**: box-shadow voor depth effect

## 🛠 Technische Implementatie

### 1. Component Structuur
```jsx
// ConfirmationModal.jsx
const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  loanType, // 'with' or 'without'
  onConfirm 
}) => {
  const [isChecked, setIsChecked] = useState(false);
  
  // Modal logic hier
};
```

### 2. State Management in StepYourOffer
```jsx
const [showConfirmModal, setShowConfirmModal] = useState(false);
const [confirmationType, setConfirmationType] = useState(null);

const handleOrderClick = (type) => {
  setConfirmationType(type);
  setShowConfirmModal(true);
};
```

### 3. CSS Classes Nodig
```css
/* Modal Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Modal Container */
.modal-container {
  background: white;
  border-radius: 16px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Animations */
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}
.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 300ms ease-out;
}
```

## 📝 Implementatie Stappen

### Stap 1: Maak ConfirmationModal Component
- [ ] Creëer nieuwe component file
- [ ] Implementeer modal structuur
- [ ] Voeg overlay en close functionaliteit toe
- [ ] Implementeer checkbox logica

### Stap 2: Update StepYourOffer Component
- [ ] Voeg modal state toe
- [ ] Update button click handlers
- [ ] Importeer en gebruik ConfirmationModal

### Stap 3: Styling Toevoegen
- [ ] Voeg modal CSS classes toe aan WizardFlowV2.css
- [ ] Implementeer responsive design
- [ ] Voeg animaties toe voor smooth open/close

### Stap 4: Toegankelijkheid
- [ ] Voeg ARIA attributes toe (role="dialog", aria-modal="true")
- [ ] Focus management (focus trap binnen modal)
- [ ] ESC key om te sluiten
- [ ] Keyboard navigation

### Stap 5: Mobile Optimalisatie
- [ ] Responsive modal sizing
- [ ] Touch-friendly buttons
- [ ] Scroll handling op kleine schermen

## ✅ Acceptatie Criteria

1. **Functioneel**:
   - Pop-up opent bij klik op "Direct bestellen" of "Leningaanvraag starten"
   - Correct tab label wordt getoond
   - Checkbox moet aangevinkt worden voordat bevestigen mogelijk is
   - Sluiten knop en overlay klik sluiten de modal

2. **Visueel**:
   - Exact dezelfde styling als origineel
   - Smooth animaties bij open/close
   - Responsive op alle schermformaten

3. **Toegankelijkheid**:
   - Keyboard navigatie werkt
   - Screen readers kunnen content lezen
   - Focus management is correct

4. **Performance**:
   - Geen layout shift bij openen
   - Smooth animaties zonder jank

## 🚀 Volgende Acties

1. **Direct**: Start met ConfirmationModal component
2. **Daarna**: Integreer in StepYourOffer
3. **Test**: Op verschillende devices en browsers
4. **Verfijn**: Animaties en toegankelijkheid

## 💡 Notities
- Gebruik React Portal voor modal rendering buiten de hoofdcomponent tree
- Overweeg gebruik van een transitie library zoals Framer Motion voor smooth animaties
- Body scroll lock wanneer modal open is
- Zorg dat de modal content scrollbaar is op kleine schermen