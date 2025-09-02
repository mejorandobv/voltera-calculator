# Voltera Energy Solutions - Project Documentation

## 🌟 Project Overview

Welcome to the Voltera Energy Solutions repository. This comprehensive platform provides cutting-edge tools for sustainable energy calculations, battery system configurations, and financial planning for renewable energy investments.

## 🎯 Project Goals

- Provide accurate energy savings calculations for residential and commercial properties
- Offer transparent battery system comparisons and configurations
- Enable informed decision-making through detailed financial analysis
- Streamline the checkout process for energy solutions
- Support the transition to sustainable energy with user-friendly tools

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                   User Interface Layer                   │
├─────────────────────────────────────────────────────────┤
│  Voltera Calculator │ Battery Checkout │ Wizard Flow    │
├─────────────────────────────────────────────────────────┤
│                   Business Logic Layer                   │
├─────────────────────────────────────────────────────────┤
│  Energy Calculations │ Financial Analysis │ Validations │
├─────────────────────────────────────────────────────────┤
│                   Integration Layer                      │
├─────────────────────────────────────────────────────────┤
│        N8N Webhooks │ LocalStorage │ API Services       │
└─────────────────────────────────────────────────────────┘
```

## 📦 Core Modules

### 1. Voltera Calculator (`voltera-calculator.html`)
The main energy savings calculator with comprehensive features:

**Key Features:**
- 🏠 **Property Analysis**: Household size, energy consumption patterns
- ☀️ **Solar Panel Calculator**: Custom configurations with efficiency calculations
- 🔥 **Heat Pump Analysis**: Gas usage optimization and savings projections
- 🔋 **Battery Storage**: Capacity planning and ROI calculations
- 💰 **Financial Planning**: Loan terms, interest rates, payback periods
- 📧 **Automated Reporting**: N8N webhook integration for email generation

**Technical Specifications:**
- Single-page application (SPA)
- Vanilla JavaScript for zero dependencies
- Real-time calculation engine
- LocalStorage for data persistence
- Responsive CSS Grid/Flexbox layout

### 2. Battery Checkout System (`/voltera-battery-checkout`)
An intuitive 8-step checkout flow for battery systems:

**Step-by-Step Process:**
1. **Introduction** - Welcome and overview
2. **Energy Profile** - Consumption analysis
3. **Optimal Situation** - Best configuration recommendations
4. **Battery Comparison** - Side-by-side analysis
5. **Energy System** - Complete system configuration
6. **Service Guarantees** - Warranty and support options
7. **Finance Options** - Payment plans and leasing
8. **Confirmation** - Order review and submission

**Technologies:**
- React with TypeScript
- Component-based architecture
- State management with React hooks
- Tailwind CSS for styling
- Mobile-first responsive design

### 3. Wizard Flow Module (`/rebuild`)
Reusable wizard components for multi-step processes:

**Components:**
- `WizardFlowV2.jsx` - Flow controller with progress tracking
- `StepGuarantee.jsx` - Service guarantee configurations
- `StepAdvice.jsx` - Personalized recommendations
- `StepWelcome.jsx` - User onboarding
- Additional step components for modular flows

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git for version control
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/mejorandobv/voltera-calculator.git

# 2. Navigate to project directory
cd voltera-calculator

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# Navigate to http://localhost:3000
```

### Quick Start - Calculator Only

```bash
# For quick calculator testing
python -m http.server 8000
# Open http://localhost:8000/voltera-calculator.html
```

## 🛠️ Development Guide

### Project Structure
```
voltera-calculator/
├── 📁 voltera-battery-checkout/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   └── 📁 thuisbatterij/
│   │   │       ├── Step1-Intro.tsx
│   │   │       ├── Step2-EnergyProfile.tsx
│   │   │       ├── Step3-OptimalSituation.tsx
│   │   │       ├── Step4-BatteryComparison.tsx
│   │   │       ├── Step5-EnergySystem.tsx
│   │   │       ├── Step6-ServiceGuarantees.tsx
│   │   │       ├── Step7-FinanceOptions.tsx
│   │   │       ├── Step8-Confirmation.tsx
│   │   │       ├── WebHero.tsx
│   │   │       └── SpecsPanel.tsx
│   │   └── 📁 styles/
│   └── 📁 public/
│       └── 📁 images/
├── 📁 rebuild/
│   └── 📁 src/
│       ├── 📁 components/
│       ├── 📁 hooks/
│       ├── 📁 logic/
│       ├── 📁 services/
│       ├── WizardFlowV2.jsx
│       └── [step components]
├── 📁 voltera-energy-calculator/
├── 📄 voltera-calculator.html
├── 📄 package.json
├── 📄 package-lock.json
└── 📄 PROJECT_README.md
```

