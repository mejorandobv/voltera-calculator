import React, { useState } from 'react';

const StepGuarantee = ({ wizardData }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const guaranteeItems = [
    {
      id: 'serviceplan',
      icon: '/shield-icon.svg',
      title: 'Serviceplan',
      description: 'Uitgebreide garanties door de absolute nummer 1 van Nederland.',
      buttonText: 'Uitgebreide garanties weergeven',
      expandedContent: {
        title: 'Uitgebreide garanties',
        items: [
          '10 jaar productgarantie op de thuisbatterij',
          '10 jaar prestatiegarantie (minimaal 80% capaciteit)',
          '24/7 monitoring en proactief onderhoud',
          'Gratis vervanging bij defecten',
          'Inclusief arbeidsloon en voorrijkosten'
        ]
      },
      gridClass: 'lg:col-start-1'
    },
    {
      id: 'installation',
      icon: '/tools-icon.svg',
      title: 'Vakkundige installatie',
      description: 'Binnen één dag perfect geïnstalleerd. Altijd volgens de NEN 1010-normen.',
      buttonText: 'Meer informatie weergeven',
      expandedContent: {
        title: 'Installatie details',
        items: [
          'Gecertificeerde installateurs',
          'Installatie binnen 1 werkdag',
          'Volgens alle veiligheidsnormen (NEN 1010)',
          'Inclusief alle benodigde materialen',
          'Netjes afgewerkt zonder rommel'
        ]
      },
      gridClass: 'lg:col-start-1'
    },
    {
      id: 'btw',
      icon: '/euro-icon.svg',
      title: 'Btw-teruggaveservice',
      description: 'U hebt mogelijk recht op btw-teruggave. Wij helpen u kosteloos met de aanvraag.',
      buttonText: 'Doe de btw-teruggavecheck',
      expandedContent: {
        title: 'BTW teruggave informatie',
        items: [
          'Tot 21% btw-teruggave mogelijk',
          'Wij verzorgen de complete aanvraag',
          'Geen extra kosten voor deze service',
          'Gemiddeld €2.500 - €4.000 teruggave',
          'Binnen 8 weken op uw rekening'
        ]
      },
      gridClass: 'lg:col-start-3 lg:row-start-1'
    },
    {
      id: 'support',
      icon: '/phone-icon.svg',
      title: 'Altijd direct bereikbaar',
      description: '24/7 live monitoring en 6 dagen per week direct bereikbaar. Ook voor storingen, zonder wachtrijen.',
      buttonText: null,
      expandedContent: null,
      gridClass: 'lg:col-start-3'
    }
  ];

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div>
      <h1 className="mb-8 lg:text-2xl xl:text-3xl print:text-xl text-center text-3xl font-bold">
        Zorgeloos geregeld van A tot Z
      </h1>

      <ol 
        className="grid gap-8 lg:grid-cols-3 lg:grid-rows-2"
        aria-label="De voordelen"
      >
        {guaranteeItems.map((item, index) => (
          <li 
            key={item.id} 
            className={`${item.gridClass} ${index === 3 ? 'hidden lg:block' : ''}`}
          >
            <h2 className="flex items-center gap-1 font-bold text-lg -translate-x-[20px] mb-1">
              <img 
                src={item.icon} 
                alt="" 
                className="w-5 h-5"
              />
              <span>{item.title}</span>
            </h2>
            
            <p className="mb-2 text-slate-gray">
              {item.description}
            </p>

            {item.buttonText && (
              <>
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="inline-flex items-center gap-1 text-left text-sm text-midnight-black underline underline-offset-2 py-2 print:hidden transition-colors hover:text-gray-700"
                  aria-expanded={expandedItems[item.id] || false}
                >
                  <img 
                    src="/chevron-down.svg" 
                    alt="" 
                    className={`w-4 h-4 transition-transform ${
                      expandedItems[item.id] ? 'rotate-180' : ''
                    }`}
                  />
                  <span>{item.buttonText}</span>
                </button>

                {/* Expanded Content */}
                {expandedItems[item.id] && item.expandedContent && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold mb-3">{item.expandedContent.title}</h3>
                    <ul className="space-y-2">
                      {item.expandedContent.items.map((contentItem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <img 
                            src="/checkmark-green.svg" 
                            alt="" 
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-slate-gray">{contentItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </li>
        ))}

        {/* Extra item for grid alignment on desktop */}
        <li className="hidden lg:block" aria-hidden="true"></li>
      </ol>

      {/* Additional Trust Section */}
      <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/badge-icon.svg" 
            alt="" 
            className="w-12 h-12"
          />
          <div className="text-center">
            <p className="font-bold text-green-700">Nummer 1 van Nederland</p>
            <p className="text-sm text-green-600">Meer dan 500.000 tevreden klanten</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepGuarantee;