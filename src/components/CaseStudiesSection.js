import React from 'react';
import vector10Icon from '../assets/Vector 10.png';
import vector11Icon from '../assets/Vector 11.png';

const CaseStudiesSection = ({ caseStudiesVisible, caseStudiesRef, caseStudyItems }) => {
  const companyData = [
    {
      company: "US Facilities Solutions Company",
      challenge: "Comprehensive Salesforce org analysis covering security, performance, architecture, and compliance.",
      scope: "Code quality analysis, data model review, workflow assessment, integration architecture.",
      results: "40-hour assessment completed in 5 hours"
    },
    {
      company: "UK Personal Finance Management Firm",
      challenge: "Enable real-time KYC eligibility scoring directly within Salesforce.",
      scope: "LWC development, Custom objects, Apex code, Test data, Permission sets.",
      results: "60 hours of work delivered in just 8 hours"
    }
  ];

  return (
    <section className="w-full min-h-screen text-white pt-0 pb-0">
      <div ref={caseStudiesRef} className={`w-full flex flex-col items-center case-studies-container ${caseStudiesVisible ? 'animate' : ''}`} style={{ paddingLeft: '13rem', paddingRight: '11rem' }}>
        {/* Heading */}
        <h1 className={`font-normal text-4xl mb-16 py-7 case-study-title ${caseStudiesVisible ? 'animate' : ''}`}>
          Case Studies
        </h1>

        {/* Case Study Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-28 max-w-6xl w-full items-stretch pl-8">
          {companyData.map((data, index) => (
            <div
              key={index}
              className={`flex flex-col h-full case-study-item ${caseStudyItems[index] ? 'animate' : ''}`}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minHeight: '400px' }}
            >
              {/* Company Name */}
              <h2 className="text-lg font-light">{data.company}</h2>

              {/* Challenge */}
              <div className="flex-shrink-0">
                <p className="text-[#BFDBFE] font-normal text-base mb-1">Challenge</p>
                <p className="text-gray-400 font-normal text-xl">{data.challenge}</p>
              </div>

              {/* Scope */}
              <div className="flex-shrink-0">
                <p className="text-[#BFDBFE] mb-1 font-normal text-base">Scope</p>
                <div className="text-gray-400 font-normal text-xl">
                  <div>{data.scope}</div>
                </div>
              </div>

              {/* Results */}
              <div className="relative flex-shrink-0">
                <p className="text-blue-400 mb-1 font-normal text-base">Results</p>
                <div className="relative">
                  <p className="font-semibold tracking-tighter text-3xl max-w-sm">{data.results}</p>
                  {/* Vector underline - responsive positioning for different screen sizes */}
                  <img
                    src={index === 0 ? vector10Icon : vector11Icon}
                    alt="Results underline"
                    className={`absolute bottom-0 w-auto h-auto z-10 ${index === 0
                      ? 'left-1/2 transform -translate-x-1/2' // Center for left case study (5 hours)
                      : 'left-1/4 transform -translate-x-1/2' // More left for right case study (8 hours)
                      }`}
                    style={{
                      transform: index === 0
                        ? 'translate(-50%, 12px)' // Center horizontally, move down more for 5 hours
                        : 'translate(-50%, 8px)', // Center horizontally, move down slightly for 8 hours
                      maxWidth: '80px',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
