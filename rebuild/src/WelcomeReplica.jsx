import React from 'react';
import brandLogo from './assets/brand-logo-placeholder.svg';
import starIcon from './assets/star-icon.svg';
import arrowRight from './assets/arrow-right.svg';

const WelcomeReplica = () => {
  const navigationItems = [
    { number: 1, text: 'Welkom', active: true },
    { number: 2, text: 'Advies', active: false },
    { number: 3, text: 'Besparing', active: false },
    { number: 4, text: 'Garantie', active: false },
    { number: 5, text: 'Slim systeem', active: false },
    { number: 6, text: 'Uw aanbod', active: false },
  ];

  const progressPercentage = 12;

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
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
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-800">{progressPercentage}</span>
                <span className="text-sm text-gray-600">%</span>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mb-8">1 / 6</div>

          {/* Navigation Steps */}
          <nav>
            <ul className="space-y-0">
              {navigationItems.map((item) => (
                <li key={item.number}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                      item.active
                        ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                        : 'text-gray-600 hover:bg-gray-50 border-l-4 border-transparent'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                        item.active
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {item.number}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Print Action */}
          <div className="mt-8 border-t border-gray-200">
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-4 text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Afdrukken</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Rating Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={starIcon} alt="Star" className="w-3 h-3" />
                  ))}
                  <img src={starIcon} alt="Half Star" className="w-3 h-3 opacity-50" />
                </div>
                <span className="text-2xl font-bold text-gray-800">9.4</span>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">1166 beoordelingen</span> in Woudrichem
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Steurstraat 44, Woudrichem</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
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
                  Beste meneer Ketelaars,
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
                  <a href="tel:088 020 3002" className="text-green-600 hover:underline">
                    Bel
                  </a>{' '}
                  of{' '}
                  <a href="mailto:adviseur@example.com" className="text-green-600 hover:underline">
                    mail
                  </a>{' '}
                  mij gerust.
                </p>

                <div className="mt-8">
                  <p className="text-gray-600">Met vriendelijke groet,</p>
                  <p className="text-xl font-semibold text-gray-800 mt-2">Mark Vuursteen</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 max-w-3xl mx-auto">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors">
              <span>Volgende</span>
              <img src={arrowRight} alt="Arrow" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WelcomeReplica;