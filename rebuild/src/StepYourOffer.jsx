import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const StepYourOffer = ({ wizardData }) => {
  const [activeTab, setActiveTab] = useState(1); // Start with "Met lening" tab active
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmationType, setConfirmationType] = useState(null);

  const tabs = [
    {
      id: 'without-loan',
      name: 'Zonder lening',
      monthlyAmount: '€ 695,41',
      savingsAmount: '€ 126,75',
      totalAmount: '€ 8.344,90',
      description: 'Eenmalige betaling',
      ctaText: 'Bevestig aanbod',
      loanDetails: null
    },
    {
      id: 'with-loan',
      name: 'Met lening',
      monthlyAmount: '€ 82,68',
      savingsAmount: '€ 126,75',
      totalAmount: '€ 8.344,90',
      description: 'Maandbedrag',
      ctaText: 'Bevestig aanbod',
      loanDetails: 'Schatting op basis van een duurzaamheidslening met 120 maanden looptijd. Onder voorbehoud van acceptatie. Na akkoord kiest u een financiering. Het aan te vragen leenbedrag is € 8.344,90.'
    }
  ];

  const currentTab = tabs[activeTab];

  const handleOrderClick = () => {
    setConfirmationType(activeTab === 0 ? 'without' : 'with');
    setShowConfirmModal(true);
  };

  const handleConfirmOrder = () => {
    // Handle order confirmation logic here
    console.log(`Order confirmed for ${confirmationType === 'with' ? 'with loan' : 'without loan'}`);
    // You can add API calls or navigation logic here
  };

  const benefits = [
    'Besparen met zonopslag',
    'Ontvang aanvullende verdiensten',
    'All-in installatie'
  ];

  const conditions = [
    { icon: '/calendar-icon.svg', text: 'Installatie binnen 8 tot 12 weken' },
    { icon: '/lock-icon.svg', text: 'U betaalt niet meer dan is afgesproken' },
    { icon: '/payment-icon.svg', text: '100% achteraf betalen' },
    { icon: '/no-subscription-icon.svg', text: 'Geen abonnementskosten' },
    { icon: '/star-icon.svg', text: '1166 tevreden klanten in de buurt' }
  ];

  return (
    <div>
      <h1 className="mb-8 lg:text-2xl xl:text-3xl print:text-xl text-center text-3xl font-bold">
        Uw aanbod
      </h1>

      {/* Tabs */}
      <div role="tablist" className="grid grid-cols-2 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setActiveTab(index)}
            className={`p-4 font-bold text-base font-aeonik transition-colors ${
              activeTab === index
                ? 'bg-white text-midnight-black border-b-2 border-kelly-green'
                : 'bg-horizon-gray text-slate-gray hover:bg-gray-100'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        role="tabpanel"
        id={`tabpanel-${currentTab.id}`}
        className="p-6 bg-white rounded-lg border border-horizon-gray"
      >
        {/* Product Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Thuisbatterij systeem</h2>
          <p className="text-slate-gray">
            Geschatte besparing: 
            <span className="text-kelly-green font-bold ml-2">{currentTab.savingsAmount} per maand</span>
          </p>
        </div>

        {/* Benefits List */}
        <div className="mb-6">
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <img 
                  src="/checkmark-green.svg" 
                  alt="" 
                  className="w-5 h-5 flex-shrink-0"
                />
                <span className="text-slate-gray">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            className="mt-4 inline-flex items-center gap-1 text-midnight-black underline underline-offset-2 text-sm"
          >
            <img 
              src="/chevron-down.svg" 
              alt="" 
              className={`w-4 h-4 transition-transform ${showMoreInfo ? 'rotate-180' : ''}`}
            />
            <span>Meer informatie</span>
          </button>

          {showMoreInfo && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-slate-gray">
                Het systeem bestaat uit een hoogwaardige thuisbatterij met 20 kWh opslagcapaciteit, 
                complete installatie door gecertificeerde monteurs, en slimme software voor optimaal energiebeheer.
              </p>
            </div>
          )}
        </div>

        {/* Pricing Section */}
        <div className="py-6 border-t border-horizon-gray">
          <dl className="flex justify-between items-end mb-4">
            <dt className="text-slate-gray">
              {currentTab.description}
              {activeTab === 1 && <span className="block text-xs">Inclusief btw</span>}
            </dt>
            <dd className="text-3xl font-bold text-midnight-black">
              {currentTab.monthlyAmount}
            </dd>
          </dl>

          {/* Validity Notice */}
          <p className="mb-4 text-sm">
            Dit plan is nog <strong>7 dagen geldig</strong>
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleOrderClick}
            className="w-full bg-kelly-green text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-colors mb-4"
          >
            {currentTab.ctaText}
          </button>

          {/* Loan Details */}
          {currentTab.loanDetails && (
            <p className="text-xs text-slate-gray">
              {currentTab.loanDetails}
            </p>
          )}
        </div>

        {/* Best Deal Badge */}
        <div className="flex items-center justify-center gap-2 py-4 border-t border-horizon-gray">
          <img src="/badge-icon.svg" alt="" className="w-6 h-6" />
          <span className="text-sm font-bold text-kelly-green">Beste deal garantie</span>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-6">Informatie over uw aanbod</h2>

        {/* Clear Conditions */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Heldere voorwaarden</h3>
          <ul className="space-y-3" aria-label="De voorwaarden">
            {conditions.map((condition, index) => (
              <li key={index} className="flex items-center gap-3">
                <img 
                  src={condition.icon} 
                  alt="" 
                  className="w-5 h-5 flex-shrink-0"
                />
                <span className="text-slate-gray">{condition.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        loanType={confirmationType}
        onConfirm={handleConfirmOrder}
        wizardData={wizardData}
      />
    </div>
  );
};

export default StepYourOffer;