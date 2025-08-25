# DOM Structure Analysis - Zonneplan Wizard

## Discovered CSS Classes & Structure

### Key Findings:
1. **CSS Framework**: Using Tailwind CSS with custom classes
2. **styled-components**: Classes with `sc-` prefix (e.g., `sc-dlVxhl`, `sc-ieecCq`)
3. **Responsive Breakpoints**: `container-mq:`, `lg:`, `md:`, `xl:` prefixes
4. **Custom Colors**: `kelly-green`, `midnight-black`, `slate-gray`, `horizon-gray`

## Step 1 (Welkom) - Exact Structure

### Container Layout
```css
.offer-background
.min-h-screen
.container-mq:flex
.xl:justify-center
.xl:items-center
```

### Sidebar Classes
```css
.hidden
.bg-white
.border-r
.border-border-gray
.min-w-[310px]
.z-10
.lg:block
.container-mq:rounded-lg
.shadow-content-box
```

### Progress Circle
- Uses SVG with strokeDasharray for progress animation
- Progress percentages: Step 1 = 12%, Step 2 = 28%

### Navigation Items
```css
/* Active step */
.bg-kelly-green
.rounded-full
.w-8
.h-6
.text-white

/* Inactive step */
.text-slate-gray
```

### Rating Card
```css
.px-4
.lg:p-4
.lg:px-6
.text-sm
.lg:flex
.justify-between
.gap-4
.w-full
.flex-wrap
```

### Main Content
```css
.flex-1
.overflow-x-hidden
.color-slate-gray
.md:rounded-r-lg
.scrollbar-hidden
.lg:rounded-lg
.lg:shadow-content-box
.lg:bg-white
```

## Step 2 (Advies) - Exact Structure

### Image Gallery
```css
.grid
.grid-rows-[1fr_auto]
.h-full
.max-h-[500px]
.gap-4
```

### Product Cards
```css
.p-4
.lg:p-6
.border
.border-horizon-gray
.rounded-xl
```

### Feature List Items
```css
.flex
.items-start
.gap-1
```

### Button Styles
```css
/* Specifications Button */
.underline
.flex
.items-center
.gap-1
.text-midnight-black
.text-sm

/* Navigation Buttons */
.sc-hKwDye
.fRnfaO (Next)
.eJbpCd (Previous)
```

## styled-components Classes Mapping

| Class | Component | Usage |
|-------|-----------|-------|
| `sc-dlVxhl iTVFry` | Container | Main wrapper |
| `sc-ieecCq fUzLIw` | Progress Container | Progress indicator wrapper |
| `sc-dJjYzT iuhnfz` | Progress Value | Shows percentage |
| `sc-hGPBjI gsrJhR` | Step Counter | Shows "2 / 6" |
| `sc-fKVqWL fUWPFY` | Navigation List | Step navigation |
| `sc-bBHxTw` | Step Item | Individual step wrapper |
| `sc-iwjdpV` | Step Number | Step number circle |
| `sc-pVTFL dSYheH` | Star Icons | Rating stars |
| `sc-hKwDye` | Button | Primary buttons |

## Color System

```css
/* Custom Tailwind Colors */
--kelly-green: #00AA65
--midnight-black: #1a1a1a
--slate-gray: #64748b
--horizon-gray: #e5e7eb
--border-gray: #d1d5db
--friendly-gray: #6b7280
```

## Typography

```css
/* Font Families */
font-aeonik: Custom font for headings
font-sans: Default system font

/* Text Sizes */
.text-xl: 1.25rem
.text-lg: 1.125rem
.text-sm: 0.875rem
.text-xs: 0.75rem
```

## Responsive Patterns

```css
/* Container Queries */
.container-mq:flex /* Custom container query */
.container-mq:w-container
.container-mq:rounded-2xl
.container-mq:h-[880px]
.container-mq:max-h-screen

/* Breakpoints */
.lg:block /* 1024px+ */
.md:grid-cols-2 /* 768px+ */
.xl:justify-center /* 1280px+ */
```

## Hidden Elements

1. **Mobile Navigation**: `.lg:hidden` - Shows on mobile, hidden on desktop
2. **Print Styles**: `.print:hidden` - Hidden when printing
3. **SR-Only**: `.sr-only` - Screen reader only content
4. **Sidebar on Mobile**: `.hidden.lg:block` - Hidden on mobile, shown on desktop

## Key Structural Patterns

1. **Two-column layout**: Sidebar (310px) + Main content (flex-1)
2. **Fixed height container**: `container-mq:h-[880px]`
3. **Border radius patterns**: `rounded-xl`, `rounded-lg`, `rounded-full`
4. **Shadow patterns**: `shadow-content-box`
5. **Scrollbar hiding**: `.scrollbar-hidden`

## Implementation Notes for V2

1. Use exact Tailwind classes found in analysis
2. Implement styled-components classes as CSS modules or Tailwind @apply
3. Match exact spacing: `p-4`, `lg:p-6`, `gap-4`, etc.
4. Preserve responsive behavior with container queries
5. Use same SVG structure for progress circle
6. Match exact border and shadow styles