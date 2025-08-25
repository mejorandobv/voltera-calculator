import React, { useState } from 'react';
import brandLogo from './assets/brand-logo-placeholder.svg';
import starIcon from './assets/star-icon.svg';
import arrowRight from './assets/arrow-right.svg';

const WizardFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    customerName: 'meneer Ketelaars',
    advisorName: 'Mark Vuursteen',
    advisorPhone: '088 020 3002',
    advisorEmail: 'adviseur@example.com',
    location: 'Woudrichem',
    address: 'Steurstraat 44, Woudrichem',
    rating: 9.4,
    reviewCount: 1166,
    selectedProduct: null
  });

  const steps = [
    { number: 1, text: 'Welkom', progress: 12 },
    { number: 2, text: 'Advies', progress: 28 },
    { number: 3, text: 'Besparing', progress: 45 },
    { number: 4, text: 'Garantie', progress: 62 },
    { number: 5, text: 'Slim systeem', progress: 79 },
    { number: 6, text: 'Uw aanbod', progress: 100 },
  ];

  const progressPercentage = steps[currentStep - 1].progress;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block w-[310px] bg-white border-r border-gray-200">
        <div className="p-4">
          {/* Logo */}
          <div className="flex justify-center py-8">
            <img src={brandLogo} alt="Brand Logo" className="max-w-[150px]" />
          </div>

          {/* Progress Circle */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="#E9ECEF"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="#00AA65"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${progressPercentage * 2.89} 289`}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-800">{progressPercentage}</span>
                <span className="text-sm text-gray-600">%</span>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mb-8">
            {currentStep} / {steps.length}
          </div>

          {/* Navigation Steps */}
          <nav>
            <ul className="space-y-0">
              {steps.map((step) => (
                <li key={step.number}>
                  <button
                    onClick={() => handleStepClick(step.number)}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
                      currentStep === step.number
                        ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                        : currentStep > step.number
                        ? 'text-green-600 hover:bg-gray-50 border-l-4 border-transparent'
                        : 'text-gray-400 cursor-not-allowed border-l-4 border-transparent'
                    }`}
                    disabled={currentStep < step.number}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep === step.number
                          ? 'bg-green-600 text-white'
                          : currentStep > step.number
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {currentStep > step.number ? '✓' : step.number}
                    </div>
                    <span className="font-medium">{step.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Contact</p>
              <a href={`tel:${wizardData.advisorPhone}`} className="text-green-600 font-semibold">
                {wizardData.advisorPhone}
              </a>
              <p className="text-sm text-gray-600 mt-1">{wizardData.advisorName}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Rating Card - Show on all steps */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={starIcon} alt="Star" className="w-3 h-3" />
                  ))}
                  <img src={starIcon} alt="Half Star" className="w-3 h-3 opacity-50" />
                </div>
                <span className="text-2xl font-bold text-gray-800">{wizardData.rating}</span>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{wizardData.reviewCount} beoordelingen</span> in {wizardData.location}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{wizardData.address}</span>
              </div>
            </div>
          </div>

          {/* Step Content */}
          {currentStep === 1 && (
            <StepWelcome wizardData={wizardData} />
          )}
          
          {currentStep === 2 && (
            <StepAdvice wizardData={wizardData} setWizardData={setWizardData} />
          )}

          {currentStep >= 3 && (
            <div className="text-center py-20 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Stap {currentStep}: {steps[currentStep - 1].text}
              </h2>
              <p className="text-gray-600">
                Deze stap wordt nog geïmplementeerd...
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex gap-4 justify-between max-w-3xl mx-auto">
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Vorige</span>
              </button>
            )}
            
            {currentStep < steps.length && (
              <button
                onClick={handleNext}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <span>Volgende</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

// Step 1: Welcome Component
const StepWelcome = ({ wizardData }) => (
  <div className="grid lg:grid-cols-3 gap-10">
    {/* Advisor Image */}
    <div className="lg:col-span-1">
      <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <svg className="w-32 h-32 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <p>Advisor Photo</p>
        </div>
      </div>
    </div>

    {/* Welcome Letter */}
    <div className="lg:col-span-2">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Beste {wizardData.customerName},
        </h2>
        
        <p className="text-gray-600 mb-6">
          Op basis van uw situatie heb ik een voorstel opgesteld voor een thuisbatterij die 
          naadloos aansluit op uw zonnepanelensysteem en energieverbruik. Zo bespaart u slim 
          én profiteert u van extra opbrengsten.
        </p>

        <p className="text-gray-600 mb-6">
          Klik op 'Volgende' om te zien welke thuisbatterij het beste past bij uw situatie.
        </p>

        <p className="text-gray-600 mb-6">
          Vragen of iets wijzigen?{' '}
          <a href={`tel:${wizardData.advisorPhone}`} className="text-green-600 hover:underline">
            Bel
          </a>{' '}
          of{' '}
          <a href={`mailto:${wizardData.advisorEmail}`} className="text-green-600 hover:underline">
            mail
          </a>{' '}
          mij gerust.
        </p>

        <div className="mt-8">
          <p className="text-gray-600">Met vriendelijke groet,</p>
          <p className="text-xl font-semibold text-gray-800 mt-2">{wizardData.advisorName}</p>
        </div>
      </div>
    </div>
  </div>
);

// Step 2: Advice Component
const StepAdvice = ({ wizardData, setWizardData }) => {
  const productFeatures = [
    'Hoge opslagcapaciteit van 20 kWh',
    'Veilige en duurzame LFP-technologie',
    'Krachtige 10 kW laad- en ontlaadcapaciteit',
    'Zeer hoge systeemefficiëntie (97,5%)',
    'Compact en stijlvol design'
  ];

  return (
    <div>
      {/* Product Image Gallery */}
      <div className="mb-8 bg-gray-100 rounded-lg p-8">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500">Product Afbeelding</span>
            </div>
            <p className="text-sm text-gray-500">Details van de installatie in beeld</p>
          </div>
        </div>
      </div>

      {/* Product Advice Section */}
      <div className="bg-white rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Het advies voor uw situatie
        </h1>

        <div className="space-y-8">
          {/* Product Card */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Nexus 20 kWh thuisbatterij
            </h3>
            
            <ul className="space-y-3">
              {productFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Smart System Integration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Werkt slim samen met uw zonnepanelensysteem
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Stabiele 4G-verbinding zonder gedoe</span>
              </li>
            </ul>
          </div>

          {/* Specifications Button */}
          <button className="w-full py-3 px-6 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Bekijk uitgebreide specificaties</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WizardFlow;