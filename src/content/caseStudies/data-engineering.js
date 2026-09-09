// Case Study Content for Data Engineering
import heroEtl from '../../assets/images/blog/logistics-blog-title-08.webp';
import heroGrid from '../../assets/images/industires/energy-utilities.webp';
import sidebarImg from '../../assets/images/case-studies/case-studies-sidebar.png';

export const etlEltDevelopmentData = {
  categorySlug: 'data-engineering',
  categoryName: 'Data Engineering',
  slug: 'etl-elt-development',
  metaTitle: 'ETL & ELT Development Case Study | KGS',
  metaDescription: 'See how KGS built 60+ ETL and ELT workflows processing 25M+ records daily from 30+ data sources with 99.9% pipeline availability target.',
  tag: 'Data Engineering',
  title: 'A Global Enterprise Built 60+ ETL and ELT Workflows to Process 25M+ Records Daily Across Its Modern Data Environment',
  heroImage: heroEtl,
  heroImageAlt: 'Freight and logistics operations data pipelines',
  aboutClient: {
    title: 'About The Client',
    body: 'The client is a global enterprise managing large volumes of customer, financial, operational, and transactional data across multiple business functions. Information originated from ERP and CRM platforms, databases, cloud applications, APIs, and legacy systems, with different teams relying on this data for reporting and analytics. Existing data transformation processes had developed independently and required significant maintenance as sources and volumes increased. The organisation needed scalable ETL and ELT development to automate data extraction, loading, and transformation while improving data quality, processing reliability, and availability for downstream analytics.'
  },
  stats: [
    { count: '60', symbol: '+', label: 'ETL & ELT Workflows Developed' },
    { count: '25', symbol: 'M+', label: 'Records Processed Daily' },
    { count: '30', symbol: '+', label: 'Data Sources Integrated' },
    { count: '99.9', symbol: '%', label: 'Pipeline Availability Target' }
  ],
  challenge: {
    heading: 'The Challenge',
    paragraphs: [
      'Data existed in diverse formats across cloud applications, on-premises databases, ERP systems, third-party platforms, and flat files with varying update frequencies.',
      'Different business units had built their own transformation scripts and scheduled jobs, creating inconsistent data definitions and frequent maintenance issues.',
      'Pipeline failures often went undetected until business teams noticed missing or incorrect numbers in analytics dashboards.',
      'Batch pipelines struggled to keep pace as daily data volumes grew, causing processing delays that affected morning operational reports.',
      'Transformations were tightly coupled to source-system schemas, meaning minor upstream schema changes frequently broke downstream reports.',
      'The client needed a modern, resilient data integration framework that applied ETL and ELT appropriately based on workload requirements.'
    ]
  },
  solution: {
    heading: 'What Did KGS Do',
    paragraphs: [
      'KGS evaluated the client\'s source systems, data volumes, ingestion frequencies, downstream analytics requirements, and existing pipeline architectures.',
      'A hybrid ETL/ELT architecture was designed, using ELT for cloud data warehouse workloads requiring high transformation flexibility and ETL for workloads requiring upfront cleansing, masking, or compliance filtering.',
      'More than 60 modular, reusable data pipelines were built using modern orchestration and transformation frameworks, integrating data from 30+ enterprise sources.',
      'Automated data validation checks were embedded at ingestion and transformation stages to detect anomalies, schema changes, and missing data before records reached analytics layers.',
      'Comprehensive monitoring and alerting were established to track pipeline performance, data freshness, row counts, and error states in real time.'
    ]
  },
  sidebarImage: sidebarImg,
  results: {
    heading: 'The Results',
    items: [
      'Developed and deployed <b>60+ robust ETL & ELT pipelines</b>',
      'Processed <b>25M+ records daily</b> with high throughput and reliability',
      'Integrated information from <b>30+ heterogeneous enterprise data sources</b>',
      'Achieved a <b>99.9% pipeline availability</b> target across all core workloads',
      'Reduced data transformation cycle times by <b>50%</b> through modern ELT models',
      'Significantly reduced manual maintenance effort with automated monitoring and alerting'
    ]
  },
  testimonial: {
    title: 'What did the client say?',
    stars: 5,
    quote: 'KGS helped us standardise data transformation processes that had developed independently across our environment. We now use ETL and ELT based on the requirements of each workload, rather than relying on a single approach for everything. Processing is more structured, failures are easier to identify, and our analytics teams receive more consistent data from across the business.',
    author: 'VP of Data Engineering',
    company: 'Global Enterprise'
  },
  exploreMore: [
    {
      image: heroGrid,
      imgAlt: 'Grid operations infrastructure',
      tag: 'Success story',
      title: 'A Multi-Region Utility Provider Improved Visibility Across 100,000+ Grid Assets',
      categorySlug: 'data-engineering',
      slug: 'grid-operations'
    },
    {
      image: heroEtl,
      imgAlt: 'ETL development',
      tag: 'Success story',
      title: 'A Global Enterprise Built 60+ ETL and ELT Workflows to Process 25M+ Records Daily',
      categorySlug: 'data-engineering',
      slug: 'etl-elt-development'
    }
  ]
};

