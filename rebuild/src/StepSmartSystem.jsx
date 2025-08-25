import React, { useState } from 'react';

const StepSmartSystem = ({ wizardData }) => {
  const [expandedSections, setExpandedSections] = useState([0]); // First section expanded by default

  const accordionSections = [
    {
      id: 'optimization',
      title: 'Slimme optimalisatie',
      content: {
        paragraph: 'Uw thuisbatterij werkt volledig automatisch en optimaliseert continu voor maximaal rendement.',
        listItems: [
          'Automatisch laden bij lage energieprijzen',
          'Slim ontladen tijdens piekuren',
          'Weersvoorspelling voor optimaal zonnepanelen gebruik'
        ]
      }
    },
    {
      id: 'monitoring',
      title: 'Real-time monitoring',
      content: {
        paragraph: 'Volg uw energieverbruik en besparing in real-time via de app.',
        listItems: [
          'Live inzicht in energiestromen',
          'Historische data en trends',
          'Maandelijkse besparingsrapporten'
        ]
      }
    },
    {
      id: 'integration',
      title: 'Naadloze integratie',
      content: {
        paragraph: 'De thuisbatterij integreert perfect met uw bestaande installatie.',
        listItems: [
          'Werkt met alle zonnepanelen merken',
          'Compatibel met slimme meters',
          'Toekomstbestendig voor nieuwe technologieën'
        ]
      }
    }
  ];

  const toggleSection = (index) => {
    setExpandedSections(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div>
      <h1 className="mb-8 lg:text-2xl xl:text-3xl print:text-xl text-center text-3xl font-bold">
        Iedere dag slimmer
      </h1>

      <div className="space-y-4">
        {accordionSections.map((section, index) => (
          <div 
            key={section.id}
            className="border border-horizon-gray rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left text-md cursor-pointer flex items-center justify-between p-5 hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={expandedSections.includes(index)}
            >
              <span className="font-bold text-midnight-black">{section.title}</span>
              <img 
                src="/chevron-down.svg" 
                alt="" 
                className={`w-5 h-5 transition-transform duration-200 ${
                  expandedSections.includes(index) ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.includes(index) && (
              <div className="p-5 pt-0 border-t border-horizon-gray">
                <p className="mb-4 text-slate-gray">
                  {section.content.paragraph}
                </p>
                <ul className="space-y-2">
                  {section.content.listItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <img 
                        src="/checkmark-green.svg" 
                        alt="" 
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-slate-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Additional Feature Cards */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="/lightning-icon.svg" 
              alt="" 
              className="w-8 h-8"
            />
            <h3 className="font-bold text-green-700">Energiebeheer</h3>
          </div>
          <p className="text-sm text-green-600">
            Intelligente software die leert van uw verbruikspatronen voor optimale prestaties.
          </p>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <img 
              src="/shield-check-icon.svg" 
              alt="" 
              className="w-8 h-8"
            />
            <h3 className="font-bold text-blue-700">Veilig & Betrouwbaar</h3>
          </div>
          <p className="text-sm text-blue-600">
            Continue monitoring met automatische veiligheidschecks en updates op afstand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepSmartSystem;