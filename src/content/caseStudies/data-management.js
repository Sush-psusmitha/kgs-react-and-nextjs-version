// Case Study Content for Data Management
import heroBankGrc from '../../assets/images/blog/finance-blog-title-05.webp';
import heroEnergy from '../../assets/images/industires/ind-04-energy-utilities.webp';
import heroAsset from '../../assets/images/industires/energy-utilities.webp';
import heroFinData from '../../assets/images/blog/finance-blog-title-02.webp';
import sidebarImg from '../../assets/images/case-studies/case-studies-sidebar.png';

export const bankingGovernanceRiskAndComplianceData = {
  categorySlug: 'data-management',
  categoryName: 'Data Management',
  slug: 'banking-governance-risk-and-compliance',
  metaTitle: 'Banking Governance, Risk & Compliance Case Study | KGS',
  metaDescription: 'See how KGS helped a global bank standardise 150+ risk & compliance controls, assess 50+ business processes, and review 2,500+ compliance records.',
  tag: 'Data Management',
  title: 'A Global Bank Standardised 150+ Risk & Compliance Controls',
  heroImage: heroBankGrc,
  heroImageAlt: 'Banking governance, risk and compliance',
  aboutClient: {
    title: 'About The Client',
    body: 'The client is a large banking and financial services institution operating across multiple business units, products, and markets. Its risk and compliance teams managed regulatory requirements, internal controls, risk assessments, compliance reviews, documentation, and remediation activities across a complex operating environment. As regulatory obligations and transaction volumes increased, fragmented processes made it harder to maintain consistent oversight across functions. The institution needed a structured risk and compliance model to centralise control monitoring, improve risk visibility, strengthen documentation, and support ongoing regulatory readiness.'
  },
  stats: [
    { count: '150', symbol: '+', label: 'Risk & Compliance Controls Managed' },
    { count: '50', symbol: '+', label: 'Business Processes Assessed' },
    { count: '2,500', symbol: '+', label: 'Compliance Records Reviewed' },
    { count: '100', symbol: '%', label: 'Priority Findings Mapped for Remediation' }
  ],
  challenge: {
    heading: 'The Challenge',
    paragraphs: [
      'Risk and compliance information was maintained in separate spreadsheets, departmental tools, and legacy systems across retail, commercial, and wealth management units.',
      'Control testing and evidence collection were largely manual, creating heavy administrative burdens during internal and external regulatory audits.',
      'Risk definitions and severity ratings varied across entities, making it difficult for executive leadership to obtain an enterprise-wide risk posture.',
      'Tracking remediation actions for audit findings was fragmented, with deadlines and ownership frequently lacking centralized oversight.',
      'Regulatory reporting required substantial manual data aggregation and reconciliation from multiple transaction and compliance systems.',
      'The bank needed a consolidated data governance and compliance management framework to standardise controls, automate evidence tracking, and enhance risk transparency.'
    ]
  },
  solution: {
    heading: 'What Did KGS Do',
    paragraphs: [
      'KGS conducted an end-to-end evaluation of the bank\'s regulatory obligations, risk taxonomies, control frameworks, and compliance reporting requirements.',
      'More than 150 critical risk and compliance controls across 50+ core business processes were harmonized and brought into a unified data governance model.',
      'Structured evidence-gathering workflows and validation checkpoints were instituted, reviewing over 2,500 compliance records to ensure data integrity and completeness.',
      'KGS implemented standardized risk rating matrices and remediation tracking dashboards, ensuring that 100% of priority audit findings were assigned clear ownership and milestone schedules.',
      'Automated compliance reporting pipelines were established to pull validated data directly from source systems, significantly reducing manual compilation efforts for regulatory filings.'
    ]
  },
  sidebarImage: sidebarImg,
  results: {
    heading: 'The Results',
    items: [
      'Standardised and managed <b>150+ risk & compliance controls</b> enterprise-wide',
      'Assessed and documented <b>50+ critical banking processes</b>',
      'Reviewed and validated <b>2,500+ compliance records</b> with high accuracy',
      'Mapped and tracked <b>100% of priority audit findings</b> for active remediation',
      'Reduced audit preparation time by <b>40%</b> through centralized evidence management',
      'Established real-time executive dashboards for enterprise-wide risk visibility'
    ]
  },
  testimonial: {
    title: 'What did the client say?',
    stars: 5,
    quote: 'KGS helped us establish a more consistent view of risk and compliance across business functions that previously maintained their own processes and documentation. Controls and supporting evidence are easier to track, findings have clearer ownership, and management has much better visibility into remediation progress and areas requiring attention.',
    author: 'Chief Risk & Compliance Officer',
    company: 'Banking & Financial Services Institution'
  },
  exploreMore: [
    {
      image: heroEnergy,
      imgAlt: 'Energy data management',
      tag: 'Success story',
      title: 'A Multi-Region Energy Provider Standardised 20M+ Energy Records',
      categorySlug: 'data-management',
      slug: 'energy-data-management'
    },
    {
      image: heroFinData,
      imgAlt: 'Financial data management',
      tag: 'Success story',
      title: 'A Global Financial Institution Standardised 10M+ Financial Records',
      categorySlug: 'data-management',
      slug: 'financial-data-management'
    },
    {
      image: heroAsset,
      imgAlt: 'Utility asset management',
      tag: 'Success story',
      title: 'A Utility Provider Centralised 250,000+ Asset Records',
      categorySlug: 'data-management',
      slug: 'utility-asset-management'
    }
  ]
};

