import React, { useState } from 'react';

const StepSavings = ({ wizardData }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'overige',
      name: 'Overige energiecontracten',
      nameShort: 'Overige energie',
      nameSub: 'contracten',
      savingsAmount: '€ 200',
      savingsText: 'Geschatte besparing per jaar tot',
      benefits: [
        'Gebruik je eigen zonnestroom zelf',
        'Voorkom terugleverkosten',
        'Klaar voor afschaffing salderen'
      ],
      articles: [
        {
          title: 'Bespaar met gebruik eigen zonnestroom',
          content: 'Met een thuisbatterij slaat u overdag uw zonnestroom op en gebruikt u deze \'s avonds. Zo profiteert u optimaal van uw eigen groene energie.',
          enabled: true
        },
        {
          title: 'Ontvang aanvullende verdiensten',
          content: 'Dit wordt binnenkort beschikbaar voor klanten met Overige energiecontracten.',
          enabled: false
        }
      ]
    },
    {
      id: 'zonneplan',
      name: 'Zonneplan Energie',
      nameShort: 'Zonneplan Energie',
      savingsAmount: '€ 450',
      savingsText: 'Geschatte besparing per jaar tot',
      benefits: [
        'Extra voordeel met Zonneplan tarief',
        'Automatische optimalisatie van uw batterij',
        'Geen verborgen kosten of kleine lettertjes'
      ],
      articles: [
        {
          title: 'Maximale besparing met Zonneplan',
          content: 'Als Zonneplan Energie klant profiteert u van extra voordelen en slimme energie-optimalisatie.',
          enabled: true
        },
        {
          title: 'Verdien met uw batterij',
          content: 'Handel automatisch op de energiemarkt en verdien geld met uw thuisbatterij.',
          enabled: true
        }
      ]
    }
  ];

  const currentTabData = tabs[activeTab];
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setExpandedArticle(null); // Reset expanded articles when switching tabs
  };

  const toggleArticle = (index) => {
    if (currentTabData.articles[index].enabled) {
      setExpandedArticle(expandedArticle === index ? null : index);
    }
  };

  return (
    <div>
      <h1 className="mb-8 xl:text-3xl print:text-xl lg:text-center text-xl lg:text-3xl font-bold">
        Besparing met uw thuisbatterij
      </h1>

      <div>
        {/* Tab Navigation */}
        <div 
          role="tablist" 
          className="grid grid-cols-2 print:hidden text-sm md:text-base"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => handleTabClick(index)}
              className={`font-bold font-aeonik bg-horizon-gray text-slate-gray text-center py-4 transition-colors ${
                activeTab === index 
                  ? 'bg-white text-midnight-black' 
                  : 'bg-horizon-gray text-slate-gray hover:bg-gray-100'
              }`}
            >
              <span className="block lg:hidden">{tab.nameShort}</span>
              <span className="hidden lg:block">{tab.name}</span>
              {tab.nameSub && (
                <span className="block lg:hidden text-xs">{tab.nameSub}</span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white">
          <div
            role="tabpanel"
            id={`tabpanel-${currentTabData.id}`}
            aria-labelledby={`tab-${currentTabData.id}`}
          >
            {/* Savings Amount Section */}
            <div role="region" className="py-8 lg:py-12">
              <dl className="text-center">
                <dt className="text-lg lg:text-xl text-slate-gray mb-4">
                  {currentTabData.savingsText}
                </dt>
                <dd className="text-6xl text-kelly-green font-bold font-aeonik">
                  {currentTabData.savingsAmount}
                </dd>
              </dl>

              {/* Benefits List */}
              <ul className="mt-8 space-y-3 max-w-md mx-auto px-4">
                {currentTabData.benefits.map((benefit, index) => (
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
            </div>

            {/* Information Articles */}
            <div className="border-t border-horizon-gray">
              <div className="py-6 px-4 lg:px-8">
                <h2 className="sr-only">Aanvullende informatie</h2>
                <div className="grid gap-4 md:gap-6 max-w-4xl mx-auto">
                  {currentTabData.articles.map((article, index) => (
                    <article
                      key={index}
                      className={`bg-unnoted-gray border border-horizon-gray p-4 rounded-lg relative ${
                        !article.enabled ? 'opacity-60' : ''
                      }`}
                    >
                      <h3 className={`${
                        index === 0 ? 'text-xl font-bold mb-10' : 'text-xl leading-6 font-aeonik font-bold mb-10'
                      }`}>
                        {article.title}
                      </h3>

                      {/* Expanded content */}
                      {expandedArticle === index && (
                        <div className="mb-4">
                          <p className="text-slate-gray">
                            {article.content}
                          </p>
                        </div>
                      )}

                      <button
                        onClick={() => toggleArticle(index)}
                        disabled={!article.enabled}
                        className={`flex items-center gap-1 text-base underline mt-2 before:absolute before:inset-0 text-midnight-black ${
                          !article.enabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                        }`}
                        aria-expanded={expandedArticle === index}
                      >
                        <img 
                          src="/chevron-down.svg" 
                          alt="" 
                          className={`w-4 h-4 transition-transform ${
                            expandedArticle === index ? 'rotate-180' : ''
                          }`}
                        />
                        <span>
                          {expandedArticle === index ? 'Minder informatie' : 'Meer informatie'}
                        </span>
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSavings;