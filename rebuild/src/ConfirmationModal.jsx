import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const ConfirmationModal = ({ 
  isOpen, 
  onClose, 
  loanType, // 'with' or 'without'
  onConfirm,
  wizardData 
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Handle ESC key
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsChecked(false); // Reset checkbox
      onClose();
    }, 300);
  };

  const handleConfirm = () => {
    if (isChecked) {
      onConfirm();
      handleClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div 
        className={`relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header with Tab Indicator */}
        <div className="border-b border-gray-200">
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500 font-medium">
                {loanType === 'with' ? 'Met lening' : 'Zonder lening'}
              </div>
              <button
                onClick={handleClose}
                className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Sluiten"
              >
                <span className="text-sm">Sluiten</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[60vh]">
          <h2 id="modal-title" className="text-2xl font-bold text-midnight-black mb-6">
            Bevestig uw aanbod
          </h2>

          {/* Checklist */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-kelly-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">
                Uw systeem geeft mogelijk minder opbrengst dan vermeld in deze offerte. 
                Dit komt door schaduwwerking van omliggende objecten.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-kelly-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">
                Aanmelding bij uw netbeheerder door ons bedrijf.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-kelly-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">
                Dit aanbod is geldig t/m {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('nl-NL', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}.
              </span>
            </li>
          </ul>

          {/* Terms Link */}
          <p className="text-sm text-gray-600 mb-6">
            Onze{' '}
            <a 
              href="#" 
              className="text-midnight-black underline hover:text-kelly-green transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              algemene voorwaarden en garantievoorwaarden
            </a>
            {' '}zijn van toepassing op dit aanbod.
          </p>

          {/* Checkbox */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 text-kelly-green border-gray-300 rounded focus:ring-kelly-green"
              />
              <span className="text-sm text-gray-700">
                Ik ga akkoord met het aanbod en de daarbij behorende algemene voorwaarden en garantievoorwaarden
              </span>
            </label>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={!isChecked}
            className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all duration-200 ${
              isChecked 
                ? 'bg-kelly-green hover:bg-green-600 cursor-pointer' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Bevestigen
          </button>
        </div>
      </div>
    </div>
  );

  // Use React Portal to render modal at root level
  return ReactDOM.createPortal(
    modalContent,
    document.body
  );
};

export default ConfirmationModal;