### Development Scripts

```json
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "test": "jest --coverage",
    "lint": "eslint src/**/*.{js,jsx,ts,tsx}",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,css}"
  }
}
```

### Code Style Guidelines

- **JavaScript/TypeScript**: ESLint with Airbnb configuration
- **CSS**: BEM methodology with Tailwind utilities
- **React**: Functional components with hooks
- **Git**: Conventional commits specification

## 🔧 Configuration

### Environment Variables
```env
# N8N Webhook Configuration
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/
VITE_N8N_API_KEY=your-api-key

# Application Settings
VITE_APP_ENV=development
VITE_API_BASE_URL=https://api.voltera.nl
```

### N8N Integration Setup
1. Configure webhook URL in environment variables
2. Set up N8N workflow with email template
3. Map calculator fields to email parameters
4. Test webhook trigger with sample data

## 📊 Features in Detail

### Energy Calculations Engine
- **Solar Panel ROI**: Calculate returns based on panel efficiency, location, and consumption
- **Heat Pump Savings**: Compare gas vs. electric heating costs
- **Battery Optimization**: Determine optimal storage capacity
- **Grid Independence**: Calculate self-sufficiency percentage

### Financial Analysis Tools
- **Loan Calculator**: Monthly payments with various interest rates
- **Payback Period**: Time to recover investment
- **Total Cost of Ownership**: Complete financial picture
- **Subsidy Integration**: Include government incentives

### User Experience Features
- **Progressive Disclosure**: Show relevant options based on user input
- **Real-time Validation**: Instant feedback on form inputs
- **Data Persistence**: Save and resume calculations
- **Multi-language Support**: Dutch and English interfaces

## 🧪 Testing

### Test Coverage
- Unit tests for calculation functions
- Integration tests for API endpoints
- E2E tests with Playwright
- Performance testing for large datasets

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e

# Run specific test suite
npm test -- --testPathPattern=calculator
```

## 📈 Performance Optimization

- **Code Splitting**: Lazy loading for checkout components
- **Image Optimization**: WebP format with fallbacks
- **Caching Strategy**: LocalStorage for user data
- **Bundle Size**: < 200KB for initial load
- **Lighthouse Score**: 95+ performance rating

## 🔒 Security Considerations

- Input validation and sanitization
- XSS protection for user inputs
- Secure webhook communication
- No sensitive data in LocalStorage
- Regular dependency updates

## 📚 Documentation

### API Documentation
See `/docs/api` for detailed API specifications

### Component Documentation
Component-level documentation using JSDoc and TypeScript

### User Guides
Available in `/docs/user-guides` (Dutch and English)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

### Commit Convention
```
feat: Add battery comparison feature
fix: Correct calculation in solar panel ROI
docs: Update installation instructions
style: Format code with prettier
test: Add unit tests for energy calculations
```

## 📝 Changelog

### Version 2.0.0 (January 2025)
- ✨ Complete 8-step battery checkout flow
- 🎨 UI/UX improvements across all modules
- 🚀 Performance optimizations
- 🐛 Bug fixes in calculation engine
- 📱 Enhanced mobile responsiveness

### Version 1.5.0 (December 2024)
- 💰 Financial calculator enhancements
- 🔌 N8N webhook integration
- 📊 Advanced reporting features

## 🆘 Support

### Getting Help
- 📧 Email: support@mejorando.nl
- 📖 Documentation: `/docs`
- 🐛 Issues: GitHub Issues
- 💬 Discord: Join our community

### Troubleshooting
Common issues and solutions in `/docs/troubleshooting.md`

## 📜 License

Copyright © 2025 Mejorando BV. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is strictly prohibited.

## 👥 Team

**Mejorando BV Development Team**
- Lead Development
- UI/UX Design
- Quality Assurance
- Project Management

## 🙏 Acknowledgments

- Built with modern web technologies
- Tested with Playwright automation
- Designed for sustainability and scalability
- Developed with ❤️ for a greener future

---

📅 **Last Updated**: January 2025  
🏷️ **Version**: 2.0.0  
🏢 **Organization**: Mejorando BV  
🌍 **Website**: [www.voltera.nl](https://www.voltera.nl)