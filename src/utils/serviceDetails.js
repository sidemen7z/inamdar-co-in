// Comprehensive service details for all CA services

export const serviceDetails = {
    'Proprietorship': {
        description: `A proprietorship is the simplest form of business structure where a single individual owns and operates the business. It's the most cost-effective way to start a business in India with minimal legal formalities. As a proprietor, you have complete control over your business decisions and operations.`,
        benefits: [
            'Easy and quick setup with minimal documentation',
            'Low cost of registration and maintenance',
            'Complete control over business decisions',
            'Simple taxation structure',
            'No separate tax filing for business',
            'Easy to close or transfer ownership',
            'Minimal compliance requirements',
            'Direct tax benefits available'
        ],
        documents: [
            'PAN Card of the proprietor',
            'Aadhaar Card of the proprietor',
            'Address proof (Electricity bill/Rent agreement)',
            'Bank account statement',
            'Passport size photographs',
            'Business address proof'
        ],
        process: [
            'Initial consultation and document collection',
            'Business name selection and verification',
            'GST registration (if applicable)',
            'Shop & Establishment Act registration',
            'Opening of current bank account',
            'Final documentation and handover'
        ],
        timeline: '3-7 working days',
        faqs: [
            {
                question: 'Is registration mandatory for proprietorship?',
                answer: 'Proprietorship registration is not mandatory, but GST registration becomes mandatory if turnover exceeds ₹40 lakhs (₹20 lakhs for service providers).'
            },
            {
                question: 'Can I have employees in a proprietorship?',
                answer: 'Yes, you can hire employees in a proprietorship firm. You need to comply with labor laws and obtain necessary registrations like ESI and PF if the number of employees exceeds the specified limit.'
            }
        ]
    },

    'Partnership': {
        description: `A partnership firm is a business structure where two or more individuals come together to run a business and share profits according to a partnership deed. It's governed by the Indian Partnership Act, 1932, and is ideal for businesses that require shared expertise and capital investment.`,
        benefits: [
            'Shared responsibility and workload among partners',
            'Combined skills, expertise, and resources',
            'Easier to raise capital compared to proprietorship',
            'More credibility than sole proprietorship',
            'Flexible profit-sharing arrangements',
            'Simple formation process',
            'Tax benefits for partners',
            'Easy decision-making among partners'
        ],
        documents: [
            'PAN Cards of all partners',
            'Aadhaar Cards of all partners',
            'Address proofs of all partners',
            'Passport size photographs of all partners',
            'Registered office address proof',
            'Rent agreement or ownership documents',
            'NOC from property owner (if rented)'
        ],
        process: [
            'Selection of partnership name',
            'Drafting of partnership deed',
            'Notarization of partnership deed',
            'PAN application for the firm',
            'Opening of partnership bank account',
            'GST registration (if applicable)',
            'Other necessary registrations'
        ],
        timeline: '5-10 working days',
        faqs: [
            {
                question: 'Is partnership deed registration mandatory?',
                answer: 'While registration is not mandatory, it is highly recommended as it provides legal validity and helps resolve disputes between partners.'
            },
            {
                question: 'How are profits shared in a partnership?',
                answer: 'Profits are shared as per the ratio mentioned in the partnership deed. If not specified, profits are shared equally among all partners.'
            }
        ]
    },

    'One Person Company': {
        description: `One Person Company (OPC) is a revolutionary concept introduced in the Companies Act, 2013, allowing a single person to operate a company with limited liability. It combines the benefits of a proprietorship and a private limited company, making it ideal for solo entrepreneurs who want to grow their business with corporate structure.`,
        benefits: [
            'Limited liability protection for the sole owner',
            'Separate legal entity status',
            'Perpetual succession regardless of owner changes',
            'Easy to raise funding and loans',
            'Higher credibility with clients and vendors',
            'Single person ownership and control',
            'Lower compliance compared to Pvt Ltd',
            'Can be converted to Pvt Ltd company later'
        ],
        documents: [
            'PAN Card of Director and Nominee',
            'Aadhaar Card of Director and Nominee',
            'Passport of Director (if available)',
            'Voter ID/Driving License',
            'Recent bank statement/utility bill',
            'Passport size photographs',
            'Digital signature certificate (DSC)',
            'Registered office address proof'
        ],
        process: [
            'Obtain Digital Signature Certificate (DSC)',
            'Director Identification Number (DIN) application',
            'Company name approval (RUN service)',
            'Filing of incorporation documents (SPICe+)',
            'MOA and AOA preparation and filing',
            'Certificate of Incorporation',
            'PAN and TAN allotment'
        ],
        timeline: '10-15 working days',
        faqs: [
            {
                question: 'Can an OPC have more than one director?',
                answer: 'No, an OPC can have only one director. However, you must appoint a nominee who will become the director in case of death or incapacity of the original director.'
            },
            {
                question: 'Can an NRI form an OPC?',
                answer: 'No, only Indian citizens and residents can form an OPC. NRIs, foreign nationals, and foreign companies cannot be members of an OPC.'
            }
        ]
    },

    'Limited Liability Partnership': {
        description: `Limited Liability Partnership (LLP) is a hybrid business structure that combines the benefits of partnership and company. It provides limited liability protection to partners while maintaining operational flexibility. LLPs are governed by the Limited Liability Partnership Act, 2008, and are increasingly popular among professionals and startups.`,
        benefits: [
            'Limited liability protection for all partners',
            'Separate legal entity independent of partners',
            'Perpetual succession',
            'No minimum capital requirement',
            'Less compliance compared to companies',
            'Flexible profit-sharing arrangement',
            'No requirement for audit if turnover < ₹40 lakhs',
            'Easy to add or remove partners'
        ],
        documents: [
            'PAN Cards of all designated partners',
            'Aadhaar Cards of all partners',
            'Passport (for foreign nationals)',
            'Address proof of registered office',
            'Rent agreement/ownership proof',
            'NOC from property owner',
            'Digital Signature Certificate (DSC)',
            'Passport size photographs'
        ],
        process: [
            'Obtain DSC for designated partners',
            'Apply for Director Identification Number (DIN)',
            'LLP name approval via RUN service',
            'Filing of FiLLiP form with documents',
            'LLP Agreement drafting and filing',
            'Certificate of Incorporation',
            'PAN and TAN application'
        ],
        timeline: '12-18 working days',
        faqs: [
            {
                question: 'What is the minimum number of partners required?',
                answer: 'An LLP must have a minimum of 2 designated partners. There is no maximum limit on the number of partners.'
            },
            {
                question: 'Can an LLP be converted to a Private Limited Company?',
                answer: 'Yes, an LLP can be converted into a Private Limited Company by following the prescribed legal procedure and complying with the Companies Act.'
            }
        ]
    },

    'Private Limited Company': {
        description: `A Private Limited Company is the most preferred business structure for startups and growing businesses in India. It offers limited liability, separate legal entity status, and perpetual succession. This structure is ideal for businesses looking to raise venture capital funding and scale operations.`,
        benefits: [
            'Limited liability protection for shareholders',
            'Separate legal entity with perpetual succession',
            'Easy to raise funding from investors and VCs',
            'Higher credibility and brand value',
            'Professional business structure',
            'Easy transfer of ownership',
            'Tax benefits and deductions available',
            'Ability to attract and retain talent with ESOPs'
        ],
        documents: [
            'PAN Cards of all directors and shareholders',
            'Aadhaar/Passport of directors',
            'Address proof of registered office',
            'Rent agreement or ownership documents',
            'NOC from property owner',
            'Digital Signature Certificate (DSC)',
            'Directors and shareholders photographs',
            'Bank statements of directors'
        ],
        process: [
            'DSC procurement for directors',
            'DIN application for all directors',
            'Name reservation via RUN service',
            'Filing SPICe+ form with attachments',
            'MOA and AOA preparation',
            'Certificate of Incorporation',
            'PAN, TAN, and bank account opening'
        ],
        timeline: '15-20 working days',
        faqs: [
            {
                question: 'What is the minimum capital required?',
                answer: 'There is no minimum capital requirement for a Private Limited Company. You can start with any amount, even ₹1.'
            },
            {
                question: 'How many directors and shareholders are required?',
                answer: 'A Private Limited Company requires a minimum of 2 directors and 2 shareholders (can be the same persons). Maximum 200 shareholders are allowed.'
            }
        ]
    },

    'Trust Registration': {
        description: `A Trust is a legal entity created for charitable, religious, or educational purposes. It's established through a Trust Deed and managed by trustees for the benefit of beneficiaries. Trust registration provides tax exemptions and legal recognition for social welfare activities.`,
        benefits: [
            'Tax exemption under Section 12AA and 80G',
            'Perpetual succession',
            'Limited liability for trustees',
            'Enhanced credibility for fundraising',
            'Legal recognition and protection',
            'Can receive foreign donations (with FCRA)',
            'Property can be held in trust name',
            'Separate legal entity'
        ],
        documents: [
            'Trust Deed on stamp paper',
            'PAN Cards of all trustees',
            'Aadhaar Cards of all trustees',
            'Address proof of registered office',
            'Photographs of trustees',
            'Objectives and aims of the trust',
            'List of trustees with addresses',
            'Property documents (if applicable)'
        ],
        process: [
            'Drafting of Trust Deed',
            'Registration on appropriate stamp paper',
            'Execution by all trustees',
            'Registration with Sub-Registrar',
            'PAN application for trust',
            '12A and 80G registration for tax exemption',
            'Bank account opening'
        ],
        timeline: '15-25 working days',
        faqs: [
            {
                question: 'What is the difference between Public and Private Trust?',
                answer: 'A Public Trust is created for the benefit of the general public, while a Private Trust is for specific individuals or family members. Public trusts get better tax benefits.'
            },
            {
                question: 'Can trustees receive salary?',
                answer: 'Yes, trustees can receive reasonable remuneration for their services, but it should be mentioned in the Trust Deed and should not be excessive.'
            }
        ]
    },

    'Society Registration': {
        description: `A Society is a voluntary association of people formed for promoting charitable, educational, cultural, or social causes. Registered under the Societies Registration Act, 1860, it's ideal for NGOs and community organizations working for social welfare.`,
        benefits: [
            'Tax exemptions under 12A, 80G, and 35AC',
            'Legal entity status',
            'Democratic governance structure',
            'Limited liability for members',
            'Easy to get grants and donations',
            'Can register under FCRA for foreign funding',
            'Perpetual existence',
            'Higher credibility for CSR funding'
        ],
        documents: [
            'Memorandum of Association (MOA)',
            'Rules and Regulations of Society',
            'List of managing committee members',
            'PAN and Aadhaar of all members',
            'Address proof of registered office',
            'Photographs of members',
            'Affidavit from members',
            'NOC from property owner'
        ],
        process: [
            'Name selection and verification',
            'Drafting of MOA and Rules',
            'Signature collection from members',
            'Notarization of documents',
            'Filing with Registrar of Societies',
            'Certificate of Registration',
            'PAN and 12A/80G registration'
        ],
        timeline: '20-30 working days',
        faqs: [
            {
                question: 'How many members are required?',
                answer: 'A minimum of 7 members are required to register a society. There is no maximum limit.'
            },
            {
                question: 'What is the difference between Society and Trust?',
                answer: 'A Society is a democratic body with voting rights for members, while a Trust is managed by trustees. Societies are better for membership-based organizations.'
            }
        ]
    },

    'Digital Signature': {
        description: `A Digital Signature Certificate (DSC) is the electronic equivalent of a physical signature used to sign documents digitally. It's mandatory for various online filings with MCA, Income Tax, GST, and other government portals. DSCs ensure authenticity, integrity, and non-repudiation of electronic documents.`,
        benefits: [
            'Legally valid for all online filings',
            'Secure document signing',
            'Time-saving and paperless process',
            'Prevents document tampering',
            'Mandatory for company incorporation',
            'Required for GST and IT returns filing',
            '2-year validity period',
            'Can be used across multiple platforms'
        ],
        documents: [
            'PAN Card of applicant',
            'Aadhaar Card',
            'Photograph (specification provided)',
            'Mobile number and email ID',
            'Address proof',
            'Request letter (for organization)',
            'Board resolution (for companies)'
        ],
        process: [
            'Selection of DSC class (Class 2 or 3)',
            'Document submission and verification',
            'Payment of DSC fees',
            'Video verification (if required)',
            'DSC issuance by Certifying Authority',
            'Token delivery via courier',
            'Installation and testing'
        ],
        timeline: '2-4 working days',
        faqs: [
            {
                question: 'What is the difference between Class 2 and Class 3 DSC?',
                answer: 'Class 2 DSC is used for IT returns and basic filings, while Class 3 DSC is required for company incorporation, e-tendering, and high-security applications.'
            },
            {
                question: 'Can one DSC be used for multiple purposes?',
                answer: 'Yes, a single DSC can be used for multiple purposes like MCA filings, IT returns, GST, import-export, and other government portals.'
            }
        ]
    },

    'Udyam Registration': {
        description: `Udyam Registration (formerly MSME/SSI Registration) is a government registration for micro, small, and medium enterprises. It provides numerous benefits including easier access to credit, subsidies, and government schemes. The registration is based on self-declaration with no requirement of documents or proof.`,
        benefits: [
            'Easier access to bank loans at lower interest rates',
            'Collateral-free credit facilities',
            'Protection against delayed payments',
            'Priority sector lending benefits',
            'Concession on electricity bills',
            'Exemption from stamp duty and registration fees',
            'Subsidies on patent registration',
            'Access to government tenders and schemes'
        ],
        documents: [
            'Aadhaar Number of proprietor/partner/director',
            'PAN of the business entity',
            'Business name and type',
            'Bank account details',
            'Investment and turnover details',
            'No other documents required (self-declaration)'
        ],
        process: [
            'Access Udyam Registration portal',
            'Enter Aadhaar and OTP verification',
            'Fill business details and classification',
            'Enter investment and turnover data',
            'Submit the form (no documents needed)',
            'Instant Udyam Registration Certificate',
            'Download certificate with unique number'
        ],
        timeline: 'Same day (instant registration)',
        faqs: [
            {
                question: 'What are the investment and turnover limits?',
                answer: 'Micro: Investment < ₹1 Cr & Turnover < ₹5 Cr | Small: Investment < ₹10 Cr & Turnover < ₹50 Cr | Medium: Investment < ₹50 Cr & Turnover < ₹250 Cr'
            },
            {
                question: 'Is it mandatory to have Udyam Registration?',
                answer: 'While not mandatory, it is highly beneficial for availing government schemes, subsidies, and bank loans at preferential rates.'
            }
        ]
    },

    'Startup India Registration': {
        description: `Startup India Registration is a flagship initiative by the Government of India to build a strong ecosystem for nurturing innovation and startups. Recognized startups get access to tax benefits, easier compliance, IPR fast-tracking, and funding opportunities. It's a must-have for tech startups and innovative businesses.`,
        benefits: [
            '100% tax exemption for 3 years',
            'Self-certification for 6 labor and 3 environmental laws',
            'Fast-track patent examination with 80% rebate',
            'Access to Fund of Funds (₹10,000 Cr corpus)',
            'Easy exit (90-day wind-up process)',
            'No angel tax on funding',
            'Hosting on Startup India portal',
            'Networking and mentorship opportunities'
        ],
        documents: [
            'Certificate of Incorporation/Registration',
            'Company/LLP PAN',
            'Brief about innovation and business model',
            'Website/Pitch deck (optional)',
            'Bank account details',
            'Directors/Partners details',
            'Recommendation letter (if applicable)'
        ],
        process: [
            'Incorporation of Pvt Ltd/LLP/Partnership',
            'Registration on Startup India portal',
            'Fill up the application form',
            'Upload required documents',
            'Submit innovative idea description',
            'DPIIT evaluation and approval',
            'Recognition certificate issuance'
        ],
        timeline: '30-45 working days',
        faqs: [
            {
                question: 'What is the eligibility criteria?',
                answer: 'Entity must be incorporated as Pvt Ltd/LLP/Partnership, be less than 10 years old, have annual turnover < ₹100 Cr, and work toward innovation/improvement of products or services.'
            },
            {
                question: 'Can a proprietorship register under Startup India?',
                answer: 'No, only Private Limited Companies, LLPs, and Partnership Firms are eligible for Startup India registration.'
            }
        ]
    },

    'FSSAI Registration': {
        description: `FSSAI (Food Safety and Standards Authority of India) registration/license is mandatory for every food business operator in India. Whether you're a manufacturer, trader, restaurant, or online food delivery, FSSAI ensures your business complies with food safety standards and builds customer trust.`,
        benefits: [
            'Legal authorization to operate food business',
            'Builds customer trust and credibility',
            'Mandatory for food-related businesses',
            'Helps expand business nationwide',
            'Required for e-commerce food sales',
            'International business opportunities',
            'Prevents legal penalties',
            'Quality assurance certification'
        ],
        documents: [
            'Form B (for registration/license)',
            'Photo ID and address proof of proprietor',
            'Business incorporation certificate',
            'List of food products manufactured/sold',
            'Food safety management plan',
            'Source of water supply proof',
            'Layout plan of processing unit',
            'NOC from municipality/local body'
        ],
        process: [
            'Determine FSSAI type (Basic/State/Central)',
            'Fill application form online',
            'Upload all required documents',
            'Pay the registration/license fee',
            'Inspection by food safety officer (if required)',
            'Approval and certificate issuance',
            'Display FSSAI number on products'
        ],
        timeline: '15-60 days (depending on license type)',
        faqs: [
            {
                question: 'What is the difference between FSSAI Registration and License?',
                answer: 'Registration is for small businesses with turnover < ₹12 lakhs. State License is for turnover ₹12 lakhs - ₹20 Cr. Central License is for turnover > ₹20 Cr or for importers/exporters.'
            },
            {
                question: 'Is FSSAI mandatory for home-based food businesses?',
                answer: 'Yes, even home-based food businesses selling through online platforms need at least FSSAI Basic Registration.'
            }
        ]
    },

    'Professional Tax': {
        description: `Professional Tax is a state-level tax levied on income earned from profession, trade, calling, or employment. It's mandatory for all salaried individuals, businesses, and professionals whose income exceeds the prescribed limit. The tax amount and rules vary from state to state.`,
        benefits: [
            'Legal compliance with state tax laws',
            'Tax deduction allowed in income tax',
            'Avoid penalties and legal issues',
            'Required for business registration',
            'Necessary for government tenders',
            'Professional credibility',
            'Employer compliance for deducting from salaries',
            'State-wise provisions available'
        ],
        documents: [
            'Application form (state-specific)',
            'PAN Card of business/professional',
            'Business registration certificate',
            'Address proof of business premises',
            'Identity proof of applicant',
            'Rent agreement (if applicable)',
            'Employee details (for employers)',
            'Bank account details'
        ],
        process: [
            'Identify applicable state and rules',
            'Fill registration application form',
            'Submit required documents',
            'Payment of registration fees',
            'Receive Professional Tax certificate',
            'Monthly/annual PT payment as per schedule',
            'Annual return filing'
        ],
        timeline: '7-15 working days',
        faqs: [
            {
                question: 'Which states levy Professional Tax?',
                answer: 'Most states levy PT except for Delhi, Haryana, Rajasthan, UP, Uttarakhand, HP, J&K, and Punjab. The tax amount varies from ₹200 to ₹2,500 annually.'
            },
            {
                question: 'Is Professional Tax deductible from income tax?',
                answer: 'Yes, Professional Tax paid is allowed as a deduction under Section 16(iii) of the Income Tax Act from salary income.'
            }
        ]
    },

    'Darpan Registration': {
        description: `DARPAN (Digital Advancement of Rural Post Office for A New India) is an online portal for registration of NGOs/VOs. It's mandatory for organizations seeking grants from NITI Aayog and other government bodies. The registration provides a unique ID and makes NGOs eligible for CSR funding and government schemes.`,
        benefits: [
            'Eligibility for NITI Aayog grants',
            'Access to CSR funding opportunities',
            'Listed in government NGO database',
            'Increased credibility and visibility',
            'Easy verification by donors',
            'Registration process',
            'Required for government collaborations',
            'Transparent rating system'
        ],
        documents: [
            'Registration certificate of NGO/Trust/Society',
            'PAN Card of organization',
            '80G and 12A certificates (if available)',
            'Audited financial statements (3 years)',
            'List of governing body members',
            'Details of key projects/activities',
            'Bank account details',
            'Contact information'
        ],
        process: [
            'Visit NITI Aayog NGO-DARPAN portal',
            'Create organization account',
            'Fill registration form with details',
            'Upload all required documents',
            'Submit application for verification',
            'Receive unique DARPAN ID',
            'Update information annually'
        ],
        timeline: '5-10 working days',
        faqs: [
            {
                question: 'Who needs DARPAN registration?',
                answer: 'All NGOs, societies, and trusts seeking government grants, CSR funding, or collaborations with NITI Aayog and other government bodies need DARPAN registration.'
            },
            {
                question: 'Are there any charges for DARPAN registration?',
                answer: 'No, DARPAN registration has no charges for registration or renewal.'
            }
        ]
    },

    'RCMC Registration': {
        description: `Registration cum Membership Certificate (RCMC) is mandatory for exporters to avail benefits under various export promotion schemes. Issued by Export Promotion Councils (EPCs), RCMC enables businesses to access subsidies, duty drawback, and other export incentives from the government.`,
        benefits: [
            'Eligibility for export incentive schemes',
            'Access to duty drawback benefits',
            'Merchandise Exports from India Scheme (MEIS) benefits',
            'Authorization for export documentation',
            'Networking with international buyers',
            'Market information and trade leads',
            'Participation in trade fairs and exhibitions',
            'Export credit at competitive rates'
        ],
        documents: [
            'Import Export Code (IEC)',
            'Company registration certificate',
            'PAN Card of the business',
            'GST registration certificate',
            'Bank certificate with IFS code',
            'Cancelled cheque of current account',
            'Details of directors/partners',
            'Photographs of authorized signatory'
        ],
        process: [
            'Identify relevant Export Promotion Council',
            'Apply for IEC (if not already done)',
            'Fill RCMC application form',
            'Submit required documents',
            'Pay membership and processing fees',
            'Verification by EPC',
            'RCMC certificate issuance (1-year validity)'
        ],
        timeline: '10-20 working days',
        faqs: [
            {
                question: 'Which products need RCMC?',
                answer: 'RCMC is product-specific. You need to apply to the relevant Export Promotion Council based on your product category (e.g., Apparel EPC, Engineering EPC, Chemical EPC, etc.).'
            },
            {
                question: 'What is the validity of RCMC?',
                answer: 'RCMC is valid for one year from the date of issuance and needs to be renewed annually.'
            }
        ]
    },

    'Halal Certificate': {
        description: `Halal Certification is essential for food and pharmaceutical products to be exported to Islamic countries. The certificate ensures that products comply with Islamic dietary laws and are permissible for consumption by Muslims. It opens up massive export opportunities in Middle East and Southeast Asian markets.`,
        benefits: [
            'Access to 1.8 billion Muslim consumers worldwide',
            'Mandatory for exports to Islamic countries',
            'Increases product acceptability and trust',
            'Premium pricing in Halal markets',
            'Competitive advantage in global trade',
            'Regulatory compliance in Muslim countries',
            'Brand reputation enhancement',
            'Higher profit margins'
        ],
        documents: [
            'Company registration certificate',
            'FSSAI license/registration',
            'Product label and packaging details',
            'List of ingredients and sources',
            'Manufacturing process flowchart',
            'Supplier certificates for raw materials',
            'Factory layout and hygiene details',
            'ISO/GMP certificates (if available)'
        ],
        process: [
            'Application to Halal certification body',
            'Document submission and verification',
            'Factory inspection and audit',
            'Product testing and verification',
            'Source verification of ingredients',
            'Certification committee approval',
            'Halal certificate issuance (1-year validity)'
        ],
        timeline: '30-60 working days',
        faqs: [
            {
                question: 'Which products need Halal certification?',
                answer: 'Food products, pharmaceuticals, cosmetics, and personal care items exported to or sold in Islamic countries typically need Halal certification.'
            },
            {
                question: 'Is Halal certification mandatory in India?',
                answer: 'No, it\'s not mandatory in India but is essential for exporting to Muslim-majority countries and for catering to Muslim consumers.'
            }
        ]
    },

    'Import Export Code': {
        description: `Import Export Code (IEC) is a 10-digit unique code issued by DGFT (Directorate General of Foreign Trade) mandatory for import or export of goods and services. Without IEC, no person/entity can import or export goods except for specified categories. It's a lifetime registration with no renewal requirement.`,
        benefits: [
            'Legal authorization for import-export business',
            'Lifetime validity (no renewal needed)',
            'PAN-based unique identification',
            'Required for customs clearance',
            'Eligibility for export incentives',
            'Access to international markets',
            'Opening foreign currency accounts',
            'Government export benefits'
        ],
        documents: [
            'PAN Card of applicant/entity',
            'Aadhaar Card (for proprietorship)',
            'Company registration certificate',
            'Bank certificate on letterhead',
            'Cancelled cheque of current account',
            'Photograph of proprietor/partners/directors',
            'Digital signature (for online filing)',
            'Address proof of business premises'
        ],
        process: [
            'Apply online on DGFT portal',
            'Fill Aayaat Niryaat Form (ANF2A)',
            'Upload required documents',
            'Digital signature verification',
            'Payment of application fee',
            'Verification by DGFT',
            'IEC allotment (digital certificate)'
        ],
        timeline: '5-10 working days',
        faqs: [
            {
                question: 'Is IEC required for service exports?',
                answer: 'Yes, IEC is required for both goods and services exports. However, services provided to Indian entities don\'t need IEC.'
            },
            {
                question: 'Can IEC be obtained for proprietorship?',
                answer: 'Yes, IEC can be obtained for proprietorship, partnership, LLP, and company. For proprietorship, it\'s issued in the name of the proprietor with firm name.'
            }
        ]
    },

    'Trade License': {
        description: `Trade License is a mandatory license issued by the Municipal Corporation or local authority to carry out any trade or business activity. It ensures that the business complies with local laws, maintains hygiene standards, and doesn't pose a threat to public health and safety. Every business establishment needs a trade license.`,
        benefits: [
            'Legal authorization to operate business',
            'Compliance with municipal regulations',
            'Avoids penalties and business closure',
            'Required for bank loans and funding',
            'Necessary for other business registrations',
            'Professional credibility',
            'Protection from legal issues',
            'Required for property tax benefits'
        ],
        documents: [
            'Trade license application form',
            'Identity and address proof of applicant',
            'Business registration certificate',
            'PAN Card and Aadhaar Card',
            'Partnership deed/MOA-AOA (if applicable)',
            'Property documents/Rent agreement',
            'NOC from property owner',
            'Blueprint of business premises',
            'Fire safety certificate (for certain businesses)'
        ],
        process: [
            'Apply to local Municipal Corporation',
            'Fill prescribed application form',
            'Submit required documents',
            'Pay application and license fees',
            'Inspection by municipal inspector',
            'Compliance verification',
            'Trade license issuance (yearly renewal)'
        ],
        timeline: '15-30 working days',
        faqs: [
            {
                question: 'Which businesses need a Trade License?',
                answer: 'All businesses including retail shops, restaurants, manufacturing units, offices, and service providers need a trade license from the local municipal authority.'
            },
            {
                question: 'What is the validity of a Trade License?',
                answer: 'Trade licenses are typically valid for one year and need to be renewed annually before expiry.'
            }
        ]
    },

    'GST Registration': {
        description: `Goods and Services Tax (GST) Registration is mandatory for businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for services, ₹10 lakhs in special category states). It's required for inter-state supplies, e-commerce sellers, and certain specified businesses. GST registration provides a unique 15-digit GSTIN and enables legal tax compliance.`,
        benefits: [
            'Legal recognition as a supplier',
            'Input tax credit on purchases',
            'Nationwide business operations',
            'Required for e-commerce business',
            'Mandatory for government tenders',
            'Enhanced business credibility',
            'Easy interstate transactions',
            'Composition scheme benefits (if eligible)'
        ],
        documents: [
            'PAN Card of business/proprietor',
            'Aadhaar Card',
            'Business registration certificate',
            'Address proof of principal place of business',
            'Bank account statement/cancelled cheque',
            'Digital signature or E-sign',
            'Photographs of proprietor/partners/directors',
            'Rent agreement/ownership documents',
            'Authorization letter and board resolution'
        ],
        process: [
            'Visit GST portal and register',
            'Fill Part A of Form GST REG-01',
            'Receive Temporary Reference Number (TRN)',
            'Upload required documents in Part B',
            'ARN generation after submission',
            'Verification by GST officer',
            'GSTIN allotment and certificate download'
        ],
        timeline: '3-7 working days',
        faqs: [
            {
                question: 'What is the GST turnover limit for registration?',
                answer: 'GST registration is mandatory if annual turnover exceeds ₹40 lakhs for goods (₹20 lakhs for services). Special category states have ₹10/20 lakh limits.'
            },
            {
                question: 'Can I register for GST voluntarily?',
                answer: 'Yes, you can register for GST voluntarily even if your turnover is below the threshold limit to claim input tax credit and expand business.'
            }
        ]
    },

    'GST Filing': {
        description: `GST Filing involves submitting regular returns to the GST portal reporting sales, purchases, and tax liability. Different types of returns (GSTR-1, GSTR-3B, GSTR-9) need to be filed monthly, quarterly, or annually based on business type and turnover. Timely filing avoids penalties and keeps businesses compliant.`,
        benefits: [
            'Compliance with GST laws',
            'Claim input tax credit',
            'Avoid penalties and interest',
            'Maintain clean business record',
            'Required for annual return filing',
            'Helps in business expansion',
            'Government tender eligibility',
            'Professional business practices'
        ],
        documents: [
            'Sales invoices and bills',
            'Purchase invoices',
            'Debit and credit notes',
            'Bank statements',
            'Previous GST returns filed',
            'Import-export documents (if applicable)',
            'E-way bills generated',
            'Reconciliation statements'
        ],
        process: [
            'Prepare sales and purchase data',
            'Login to GST portal with credentials',
            'Fill GSTR-1 (outward supplies)',
            'Verify and submit GSTR-3B',
            'Pay tax liability through challan',
            'Download filed return acknowledgement',
            'Maintain records for audit'
        ],
        timeline: 'Monthly/Quarterly as per due dates',
        faqs: [
            {
                question: 'What returns do I need to file?',
                answer: 'Regular taxpayers file GSTR-1 (sales), GSTR-3B (summary return) monthly, and GSTR-9 (annual return). Composition dealers file GSTR-4 quarterly.'
            },
            {
                question: 'What happens if I miss the filing deadline?',
                answer: 'Late filing attracts late fees of ₹50/day (₹20/day for nil returns) per act, maximum ₹5,000. Interest is charged @18% p.a. on tax amount.'
            }
        ]
    },

    'LUT Filing Under GST': {
        description: `Letter of Undertaking (LUT) is a declaration filed by exporters to export goods/services without paying IGST. Instead of paying tax and claiming refund later, LUT allows zero-rated supply for exports. It's valid for one financial year and must be filed annually before making any exports.`,
        benefits: [
            'Export without paying IGST',
            'Improved cash flow for exporters',
            'No refund hassles',
            'Time-saving process',
            'Competitive pricing in international market',
            'Operational convenience',
            'Valid for entire financial year',
            'Online submission'
        ],
        documents: [
            'GSTIN of the exporter',
            'Previous year GST returns',
            'Import Export Code (IEC)',
            'Bank account details',
            'Digital signature certificate',
            'Board resolution (for companies)',
            'Self-declaration',
            'Previous LUT copy (for renewal)'
        ],
        process: [
            'Login to GST portal',
            'Navigate to Services > User Services > Furnish LUT',
            'Fill Form GST RFD-11',
            'Verify all details',
            'Submit with DSC/E-sign',
            'Download acknowledgement',
            'Use for zero-rated exports'
        ],
        timeline: 'Same day (instant)',
        faqs: [
            {
                question: 'Who can file LUT?',
                answer: 'Exporters with good compliance record (no proceeding or offence pending) can file LUT. New exporters can also file LUT from the first year.'
            },
            {
                question: 'What is the validity of LUT?',
                answer: 'LUT is valid for one financial year (April to March) and needs to be filed afresh at the beginning of each financial year.'
            }
        ]
    },

    'ITR Filing': {
        description: `Income Tax Return (ITR) filing is the annual process of reporting income, taxes paid, and claiming refunds to the Income Tax Department. It's mandatory for individuals and businesses with taxable income exceeding basic exemption limits. Timely ITR filing ensures tax compliance and enables various financial benefits.`,
        benefits: [
            'Legal compliance with IT Act',
            'Income and address proof',
            'Required for visa applications',
            'Necessary for bank loans',
            'Claim tax refunds',
            'Carry forward losses',
            'Avoid penalty and prosecution',
            'Financial credibility'
        ],
        documents: [
            'Form 16/16A (TDS certificates)',
            'Bank statements (saving/current)',
            'Interest certificates',
            'Capital gains statements',
            'Investment proofs (80C, 80D, etc.)',
            'Home loan interest certificate',
            'Rent receipts (for HRA)',
            'Business income details (for self-employed)',
            'Previous year ITR (if applicable)'
        ],
        process: [
            'Calculate total income and tax liability',
            'Choose appropriate ITR form',
            'Login to Income Tax e-filing portal',
            'Fill income details and deductions',
            'Verify tax computation',
            'Submit return electronically',
            'E-verify using Aadhaar OTP/DSC/EVC'
        ],
        timeline: 'Due date: 31st July (individuals), 31st October (audit cases)',
        faqs: [
            {
                question: 'Which ITR form should I file?',
                answer: 'ITR-1 for salary income, ITR-2 for capital gains, ITR-3 for business income (individuals), ITR-4 for presumptive income, ITR-5/6 for firms/companies, ITR-7 for trusts.'
            },
            {
                question: 'What happens if I don\'t file ITR?',
                answer: 'Non-filing attracts penalty up to ₹10,000, loss of refunds, inability to carry forward losses, and prosecution in serious cases.'
            }
        ]
    },

    'GST Cancellation': {
        description: `GST Cancellation is the process of surrendering GST registration when business is closed, discontinued, or no longer required. It can be voluntary (by taxpayer) or suo-moto (by department). Proper cancellation ensures no future compliance burden and protects from penalties for non-filing.`,
        benefits: [
            'No future compliance requirements',
            'Avoid penalties for non-filing',
            'Clean closure of business',
            'No liability for future tax',
            'Professional exit from GST system',
            'Required for business restructuring',
            'Prevents misuse of GSTIN',
            'Legal closure documentation'
        ],
        documents: [
            'GST registration certificate',
            'Stock register/inventory details',
            'All pending GST returns filed',
            'Final GSTR-10 (within 3 months)',
            'Tax payment proof',
            'Reason for cancellation',
            'Surrender of unused invoices',
            'Digital signature certificate'
        ],
        process: [
            'File all pending GST returns',
            'Clear all tax dues',
            'Login to GST portal',
            'Apply for cancellation (GST REG-16)',
            'Upload required documents',
            'Submit application',
            'File GSTR-10 (final return)',
            'Receive cancellation order'
        ],
        timeline: '15-30 working days',
        faqs: [
            {
                question: 'Can I cancel GST voluntarily?',
                answer: 'Yes, you can apply for voluntary cancellation if you close your business, transfer business, or turnover falls below threshold and you don\'t want to continue.'
            },
            {
                question: 'What is GSTR-10?',
                answer: 'GSTR-10 is the final return that must be filed within 3 months of cancellation date, declaring closing stock and other details as on the date of cancellation.'
            }
        ]
    },

    'Accounting': {
        description: `Professional accounting and bookkeeping services ensure accurate financial record-keeping, compliance with accounting standards, and timely financial reporting. From day-to-day transaction recording to financial statement preparation, we provide comprehensive accounting solutions for businesses of all sizes.`,
        benefits: [
            'Accurate financial records',
            'Compliance with accounting standards',
            'Timely financial statements',
            'Better business decision making',
            'Tax planning and savings',
            'Audit readiness',
            'Cash flow management',
            'Professional financial reporting',
            'Statutory compliance',
            'Cost optimization'
        ],
        documents: [
            'Business registration documents',
            'Bank statements',
            'Sales and purchase invoices',
            'Expense bills and receipts',
            'Salary and payroll records',
            'Asset and liability details',
            'Previous financial statements',
            'Tax payment challans',
            'Loan and investment documents'
        ],
        process: [
            'Initial consultation and requirement gathering',
            'Chart of accounts setup',
            'Daily transaction recording',
            'Bank reconciliation',
            'Expense categorization',
            'Monthly financial reporting',
            'Year-end closing entries',
            'Financial statements preparation'
        ],
        timeline: 'Ongoing monthly service',
        faqs: [
            {
                question: 'What is the difference between bookkeeping and accounting?',
                answer: 'Bookkeeping is the systematic recording of daily transactions. Accounting involves analyzing, interpreting, and presenting financial data for decision-making.'
            },
            {
                question: 'Do I need an accountant for a small business?',
                answer: 'Yes, even small businesses benefit from professional accounting for accurate GST filing, ITR filing, and maintaining statutory records.'
            }
        ]
    },

    'TDS Return Filing': {
        description: `Tax Deducted at Source (TDS) return filing is mandatory for individuals/businesses who deduct tax at source on payments like salary, rent, professional fees, etc. TDS returns (24Q, 26Q, 27Q, 27EQ) must be filed quarterly. We ensure accurate TDS computation, challan payment, and timely return filing.`,
        benefits: [
            'Compliance with TDS provisions',
            'Avoid TDS penalties and interest',
            'Issue Form 16/16A to deductees',
            'Maintain good compliance record',
            'Required for higher value transactions',
            'Proper credit to deductees',
            'Professional tax management',
            'Audit requirement fulfillment'
        ],
        documents: [
            'TAN of the deductor',
            'Payment details (salary, rent, professional fees)',
            'PAN of deductees',
            'TDS challan payment proof (Form 26AS)',
            'Deductee bank account details',
            'Previous TDS returns',
            'Correction statements (if any)',
            'Digital signature certificate'
        ],
        process: [
            'Calculate TDS liability',
            'Deduct TDS as per applicable rates',
            'Deposit TDS through challan 281',
            'Prepare quarterly TDS return',
            'Upload return on TRACES portal',
            'Download and verify Form 26AS',
            'Issue TDS certificates (16/16A)'
        ],
        timeline: 'Quarterly filing (by 31st of next month)',
        faqs: [
            {
                question: 'What are the different types of TDS returns?',
                answer: '24Q (salary), 26Q (non-salary payments to residents), 27Q (payments to non-residents), 27EQ (tax collected at source).'
            },
            {
                question: 'What is the penalty for late TDS filing?',
                answer: 'Late filing attracts a penalty of ₹200 per day until filed. If tax is deducted but not deposited, penalty is amount of TDS plus interest @1.5% per month.'
            }
        ]
    },

    'Professional Tax Registration': {
        description: `Professional Tax Registration is state-specific registration for businesses and professionals liable to pay professional tax. Employers must register and deduct professional tax from employee salaries above the threshold limit and remit it to the state government. Each state has different thresholds and tax slabs.`,
        benefits: [
            'Legal compliance with state PT laws',
            'Deduction allowed under Income Tax',
            'Avoid penalties and prosecution',
            'Required for company registration',
            'Employer statutory compliance',
            'Professional credibility',
            'Government tender requirement',
            'State-specific benefits'
        ],
        documents: [
            'Professional Tax enrollment application',
            'PAN Card of business',
            'Business registration certificate',
            'GST registration certificate',
            'List of employees',
            'Rent agreement/ownership proof',
            'Address proof of business',
            'Bank account details'
        ],
        process: [
            'Check PT applicability in your state',
            'Fill state-specific application form',
            'Submit required documents',
            'Pay registration/enrollment fee',
            'Receive PT registration certificate',
            'Deduct PT from employee salaries',
            'File monthly/annual PT returns'
        ],
        timeline: '10-15 working days',
        faqs: [
            {
                question: 'In which states is PT applicable?',
                answer: 'PT is applicable in most states except Delhi, Haryana, Uttarakhand, UP, Rajasthan, HP, Punjab, and J&K. Rates vary from ₹200-2,500 annually.'
            },
            {
                question: 'Is PT registration mandatory?',
                answer: 'Yes, if you\'re an employer and employee salaries exceed the prescribed limit, PT registration is mandatory. Professionals also need to register if income exceeds limits.'
            }
        ]
    },

    'Trademark Registration': {
        description: `Trademark Registration provides legal protection to your brand name, logo, or tagline. It gives exclusive rights to use the mark and prevents unauthorized usage by competitors. Registered trademarks can be used with ® symbol and are valid for 10 years (renewable indefinitely).`,
        benefits: [
            'Exclusive rights to use the trademark',
            'Legal protection against infringement',
            'Brand value and recognition',
            'Competitive advantage',
            'Can be licensed or franchised',
            'Intellectual property asset',
            'Valid for 10 years (renewable)',
            'Nationwide protection',
            'Use ® symbol'
        ],
        documents: [
            'Trademark logo/wordmark',
            'Applicant ID proof (Aadhaar/PAN)',
            'Business registration certificate',
            'Address proof of applicant',
            'Authorized signatory details',
            'POA (if filed through agent)',
            'User affidavit (for claiming prior use)',
            'Trademark search report'
        ],
        process: [
            'Trademark search and clearance',
            'Class selection (45 classes available)',
            'Filing TM application (TM-A form)',
            'Examination by Registrar',
            'Publication in TM Journal',
            'Opposition period (4 months)',
            'Registration and certificate issuance'
        ],
        timeline: '12-18 months',
        faqs: [
            {
                question: 'Can I use TM before registration?',
                answer: 'Yes, you can use TM (™) symbol when application is filed. After registration, you can use registered (®) symbol.'
            },
            {
                question: 'How long does trademark protection last?',
                answer: 'Trademark is valid for 10 years from filing date and can be renewed indefinitely every 10 years by paying renewal fees.'
            }
        ]
    },

    'ISO 9001-2015': {
        description: `ISO 9001:2015 is an internationally recognized Quality Management System (QMS) certification that demonstrates your organization's commitment to quality products/services and customer satisfaction. It helps improve processes, reduce waste, and enhance business credibility for domestic and international operations.`,
        benefits: [
            'International recognition and credibility',
            'Improved operational efficiency',
            'Better customer satisfaction',
            'Required for government tenders',
            'Competitive advantage',
            'Process standardization',
            'Reduced waste and costs',
            'Global market access',
            'Continuous improvement culture',
            'Enhanced employee morale'
        ],
        documents: [
            'Company registration certificate',
            'Quality policy and objectives',
            'Organizational structure',
            'Process flowcharts',
            'Standard Operating Procedures (SOPs)',
            'Work instructions and forms',
            'Customer and supplier lists',
            'Calibration certificates',
            'Previous audit reports (if any)'
        ],
        process: [
            'Gap analysis and readiness assessment',
            'Quality Management System documentation',
            'Implementation of QMS processes',
            'Internal audit and management review',
            'Application to certification body',
            'Stage 1 audit (documentation review)',
            'Stage 2 audit (implementation audit)',
            'Certification and registration'
        ],
        timeline: '3-6 months',
        faqs: [
            {
                question: 'What is the validity of ISO 9001 certificate?',
                answer: 'ISO 9001 certificate is valid for 3 years. Annual surveillance audits are conducted to ensure continued compliance.'
            },
            {
                question: 'Can small businesses get ISO certified?',
                answer: 'Yes, ISO 9001 is applicable to organizations of all sizes. There are consultants who specialize in helping small businesses achieve certification.'
            }
        ]
    }
};

