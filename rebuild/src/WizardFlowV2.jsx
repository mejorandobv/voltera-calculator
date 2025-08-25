import React, { useState, useRef, useEffect } from 'react';
import './WizardFlowV2.css';
import StepSavings from './StepSavings';
import StepGuarantee from './StepGuarantee';
import StepSmartSystem from './StepSmartSystem';
import StepYourOffer from './StepYourOffer';

const WizardFlowV2 = () => {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1
  const [wizardData] = useState({
    customerName: 'meneer Ketelaars',
    advisorName: 'Daan de Zon',
    advisorPhone: '085 0474 947',
    advisorEmail: 'daan@voltera.nl',
    location: 'Woudrichem',
    address: 'Steurstraat 44, Woudrichem',
    rating: 9.5,
    ratingStars: 4.75,
    reviewCount: 0,
  });

  // Touch handling for swipe gestures
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const contentRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    if (currentStep < steps.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentStep(currentStep + 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentStep(currentStep - 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleStepClick = (stepNumber) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentStep(stepNumber);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Touch event handlers for swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentStep < steps.length) {
      handleNext();
    }
    if (isRightSwipe && currentStep > 1) {
      handlePrevious();
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse event handlers for desktop testing
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (touchStartX.current !== null) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  return (
    <div className="offer-background min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-row flex-nowrap relative w-full max-w-[1400px] h-[900px] overflow-hidden rounded-2xl gap-4">
        
        {/* Sidebar */}
        <div className="hidden bg-white border-r border-border-gray min-w-[310px] h-full z-10 lg:flex lg:flex-col shadow-content-box rounded-l-xl">
          <div className="flex justify-center">
            {/* Logo */}
            <img 
              src="/voltera-logo.png" 
              alt="Voltera Logo" 
              className="max-w-[150px] my-8 block"
            />
          </div>

          {/* Progress Circle */}
          <div className="sc-ieecCq fUzLIw">
            <div className="sc-dJjYzT iuhnfz">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
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
                  <span className="text-2xl font-bold">{progressPercentage}</span>
                  <span className="text-xs">%</span>
                </div>
              </div>
            </div>
            <span className="sc-hGPBjI gsrJhR">{currentStep} / 6</span>
          </div>

          {/* Navigation Steps */}
          <ul className="sc-fKVqWL fUWPFY">
            {steps.map((step) => (
              <li key={step.number}>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleStepClick(step.number);
                  }}
                  className={currentStep === step.number ? 'active' : ''}
                >
                  <div className={`sc-bBHxTw ${currentStep === step.number ? 'gOYSjO' : 'ccJKFV'}`}>
                    <div className={`sc-iwjdpV ${currentStep === step.number ? 'kFmEXh' : 'PzFou'}`}>
                      <div className={currentStep === step.number ? 'bg-kelly-green rounded-full w-8 h-6 text-sm font-bold text-white font-aeonik flex items-center justify-center' : ''}>
                        {currentStep > step.number ? '✓' : step.number}
                      </div>
                    </div>
                    <span>{step.text}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info and Print Button - Only on Step 1 */}
          {currentStep === 1 && (
            <div className="mt-auto pb-6 w-full flex flex-col items-center">
              <div className="text-center text-friendly-gray text-sm mb-6">
                <div>Contact</div>
                <a href={`tel:${wizardData.advisorPhone}`} className="font-bold text-lg">
                  {wizardData.advisorPhone}
                </a>
                <div>{wizardData.advisorName}</div>
              </div>
              
              {/* Print Button - At the very bottom */}
              <div className="px-6 w-full">
                <button 
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-midnight-black font-medium"
                >
                  <img src="/printer-icon.svg" alt="" className="w-5 h-5" />
                  <span>Afdrukken</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-white rounded-r-xl shadow-content-box">
          
          {/* Mobile Header - Fixed Height */}
          <div className="lg:hidden flex justify-between py-4 border-b border-horizon-gray px-4 flex-shrink-0">
            <button className="flex lg:hidden items-center gap-1">
              <span className="font-bold text-midnight-black">{wizardData.rating}</span>
            </button>
            <div className="flex gap-1">
              <span className="font-bold text-midnight-black">{currentStep}</span>
              <span className="text-slate-gray">/ 6</span>
            </div>
          </div>

          {/* Rating Card - Fixed Height */}
          <div className="flex-shrink-0">
            <button className="px-4 lg:p-4 lg:px-6 text-sm lg:flex items-center justify-between gap-4 w-full flex-wrap min-h-[60px] lg:min-h-[80px]">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img 
                      key={i} 
                      src={i < 4 ? "/star-filled.svg" : "/star-three-quarter.svg"} 
                      alt="star" 
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <span className="font-bold text-midnight-black text-xl">{wizardData.rating}</span>
                <div className="text-slate-gray">
                  <span>gemiddeld op Klantenvertellen</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#919294]">
                <img src="/location-icon.svg" alt="location" className="w-4" />
                <span>{wizardData.address}</span>
              </div>
            </button>
          </div>

          {/* Step Content - Flex Grow with Overflow */}
          <div 
            className="flex-1 overflow-y-auto scrollbar-hidden touch-pan-y relative"
            ref={contentRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { touchStartX.current = null; touchEndX.current = null; }}
          >
            {/* Swipe Indicator for Mobile */}
            <div className="lg:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index + 1 === currentStep 
                      ? 'w-8 bg-kelly-green' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="px-4 lg:px-16 py-8 min-h-full flex flex-col">
              <div className={`flex-grow transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                {currentStep === 1 && <StepWelcome wizardData={wizardData} />}
                {currentStep === 2 && <StepAdvice wizardData={wizardData} />}
                {currentStep === 3 && <StepSavings wizardData={wizardData} />}
                {currentStep === 4 && <StepGuarantee wizardData={wizardData} />}
                {currentStep === 5 && <StepSmartSystem wizardData={wizardData} />}
                {currentStep === 6 && <StepYourOffer wizardData={wizardData} />}
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Fixed at Bottom */}
          <div className="sc-jRQBWg kxmAHv flex-shrink-0">
            <div className="sc-hiCibw hgyAfC print:hidden">
              <div className="flex gap-4">
                {currentStep > 1 && (
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePrevious();
                    }}
                    className="flex-1"
                  >
                    <button className="sc-hKwDye eJbpCd justify-center font-aeonik w-full">
                      <img src="/arrow-left.svg" alt="arrow" className="w-5 h-5" />
                      <span>Vorige</span>
                    </button>
                  </a>
                )}
                {currentStep < steps.length && (
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNext();
                    }}
                    className="flex-1 mx-auto max-w-[395px] lg:mx-0 lg:max-w-full"
                  >
                    <button className="sc-hKwDye fRnfaO justify-center font-aeonik w-full">
                      <span>Volgende</span>
                      <img src="/arrow-right.svg" alt="arrow" className="w-5 h-5" />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 1: Welcome Component
const StepWelcome = ({ wizardData }) => (
  <div className="grid lg:grid-cols-3 gap-10">
    <div className="lg:col-span-1">
      <img 
        src="/advisor-placeholder.jpg" 
        alt="Advisor" 
        className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[auto] lg:h-full object-cover bg-gray-200 rounded-xl"
      />
    </div>
    
    <div className="lg:col-span-2">
      <div className="sc-gWXbKe dICRMI">
        <h2 className="font-aeonik text-xl mb-6 lg:text-2xl xl:text-3xl font-bold leading-tight">
          Beste {wizardData.customerName},
        </h2>
        
        <div className="sc-cCcXHH bYvpIT">
          <p className="mb-6">
            Op basis van uw situatie heb ik een voorstel opgesteld voor een thuisbatterij die 
            naadloos aansluit op uw zonnepanelensysteem en energieverbruik. Zo bespaart u slim 
            én profiteert u van extra opbrengsten.
          </p>

          <p className="mb-6">
            Klik op 'Volgende' om te zien welke thuisbatterij het beste past bij uw situatie.
          </p>

          <p className="mb-6">
            Vragen of iets wijzigen?{' '}
            <a href={`tel:${wizardData.advisorPhone}`} className="underline text-midnight-black visited:text-midnight-black font-bold">
              Bel
            </a>{' '}
            of{' '}
            <a href={`mailto:${wizardData.advisorEmail}`} className="underline text-midnight-black visited:text-midnight-black font-bold">
              mail
            </a>{' '}
            mij gerust.
          </p>

          <div className="mt-8">
            <p>Met vriendelijke groet,</p>
            <b className="block mt-5">{wizardData.advisorName}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Step 2: Advice Component
const StepAdvice = ({ wizardData }) => {
  const productFeatures = [
    'Hoge opslagcapaciteit van 20 kWh',
    'Veilige en duurzame LFP-technologie',
    'Krachtige 10 kW laad- en ontlaadcapaciteit',
    'Zeer hoge systeemefficiëntie (97,5%)',
    'Compact en stijlvol design'
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Image Gallery */}
      <figure className="grid grid-rows-[1fr_auto] h-full max-h-[500px] gap-4">
        <img 
          src="/product-image.jpg" 
          alt="Uw dak (met zonnepanelen)" 
          className="w-full h-full object-cover bg-gray-300 rounded-xl"
        />
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map(i => (
            <button key={i} className="aspect-[93/72] overflow-hidden rounded">
              <img 
                src={`/thumbnail-${i}.jpg`} 
                alt={`Thumbnail ${i}`} 
                className="w-full h-full object-cover bg-gray-200"
              />
            </button>
          ))}
        </div>
        <figcaption className="sr-only">Details van de installatie in beeld</figcaption>
      </figure>

      {/* Product Details */}
      <div>
        <h1 className="text-xl mb-8 font-bold lg:text-2xl xl:text-3xl print:text-xl">
          Het advies voor uw situatie
        </h1>

        <ol className="flex flex-col gap-5 mb-5">
          <li className="p-4 lg:p-6 border border-horizon-gray rounded-xl">
            <h3 className="text-lg font-bold mb-5">Nexus 20 kWh thuisbatterij</h3>
            <ul className="flex flex-col gap-2 m-0">
              {productFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-1">
                  <img src="/checkmark.svg" alt="check" className="w-5 h-5 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </li>

          <li className="p-4 lg:p-6 border border-horizon-gray rounded-xl">
            <h3 className="text-lg font-bold mb-2">Werkt slim samen met uw zonnepanelensysteem</h3>
            <ul className="flex flex-col gap-2 m-0">
              <li className="flex items-start gap-1">
                <img src="/checkmark.svg" alt="check" className="w-5 h-5 mt-0.5" />
                <span>Stabiele 4G-verbinding zonder gedoe</span>
              </li>
            </ul>
          </li>
        </ol>

        <button className="underline flex items-center gap-1 text-midnight-black text-sm print:hidden">
          <img src="/document-icon.svg" alt="document" className="w-5 h-5" />
          <span>Bekijk uitgebreide specificaties</span>
        </button>
      </div>
    </div>
  );
};

export default WizardFlowV2;