export const energyDataManagementData = {
  categorySlug: 'data-management',
  categoryName: 'Data Management',
  slug: 'energy-data-management',
  metaTitle: 'Energy Data Management Case Study | KGS',
  metaDescription: 'See how KGS standardised 20M+ energy data records, integrated 40+ data sources, achieved 99%+ data accuracy, and reduced data exceptions by 45%.',
  tag: 'Data Management',
  title: 'A Multi-Region Energy Provider Standardised 20M+ Energy Records',
  heroImage: heroEnergy,
  heroImageAlt: 'Energy data management operations',
  aboutClient: {
    title: 'About The Client',
    body: 'The client is a large energy and utility provider serving residential, commercial, and industrial customers across multiple regions. Its operations generated significant volumes of meter, consumption, asset, billing, customer, and operational data every day. Information was distributed across meter data management systems, customer information systems, asset platforms, billing applications, and legacy databases. As data volumes increased, inconsistencies and fragmented records made reporting, reconciliation, and operational analysis more difficult. The organization needed a scalable energy data management model to standardise critical information, improve data quality, integrate multiple sources, and create a reliable foundation for operations, billing, reporting, and analytics.'
  },
  stats: [
    { count: '20', symbol: 'M+', label: 'Energy Data Records Managed' },
    { count: '40', symbol: '+', label: 'Data Sources Integrated' },
    { count: '99', symbol: '%+', label: 'Data Accuracy' },
    { count: '45', symbol: '%', label: 'Reduction in Data Exceptions' }
  ],
  challenge: {
    heading: 'The Challenge',
    paragraphs: [
      'The organisation generated large volumes of data across meters, customers, assets, field operations, billing processes, and energy consumption activities.',
      'However, information was spread across multiple operational and enterprise systems. Customer identifiers, meter records, asset information, consumption data, and billing records did not always align across platforms.',
      'Meter and consumption data created particular challenges. Missing readings, duplicate records, unexpected values, and inconsistencies between meter and customer information required investigation before downstream processes could continue.',
      'Data quality issues could also affect billing and reporting. Incorrect meter-to-account relationships or incomplete consumption information created additional reconciliation work for operational teams.',
      'Legacy systems added further complexity. Historical energy and customer information remained valuable, but different data structures made integration with modern platforms difficult.',
      'The organisation needed a structured data management framework capable of handling high-volume energy information while maintaining accuracy, consistency, and traceability across connected processes.'
    ]
  },
  solution: {
    heading: 'What Did KGS Do',
    paragraphs: [
      'KGS began by assessing the client\'s energy data landscape, source systems, data flows, record structures, quality issues, integration requirements, and existing governance processes.',
      'More than 20 million meter, consumption, customer, asset, billing, and operational records were brought within structured data management workflows.',
      'Information from 40+ source systems was mapped and standardised around agreed data definitions and formats. Validation controls identified missing values, duplicate records, inconsistent identifiers, unexpected consumption information, and other quality issues.',
      'KGS strengthened relationships between meter, customer, account, asset, and consumption records to improve consistency across operational systems. Reconciliation workflows helped identify differences between meter data, billing information, customer records, and other connected datasets, with exceptions categorised and routed to the appropriate operational teams for investigation.',
      'Data quality monitoring and reporting provided visibility into recurring issues, exception volumes, source-system performance, and remediation progress.'
    ]
  },
  sidebarImage: sidebarImg,
  results: {
    heading: 'The Results',
    items: [
      'Managed and standardised <b>20M+ energy and utility data records</b>',
      'Integrated information from <b>40+ operational and enterprise data sources</b>',
      'Maintained <b>99%+ accuracy</b> across targeted energy datasets',
      'Reduced recurring data exceptions by <b>45%</b>',
      'Improved consistency across meter, consumption, customer, asset, and billing information',
      'Created a stronger data foundation for energy operations, reporting, and analytics'
    ]
  },
  testimonial: {
    title: 'What did the client say?',
    stars: 5,
    quote: 'KGS helped us establish much greater consistency across energy data that previously sat in different systems and formats. Meter, customer, consumption, and billing information is now easier to reconcile, and data issues are identified through a much more structured process. Our teams spend less time correcting information and have greater confidence in the data supporting operations and reporting.',
    author: 'Chief Data Officer',
    company: 'Multi-Region Energy & Utility Provider'
  },
  exploreMore: [
    {
      image: heroBankGrc,
      imgAlt: 'Banking governance, risk and compliance',
      tag: 'Success story',
      title: 'A Global Bank Standardised 150+ Risk & Compliance Controls',
      categorySlug: 'data-management',
      slug: 'banking-governance-risk-and-compliance'
    },
    {
      image: heroFinData,
      imgAlt: 'Financial data management operations',
      tag: 'Success story',
      title: 'A Global Financial Institution Standardised 10M+ Financial Records',
      categorySlug: 'data-management',
      slug: 'financial-data-management'
    },
    {
      image: heroAsset,
      imgAlt: 'Utility asset management infrastructure',
      tag: 'Success story',
      title: 'A Utility Provider Centralised 250,000+ Asset Records',
      categorySlug: 'data-management',
      slug: 'utility-asset-management'
    }
  ]
};