// Export service images mapping
export const serviceImages = {
    'Proprietorship': '/img/proprietorship.png',
    'Partnership': '/img/Partnership-Registration.png',
    'One Person Company': '/img/opc.webp',
    'Limited Liability Partnership': '/img/LLP.png',
    'Private Limited Company': '/img/creg.png',
    'Trust Registration': '/img/Trust.png',
    'Society Registration': '/img/Trust.png',
    'Digital Signature': '/img/digital-signature-india.png',
    'Udyam Registration': '/img/UDYAM-Registration.webp',
    'Startup India Registration': '/img/startup.png',
    'FSSAI Registration': '/img/FSSAI_Registration.png',
    'Professional Tax': '/img/Professional_Tax.png',
    'Darpan Registration': '/img/darpan-registration.png',
    'RCMC Registration': '/img/RCMC-Registration.jpg',
    'Halal Certificate': '/img/Halal-Certificate.jpg',
    'Import Export Code': '/img/import_export_india.png',
    'Trade License': '/img/Trade-License.png',
    'GST Registration': '/img/GST-Registration-software-india.jpg',
    'GST Filing': '/img/gst1.png',
    'LUT Filing Under GST': '/img/gst2.png',
    'ITR Filing': '/img/income-Tax-e-Filing-india.png',
    'GST Cancellation': '/img/GST-Notice.jpg',
    'Accounting': '/img/account.jpeg',
    'TDS Return Filing': '/img/tds-return-filing-india.png',
    'Professional Tax Registration': '/img/Professional_Tax.png',
    'Trademark Registration': '/img/Trademark.webp',
    'ISO 9001-2015': '/img/iso.png',
};