export const gridOperationsData = {
  categorySlug: 'data-engineering',
  categoryName: 'Data Engineering',
  slug: 'grid-operations',
  metaTitle: 'Grid Operations Case Study | KGS',
  metaDescription: 'See how KGS helped a multi-region utility provider monitor 100,000+ grid assets, integrate 25+ data sources, and accelerate incident response by 30%.',
  tag: 'Data Engineering',
  title: 'A Multi-Region Utility Provider Improved Visibility Across 100,000+ Grid Assets',
  heroImage: heroGrid,
  heroImageAlt: 'Utility grid operations infrastructure',
  aboutClient: {
    title: 'About The Client',
    body: 'The client is a large energy and utility provider managing electricity distribution infrastructure across multiple service regions. Its grid operations teams were responsible for monitoring substations, transformers, feeders, distribution equipment, and other critical network assets. Operational information came from grid management platforms, asset systems, field applications, GIS environments, and monitoring systems. As the network expanded, fragmented information and manual coordination made it harder to maintain a consistent view of grid conditions, incidents, and field activities. The organisation needed a scalable grid operations model to improve operational visibility, strengthen data management, coordinate field response, and support more efficient management of its distribution network.'
  },
  stats: [
    { count: '100,000', symbol: '+', label: 'Grid Assets Monitored' },
    { count: '25', symbol: '+', label: 'Operational Data Sources Integrated' },
    { count: '30', symbol: '%', label: 'Faster Incident Response' },
    { count: '35', symbol: '%', label: 'Reduction in Manual Operational Effort' }
  ],
  challenge: {
    heading: 'The Challenge',
    paragraphs: [
      'Grid telemetry, sensor data, field reports, weather feeds, and asset histories were distributed across separate operational technology (OT) and information technology (IT) systems.',
      'Control room operators spent considerable time switching between disparate applications to piece together situational awareness during outages and network stress events.',
      'Sensor data streams generated high volumes of time-series records that legacy systems could not process or visualize in near real-time.',
      'Field crews often lacked timely, enriched operational data when dispatched, leading to longer restoration times.',
      'Asset maintenance teams struggled to correlate operational telemetry with historical asset degradation to prioritize preventive maintenance.',
      'The utility required a unified data engineering solution capable of ingesting high-frequency grid data, standardising asset records, and delivering real-time operational insights.'
    ]
  },
  solution: {
    heading: 'What Did KGS Do',
    paragraphs: [
      'KGS analyzed the utility\'s SCADA networks, smart meter infrastructure, GIS systems, outage management systems (OMS), and asset management databases.',
      'A scalable real-time and batch data pipeline architecture was established to ingest, parse, and harmonize telemetry from 100,000+ grid assets and smart devices.',
      'Time-series data pipelines were implemented to process sensor readings, voltage fluctuations, load profiles, and fault logs with sub-second latency.',
      'Asset identifiers and spatial coordinates were reconciled across GIS and operational databases to create a unified topological view of the distribution grid.',
      'Operational dashboards and alert feeds were deployed for control room teams and field supervisors, enabling faster incident triage and proactive dispatching.'
    ]
  },
  sidebarImage: sidebarImg,
  results: {
    heading: 'The Results',
    items: [
      'Centralised monitoring for <b>100,000+ critical grid assets</b> and endpoints',
      'Integrated information from <b>25+ operational OT & IT data sources</b>',
      'Accelerated grid incident response and restoration by <b>30%</b>',
      'Reduced manual operational coordination and reporting effort by <b>35%</b>',
      'Established high-speed ingestion and processing for real-time sensor telemetry',
      'Provided unified operational intelligence for control room operators and field crews'
    ]
  },
  testimonial: {
    title: 'What did the client say?',
    stars: 5,
    quote: 'KGS helped us create a much clearer operational view across systems that previously provided separate pieces of grid information. Our teams can identify affected assets and outstanding actions more efficiently, while field updates are reflected more consistently across operations. This has reduced manual coordination and helped us respond more effectively when network issues occur.',
    author: 'VP, Grid Operations',
    company: 'Multi-Region Energy & Utility Provider'
  },
  exploreMore: [
    {
      image: heroEtl,
      imgAlt: 'ETL development',
      tag: 'Success story',
      title: 'A Global Enterprise Built 60+ ETL and ELT Workflows to Process 25M+ Records Daily',
      categorySlug: 'data-engineering',
      slug: 'etl-elt-development'
    },
    {
      image: heroGrid,
      imgAlt: 'Grid operations',
      tag: 'Success story',
      title: 'A Multi-Region Utility Provider Improved Visibility Across 100,000+ Grid Assets',
      categorySlug: 'data-engineering',
      slug: 'grid-operations'
    }
  ]
};
