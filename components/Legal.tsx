import React from 'react';
import { PageView } from '../types';

interface LegalProps {
  view: PageView;
}

export const Legal: React.FC<LegalProps> = ({ view }) => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
        {view === PageView.PRIVACY ? 'Privacy Policy' : 'Terms and Conditions'}
      </h1>

      <div className="prose prose-slate max-w-none">
        {view === PageView.PRIVACY ? (
          <>
            <p>Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information.</p>
            <h3>Key Principles</h3>
            <ul>
              <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
              <li>We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
              <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
              <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
              <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
              <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
            </ul>
          </>
        ) : (
          <>
            <h3>1. Terms</h3>
            <p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h3>2. User License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Ashcroft Electrical's web site for personal, non-commercial transitory viewing only.</p>
            
            <h3>3. Disclaimer</h3>
            <p>The materials on Ashcroft Electrical's web site are provided "as is". Ashcroft Electrical makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
            
            <h3>4. Limitations</h3>
            <p>In no event shall Ashcroft Electrical or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ashcroft Electrical's Internet site.</p>
            
            <h3>5. Governing Law</h3>
            <p>Any claim relating to Ashcroft Electrical's web site shall be governed by the laws of the State of Victoria without regard to its conflict of law provisions.</p>
          </>
        )}
      </div>
    </div>
  );
};