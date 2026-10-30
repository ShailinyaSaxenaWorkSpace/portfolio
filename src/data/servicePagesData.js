/**
 * Service Pages Data Catalog for Neudact Engineers
 * Contains technical metadata, delivery transparency, schema configs,
 * and comprehensive service details for GEO, AEO, and SEO optimization.
 */

export const SERVICE_PAGES = {
  'tender-management-india': {
    slug: 'tender-management-india',
    path: '/services/tender-management-india',
    title: 'Tender Management & Procurement Support in India | Neudact Engineers',
    metaTitle: 'Tender Management & Public Procurement Services in India — Neudact Engineers',
    metaDescription: 'End-to-end tender management, NIT/RFP evaluation, eligibility audits, compliance matrix preparation, and bid documentation support for Indian public procurement.',
    h1: 'Tender Management & Public Procurement Support in India',
    deliveryType: 'Direct Delivery',
    deliveryBadgeClass: 'badge-direct',
    category: 'Tender Management & Procurement Support',
    summary: 'Comprehensive bid research, qualification audit, and line-by-line compliance compilation across GeM, CPPP, and State e-Procurement portals.',
    targetAudience: 'EPC contractors, MSME suppliers, civil infrastructure firms, technical service vendors, and equipment manufacturers participating in Indian central and state public tenders.',
    scopeItems: [
      'Daily tender tracking and NIT isolation across Central Public Procurement Portal (CPPP), GeM, and State e-tendering platforms.',
      'Comprehensive Pre-Qualification (PQ) analysis: average annual turnover, net worth, single/similar work criteria, and solvency review.',
      'Clause-by-clause compliance matrix preparation covering technical specifications, special conditions of contract (SCC), and general conditions (GCC).',
      'Bid dossier compilation: undertakings, formats, power of attorney templates, litigation histories, and joint venture (JV) documentation.',
      'EMD (Earnest Money Deposit) & Performance Bank Guarantee (PBG) format verification.',
      'Pre-bid query formulation and corrigenda impact assessments.'
    ],
    deliverables: [
      'Comprehensive Tender Feasibility & Qualification Scorecard (PDF/Excel).',
      'Line-by-Line Technical & Commercial Compliance Matrix (Excel).',
      'Cover-wise Indexed Bid Document Dossier ready for digital signature (DSC) upload.',
      'Pre-Bid Clarification Letter Draft for submitting to the tendering authority.'
    ],
    methodology: 'Our methodology combines automated tender parameter scanning with senior bid-specialist human verification. Every NIT clause is scrutinized against Indian contract law standards and CVC (Central Vigilance Commission) guidelines, eliminating disqualification risks from missing documentation or non-compliant undertakings.',
    responsibilities: {
      direct: 'All tender identification, eligibility analysis, compliance sheets, bid document structuring, and verification checklists are executed directly in-house by Neudact Engineers.',
      partner: 'For bids requiring statutory CA certification (turnover, net worth certificates), client chartered accountants or verified statutory auditors validate financial figures.'
    },
    technicalTerms: [
      'Notice Inviting Tender (NIT)', 'Pre-Qualification (PQ) Criteria', 'General Conditions of Contract (GCC)',
      'Special Conditions of Contract (SCC)', 'Earnest Money Deposit (EMD)', 'Performance Bank Guarantee (PBG)',
      'Manufacturer Authorization Form (MAF)', 'Central Public Procurement Portal (CPPP)', 'Government e-Marketplace (GeM)'
    ],
    faqs: [
      {
        q: 'How does Neudact prevent technical disqualification during bid evaluation?',
        a: 'We conduct a dual-pass verification audit. First, we generate a clause-by-clause compliance matrix covering every single requirement of the NIT. Second, an independent reviewer verifies all uploaded annexures against the exact wording requested by the tendering authority before digital signature token submission.'
      },
      {
        q: 'Do you assist with pre-bid queries and representation?',
        a: 'Yes. When tender conditions contain restrictive or ambiguous clauses that conflict with standard procurement norms (such as unreasonable turnover requirements or biased proprietary specs), we draft structured pre-bid representation letters grounded in CVC guidelines and public procurement directives.'
      },
      {
        q: 'Can Neudact guarantee that our bid will win?',
        a: 'No reputable engineering consultant can guarantee a commercial win, as final price bidding (L1) and agency awards depend on contractor pricing and market competition. Neudact guarantees complete technical, financial, and procedural qualification compliance, ensuring your bid is never rejected on non-responsive grounds.'
      }
    ],
    relatedServices: [
      { title: 'Railway Tender & IREPS Support', path: '/services/railway-tender-ireps-support' },
      { title: 'Custom Software Development', path: '/services/custom-software-development' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' }
    ]
  },

  'railway-tender-ireps-support': {
    slug: 'railway-tender-ireps-support',
    path: '/services/railway-tender-ireps-support',
    title: 'Railway Tender Documentation & IREPS Support | Neudact Engineers',
    metaTitle: 'Railway Tender Management & IREPS Support — Neudact Engineers',
    metaDescription: 'Specialized Indian Railways e-Procurement System (IREPS) bidding support, RDSO compliance, BOQ Excel analysis, and automated tender dossier compilation.',
    h1: 'Railway Tender Documentation & IREPS Bid Support',
    deliveryType: 'Direct Delivery',
    deliveryBadgeClass: 'badge-direct',
    category: 'Tender Management & Procurement Support',
    summary: 'Specialized railway procurement engineering, RDSO / CORE / RVNL / IRCON tender review, IREPS dossier compilation, and automated document harvesting.',
    targetAudience: 'Signaling contractors, overhead electrification (OHE) vendors, track-work engineering firms, telecom contractors, and RDSO-approved railway suppliers.',
    scopeItems: [
      'IREPS portal monitoring across all 17 Railway Zones, Production Units, RVNL, IRCON, DFCCIL, and KRCL.',
      'Automated batch downloading and checksum verification of massive railway tender dossiers via our internal IREPS Harvester tool.',
      'RDSO (Research Designs & Standards Organisation) and IRS (Indian Railway Standard) specification review.',
      'Schedule of Rates (SOR) and Bill of Quantities (BOQ) line-item extraction into structured pricing spreadsheets.',
      'Similar work experience and credential matching according to Indian Railways Standard General Conditions of Contract.',
      'Technical proposal formatting including key personnel, equipment deployment schedules, and site safety plans.'
    ],
    deliverables: [
      'Complete IREPS Tender Dossier with validated, checksummed attachments.',
      'Structured BOQ Pricing & Margin Simulation Worksheet (Excel).',
      'RDSO / Spec Compliance Declaration Dossier.',
      'Key Personnel & Machinery Deployment Matrix formatted per railway templates.'
    ],
    methodology: 'Railway tenders feature some of the strictest qualification conditions in Indian public infrastructure. We deploy our proprietary IREPS Harvester to download and catalog all technical drawing sheets, addenda, and corrigenda. Each requirement is mapped to Indian Railways Unified Standard Specifications (USSOR) and verified against railway circulars.',
    responsibilities: {
      direct: 'All tender harvesting, technical document verification, compliance compilation, and railway BOQ sheets are handled directly by Neudact Engineers.',
      partner: 'Statutory approvals, RDSO vendor registration filings, and site execution remain the operational responsibility of the bidding entity.'
    },
    technicalTerms: [
      'IREPS (Indian Railways e-Procurement System)', 'RDSO Specifications', 'DFCCIL', 'RVNL',
      'USSOR (Unified Standard Schedule of Rates)', 'OHE (Overhead Electrification)',
      'Signal & Telecommunication (S&T)', 'Earnest Money via IREPS Gateway', 'Cover 1 Technical Packet'
    ],
    faqs: [
      {
        q: 'How does your IREPS Tender Harvester help railway contractors?',
        a: 'Complex railway tenders frequently contain 20 to 50 individual PDF drawing sheets, tender booklets, and multiple corrigenda scattered across IREPS. Our internal harvester downloads all documents in parallel, validates SHA-256 integrity, detects corrupt files, and indexes them into organized folders, saving up to 5 hours of manual document sorting per tender.'
      },
      {
        q: 'Do you help contractors evaluate similar work eligibility under Railway GCC?',
        a: 'Yes. Indian Railways applies specific clauses for qualifying work credentials (e.g., 60% of tender value in single work, or 40% in two works). We analyze your past completion certificates, verify employer authority credentials, and confirm compliance with the latest Railway GCC provisions.'
      }
    ],
    relatedServices: [
      { title: 'Tender Management in India', path: '/services/tender-management-india' },
      { title: 'Telecom & Networking Solutions', path: '/services/telecom-networking-solutions' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' }
    ]
  },

  'custom-software-development': {
    slug: 'custom-software-development',
    path: '/services/custom-software-development',
    title: 'Custom Software Development for Engineering & B2B | Neudact Engineers',
    metaTitle: 'Custom Software & Enterprise Web Applications — Neudact Engineers',
    metaDescription: 'Modern, high-performance web applications, internal operational dashboards, milestone portals, and custom software tailored for engineering and contracting firms.',
    h1: 'Custom Software Development & Business Applications',
    deliveryType: 'Direct Delivery',
    deliveryBadgeClass: 'badge-direct',
    category: 'Software, Web Development & Automation',
    summary: 'Tailored enterprise software, project milestone portals, inventory tracking, and client portals built with React, Node.js, and modern relational databases.',
    targetAudience: 'Infrastructure companies, contracting agencies, engineering consultancies, technical service providers, and growing SMEs.',
    scopeItems: [
      'Modern Single-Page Applications (SPA) and server-rendered web portals engineered with React and modern JavaScript.',
      'Internal operations and project milestone management dashboards (e.g., our TenderOps architecture).',
      'Multi-site asset, inventory, and material requisition tracking systems.',
      'Role-based access control (RBAC), multi-tenant security architecture, and audit trail logging.',
      'RESTful API development, webhook integrations, and third-party data synchronization.',
      'Automated PDF invoice, dispatch slip, and engineering report generation.'
    ],
    deliverables: [
      'Production-ready Web Application with clean, modular, and documented codebase.',
      'PostgreSQL or MongoDB database architecture with schema diagrams and migration scripts.',
      'Responsive, accessible user interfaces optimized for desktop workstations and field mobile devices.',
      'Deployment scripts, CI/CD pipelines, and hosting configuration on cloud infrastructure.'
    ],
    methodology: 'We follow a pragmatic, test-driven software engineering methodology. We avoid bloated generic templates and over-engineered frameworks in favor of clean architectures, typed data contracts, and rapid response latencies. Every interface is built for operational utility under real field conditions.',
    responsibilities: {
      direct: 'Full-stack software architecture, UI design, database modeling, frontend & backend programming, and testing are performed directly by Neudact Engineers.',
      partner: 'Cloud hosting infrastructure (AWS, Azure, Vercel) is provisioned under client ownership to guarantee zero proprietary lock-in.'
    },
    technicalTerms: [
      'React (Modern Component Architecture)', 'Node.js & Express API', 'PostgreSQL Relational DB',
      'Role-Based Access Control (RBAC)', 'RESTful Endpoints', 'JSON Web Tokens (JWT)',
      'Single-Page Application (SPA)', 'CI/CD Cloud Deployment', 'Audit Logging'
    ],
    faqs: [
      {
        q: 'Do you retain ownership of the developed software code?',
        a: 'No. Upon project completion and final milestone sign-off, all intellectual property, source code, database schemas, and deployment assets are fully transferred to the client with zero vendor lock-in.'
      },
      {
        q: 'Can the software integrate with our existing accounting or ERP systems?',
        a: 'Yes. We build custom API connectors and webhook bridges that can synchronize records, invoices, or dispatch data with existing enterprise software, Excel files, or legacy database systems.'
      }
    ],
    relatedServices: [
      { title: 'Business Process Automation & AI', path: '/services/business-process-automation-ai' },
      { title: 'Tender Management in India', path: '/services/tender-management-india' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' }
    ]
  },

  'business-process-automation-ai': {
    slug: 'business-process-automation-ai',
    path: '/services/business-process-automation-ai',
    title: 'Business Process Automation & AI Solutions | Neudact Engineers',
    metaTitle: 'Business Process Automation & Practical AI Agents — Neudact Engineers',
    metaDescription: 'Practical AI agents, document parsing workflows, automated Telegram/WhatsApp dispatch bots, and Excel ETL data pipelines for contracting businesses.',
    h1: 'Business Process Automation & Practical AI Solutions',
    deliveryType: 'Direct Delivery',
    deliveryBadgeClass: 'badge-direct',
    category: 'Software, Web Development & Automation',
    summary: 'Eliminate manual bottlenecks with document-mining agents, automated notification bots, and verified data pipelines designed for operational workflows.',
    targetAudience: 'Operations managers, procurement teams, project heads, and SME owners seeking to reduce clerical overhead without expensive enterprise software.',
    scopeItems: [
      'Automated document-mining agents for contract clauses, invoice data extraction, and drawing index parsing.',
      'Field operations notification bots via Telegram Bot API and WhatsApp Business Webhooks for real-time site updates.',
      'Automated Excel data cleaning, transformation, and reconciliation pipelines (ETL).',
      'Retrieval-Augmented Generation (RAG) knowledge-retrieval assistants with strict citation verification and human-in-the-loop validation.',
      'Scheduled task monitoring, exception-alerting pipelines, and automated reporting systems.',
      'Integration between Google Sheets, database backends, and operational messaging channels.'
    ],
    deliverables: [
      'Production-configured Automation Scripts or Containerized Bot Services.',
      'Webhook ingestion endpoints with failure-recovery and alerting routines.',
      'Customized Document Parsing & Vector-Retrieval Assistants.',
      'Operational documentation and team usage runbooks.'
    ],
    methodology: 'We build practical, verifiable automation that respects operational realities. Rather than deploying black-box AI models that hallucinate, we implement constrained prompt architectures, deterministic data verification, and human-in-the-loop review mechanisms so that high-stakes business documents are never mishandled.',
    responsibilities: {
      direct: 'All workflow modeling, script automation, API integrations, and AI agent architectures are engineered directly in-house by Neudact Engineers.',
      partner: 'Third-party messaging infrastructure (Telegram, Meta WhatsApp Business Cloud API) is configured under client-registered accounts.'
    },
    technicalTerms: [
      'Retrieval-Augmented Generation (RAG)', 'Semantic Chunking & Embeddings', 'Human-in-the-Loop Verification',
      'Webhook Listeners', 'Telegram Bot API', 'WhatsApp Cloud API', 'ETL Data Pipelines', 'Deterministic Parsers'
    ],
    faqs: [
      {
        q: 'How do you ensure AI agents do not generate inaccurate answers on contracts?',
        a: 'We design our contract assistants with strict grounding constraints. The system retrieves exact verbatim excerpts from the source document, highlights the exact page and paragraph citation, and flags any ambiguous clause for human confirmation rather than making unverified guesses.'
      },
      {
        q: 'Can automation be implemented without replacing our current spreadsheets?',
        a: 'Yes. Most of our clients prefer keeping Excel or Google Sheets as their primary working interface. We build automated background pipelines that read, validate, and update these sheets automatically, preserving existing team workflows.'
      }
    ],
    relatedServices: [
      { title: 'Custom Software Development', path: '/services/custom-software-development' },
      { title: 'Tender Management in India', path: '/services/tender-management-india' },
      { title: 'CCTV & Video Management Systems', path: '/services/cctv-vms-surveillance-solutions' }
    ]
  },

  'solar-plant-sld-design-sourcing': {
    slug: 'solar-plant-sld-design-sourcing',
    path: '/services/solar-plant-sld-design-sourcing',
    title: 'Solar Plant SLD Design & Solar Equipment Sourcing | Neudact Engineers',
    metaTitle: 'Solar Plant SLD Design & Equipment Sourcing — Neudact Engineers',
    metaDescription: 'Single Line Diagram (SLD) engineering schematics via certified partners, Balance of System (BoS) component sourcing, and technical project coordination.',
    h1: 'Solar Plant SLD Design & Solar Equipment Sourcing',
    deliveryType: 'Specialist Partner & Sourced',
    deliveryBadgeClass: 'badge-partner',
    category: 'Solar & Renewable Energy Solutions',
    summary: 'Single Line Diagrams (SLD), array layout schematics, grid interconnection design through qualified partners, and verified Balance of System (BoS) procurement.',
    targetAudience: 'Solar EPC contractors, commercial rooftop developers, industrial plant owners, and renewable project developers.',
    scopeItems: [
      'Solar plant Single Line Diagram (SLD) electrical design executed through qualified engineering partners.',
      'DC string layout, string combiner box (SCB) calculations, and array interconnection schematics.',
      'AC power distribution design, transformer sizing, and HT/LT switchgear coordination.',
      'Procurement coordination for Balance of System (BoS) accessories: DC solar cables, MC4 connectors, lightning arrestors, and earthing materials.',
      'Sourcing support for on-grid, off-grid, and hybrid inverters from certified Tier-1 manufacturers.',
      'Technical coordination with DISCOM interconnection standards and CEA (Central Electricity Authority) guidelines.'
    ],
    deliverables: [
      'Comprehensive Solar Plant Single Line Diagram (SLD) CAD Drawings (PDF & DWG).',
      'Electrical Stringing & Distribution Schematic Schedules.',
      'Bill of Materials (BOM) with manufacturer technical datasheet cross-checks.',
      'Equipment procurement comparison sheets with warranty and certification verification.'
    ],
    methodology: 'Solar projects demand absolute compliance with electrical safety codes (IS/IEC standards). We operate a hybrid delivery model: detailed electrical calculations and SLD drawings are produced in collaboration with certified senior electrical design partners, while Neudact coordinates technical specifications, procurement comparisons, and client delivery.',
    responsibilities: {
      direct: 'Neudact Engineers manages project coordination, BOM compilation, procurement comparison, technical documentation, and delivery management.',
      partner: 'Certified electrical design partners execute and seal licensed Single Line Diagrams (SLDs); Tier-1 equipment manufacturers supply verified hardware.'
    },
    technicalTerms: [
      'Single Line Diagram (SLD)', 'Balance of System (BoS)', 'String Combiner Box (SCB)',
      'HT / LT Substation Interconnection', 'CEA Technical Standards', 'IS / IEC Electrical Codes',
      'Solar String Inverters', 'DC Surge Protection Devices (SPD)'
    ],
    faqs: [
      {
        q: 'Does Neudact directly manufacture solar panels or inverters?',
        a: 'No. Neudact Engineers does not manufacture solar equipment. We act as a technical solutions and sourcing coordinator, identifying certified OEMs, comparing verified test certificates, and managing supply logistics transparently.'
      },
      {
        q: 'Are your SLD drawings compliant with State DISCOM approval requirements?',
        a: 'Yes. All Single Line Diagrams are drafted by qualified electrical engineering partners in full accordance with Central Electricity Authority (CEA) safety guidelines and respective State DISCOM interconnection standards.'
      }
    ],
    relatedServices: [
      { title: 'Telecom & Networking Solutions', path: '/services/telecom-networking-solutions' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' },
      { title: 'Tender Management in India', path: '/services/tender-management-india' }
    ]
  },

  'telecom-networking-solutions': {
    slug: 'telecom-networking-solutions',
    path: '/services/telecom-networking-solutions',
    title: 'Telecom & Networking Infrastructure Solutions | Neudact Engineers',
    metaTitle: 'Telecom & Enterprise Networking Infrastructure — Neudact Engineers',
    metaDescription: 'Fiber-optic distribution (OFC), enterprise switching, routing, SCADA connectivity, and network design delivered through qualified technical partners.',
    h1: 'Telecom & Enterprise Networking Infrastructure Solutions',
    deliveryType: 'Specialist Partner Delivered',
    deliveryBadgeClass: 'badge-partner',
    category: 'Networking & Telecom Infrastructure',
    summary: 'Enterprise network design, optical fiber (OFC) route coordination, structured cabling, switching infrastructure, and plant industrial telemetry.',
    targetAudience: 'Infrastructure companies, industrial manufacturing plants, commercial office campuses, surveillance project contractors, and telecom EPC vendors.',
    scopeItems: [
      'Enterprise local area network (LAN) and wide area network (WAN) topological design.',
      'Fiber-optic distribution (OFC) coordination: route planning, armored fiber specifications, and joint closure verification.',
      'Industrial Ethernet switching and routing hardware selection for harsh physical environments.',
      'Supervisory Control and Data Acquisition (SCADA) telemetry and substation communications.',
      'Structured networking rack layouts, patch panel engineering, and optical time-domain reflectometer (OTDR) testing coordination.',
      'Wireless point-to-point and point-to-multipoint bridge planning for sprawling site perimeters.'
    ],
    deliverables: [
      'Network Architecture & Topology Blueprints (PDF / Visio).',
      'Fiber Route Layout & Splicing Schedules.',
      'Active & Passive Networking Bill of Quantities (BOQ).',
      'Equipment Configuration Runbooks & Acceptance Test Procedures (ATP).'
    ],
    methodology: 'Robust industrial communications require fault-tolerant physical layer infrastructure. Neudact develops the overall networking architecture, defines exact equipment specifications, and partners with qualified field installation teams and certified network engineers for on-site cable laying, splicing, and commissioning.',
    responsibilities: {
      direct: 'Network topology design, technical requirement coordination, procurement specifications, and client liaison are handled directly by Neudact Engineers.',
      partner: 'On-site fiber pulling, trenching, fusion splicing, and physical hardware installation are executed by vetted field execution partners.'
    },
    technicalTerms: [
      'Optical Fiber Cable (OFC)', 'OTDR Testing', 'Layer 2 / Layer 3 Managed Switches',
      'SCADA Telemetry', 'VLAN Segmentation', 'Industrial Ethernet', 'Power over Ethernet (PoE+)'
    ],
    faqs: [
      {
        q: 'Do you supply networking hardware directly?',
        a: 'We coordinate procurement from authorized enterprise distributors (Cisco, Aruba, D-Link, Moxa, etc.), matching client tender specifications with verified manufacturer datasheets.'
      },
      {
        q: 'Can you assist with network design for surveillance CCTV projects?',
        a: 'Yes. CCTV networks require careful bandwidth modeling, multicast routing, and PoE budget calculations to prevent packet drops and latency bottlenecks in video management systems.'
      }
    ],
    relatedServices: [
      { title: 'CCTV & Video Management Systems', path: '/services/cctv-vms-surveillance-solutions' },
      { title: 'Solar Plant SLD Design & Sourcing', path: '/services/solar-plant-sld-design-sourcing' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' }
    ]
  },

  'cctv-vms-surveillance-solutions': {
    slug: 'cctv-vms-surveillance-solutions',
    path: '/services/cctv-vms-surveillance-solutions',
    title: 'CCTV & Video Management Systems (VMS) | Neudact Engineers',
    metaTitle: 'CCTV, Surveillance & Video Management Systems (VMS) — Neudact Engineers',
    metaDescription: 'Commercial IP surveillance, central Video Management Systems (VMS), storage arrays, and computer vision deployment coordination for enterprise yards.',
    h1: 'CCTV & Video Management Systems (VMS) Solutions',
    deliveryType: 'Sourced & Partner Delivered',
    deliveryBadgeClass: 'badge-sourced',
    category: 'Security, CCTV & VMS',
    summary: 'High-density IP surveillance systems, enterprise VMS platforms, central control room setups, and AI-assisted edge monitoring coordination.',
    targetAudience: 'Industrial facilities, warehouse yards, solar power plants, commercial campuses, infrastructure contractors, and public surveillance vendors.',
    scopeItems: [
      'Commercial IP surveillance camera selection (bullet, PTZ, dome, thermal imaging, and ANPR/LPR cameras).',
      'Central Video Management System (VMS) architecture design and camera license planning.',
      'Network Video Recorder (NVR) and SAN/NAS centralized storage sizing based on retention mandates (30/60/90 days).',
      'Central Command & Control Centre (ICCC) display wall layouts and operator workstation design.',
      'Perimeter intrusion detection, virtual tripwires, and intelligent video analytics (IVA) integration.',
      'Deployment coordination and acceptance testing with certified security system integrators.'
    ],
    deliverables: [
      'CCTV Camera Layout & Coverage Map (AutoCAD / PDF).',
      'Storage & Bandwidth Calculation Sheet with camera-wise bitrates.',
      'VMS Server & Storage Specification Schedule.',
      'System Integration & Commissioning Acceptance Checklist.'
    ],
    methodology: 'Modern surveillance projects require a careful convergence of optical hardware, networking bandwidth, and compute storage. We model field-of-view (FOV) coverage, calculate disk RAID storage and bandwidth budgets, and partner with accredited security integrators for field deployment.',
    responsibilities: {
      direct: 'System architecture, storage calculations, VMS specifications, NAYAN computer-vision integration, and procurement coordination are executed by Neudact Engineers.',
      partner: 'Physical camera mounting, field cabling, and hardware supply are delivered by authorized OEMs and licensed security installation partners.'
    },
    technicalTerms: [
      'Video Management System (VMS)', 'Network Video Recorder (NVR)', 'ONVIF Protocol',
      'H.265+ Compression', 'ANPR / LPR Systems', 'SAN / NAS Storage Array', 'Intelligent Video Analytics (IVA)'
    ],
    faqs: [
      {
        q: 'How does Neudact support edge computer vision and AI video monitoring?',
        a: 'We developed the NAYAN Vision Suite framework, which interfaces with standard RTSP video feeds to detect safety compliance (helmets, vests) and unauthorized intrusions locally at the edge, eliminating recurring cloud bandwidth expenses.'
      },
      {
        q: 'Do you assist with tender specifications for Safe City or government CCTV tenders?',
        a: 'Yes. We review detailed Technical Schedules, verify OEM Manufacturer Authorization Forms (MAF), check ONVIF profile compliance, and structure compliant bid submittals.'
      }
    ],
    relatedServices: [
      { title: 'Telecom & Networking Solutions', path: '/services/telecom-networking-solutions' },
      { title: 'Drone & UAV Solutions', path: '/services/drone-uav-solutions' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' }
    ]
  },

  'drone-uav-solutions': {
    slug: 'drone-uav-solutions',
    path: '/services/drone-uav-solutions',
    title: 'Commercial Drone & UAV Solutions | Neudact Engineers',
    metaTitle: 'Commercial Drone & UAV Solutions — Neudact Engineers',
    metaDescription: 'Commercial and industrial drone sourcing, surveying, aerial inspection, and technical project coordination subject to DGCA compliance.',
    h1: 'Commercial Drone & Industrial UAV Solutions',
    deliveryType: 'Sourced Solution',
    deliveryBadgeClass: 'badge-sourced',
    category: 'Drone & UAV Solutions',
    summary: 'Procurement coordination and flight survey planning for industrial inspections, aerial surveying, solar thermography, and GIS topographic mapping.',
    targetAudience: 'Infrastructure companies, mining concessionaires, solar plant operators, civil engineering survey teams, and transmission line inspection contractors.',
    scopeItems: [
      'Commercial and industrial drone sourcing from type-certified Indian and global UAV manufacturers.',
      'Application-specific drone payload matching (high-res RGB photogrammetry, radiometric thermal, LiDAR sensors).',
      'Volumetric surveying and digital elevation model (DEM) generation for mining and earthwork projects.',
      'Solar plant thermographic inspection planning for hotspot and diode fault identification.',
      'Transmission line, tower, and highway corridor aerial inspection coordination.',
      'Statutory compliance coordination with DigitalSky, DGCA regulations, and local airspace permissions.'
    ],
    deliverables: [
      'Drone Specification & Sensor Payload Matching Report.',
      'Flight Survey Planning & Ground Control Point (GCP) Layout Guide.',
      'Orthomosaic, 3D Point Cloud, and Contour Elevation Data Deliverable Specifications.',
      'Statutory Compliance Checklist for commercial drone operations in India.'
    ],
    methodology: 'Drone operations require strict adherence to civil aviation law. We act as a technical sourcing and survey-planning coordinator, matching specific engineering requirements with type-certified UAV platforms and DGCA-licensed remote pilots, ensuring complete regulatory legitimacy.',
    complianceNotice: 'Availability, supply, flight operations, and deployment depend strictly on product specifications, partner capabilities, and applicable statutory approvals (DGCA / Ministry of Civil Aviation). Neudact Engineers does not operate unlicensed flights or supply unapproved defense-grade UAVs.',
    responsibilities: {
      direct: 'Technical payload specification, flight plan engineering, survey data processing coordination, and regulatory compliance checklists are managed by Neudact Engineers.',
      partner: 'UAV hardware manufacturing is provided by type-certified OEMs; flight piloting is performed by DGCA-licensed Remote Pilot Certificate (RPC) holders.'
    },
    technicalTerms: [
      'DGCA Type Certification', 'DigitalSky Platform', 'Radiometric Thermal Imaging',
      'Photogrammetry & Orthomosaic', 'LiDAR Point Cloud', 'Ground Control Points (GCP)', 'UIN Registration'
    ],
    faqs: [
      {
        q: 'Does Neudact directly manufacture commercial drones?',
        a: 'No. Neudact Engineers does not manufacture drones. We coordinate sourcing from certified Indian OEMs holding valid DGCA Type Certificates, ensuring legal compliance and dependable warranty support.'
      },
      {
        q: 'Can drones be deployed for solar power plant inspections?',
        a: 'Yes. Radiometric thermal cameras mounted on industrial drones can scan megawatt-scale solar arrays in hours, detecting string failures, cell hotspots, and dirt accumulation with precise GPS tagging.'
      }
    ],
    relatedServices: [
      { title: 'CCTV & Video Management Systems', path: '/services/cctv-vms-surveillance-solutions' },
      { title: 'Solar Plant SLD Design & Sourcing', path: '/services/solar-plant-sld-design-sourcing' },
      { title: 'Engineering & Infrastructure Solutions', path: '/services/engineering-infrastructure-solutions' }
    ]
  },

  'engineering-infrastructure-solutions': {
    slug: 'engineering-infrastructure-solutions',
    path: '/services/engineering-infrastructure-solutions',
    title: 'Engineering & Infrastructure Solutions | Neudact Engineers',
    metaTitle: 'Engineering & Infrastructure Solutions — Neudact Engineers',
    metaDescription: 'Integrated engineering project coordination, multidisciplinary technical services, digital execution, and partner-delivered infrastructure solutions.',
    h1: 'Engineering, Technology & Infrastructure Solutions',
    deliveryType: 'Direct & Partner Coordination',
    deliveryBadgeClass: 'badge-direct',
    category: 'Indigenous Defence & Engineering Solutions',
    summary: 'Turnkey multidisciplinary technical project coordination, embedded engineering requirements, digital execution, and partner-delivered infrastructure solutions.',
    targetAudience: 'Infrastructure conglomerates, EPC contractors, government-facing vendors, engineering sub-contractors, and technical facilities.',
    scopeItems: [
      'Multidisciplinary project coordination bridging software systems, electrical schematics, and public procurement requirements.',
      'Embedded electronics and custom hardware prototyping requirements coordination through qualified engineering partners.',
      'Detailed project feasibility reviews, technical bill of materials (BOM), and specification translation.',
      'Statutory compliance and quality management checklists for government and PSU procurement tenders.',
      'Turnkey digital services combining corporate web portals, operational software dashboards, and bid management support.',
      'Rigorous documentation management ensuring all engineering deliverables meet ISO and public procurement standards.'
    ],
    deliverables: [
      'Integrated Project Execution Plan & Technical Scope Blueprint.',
      'Multidisciplinary Bill of Materials (BOM) & Equipment Specifications.',
      'Quality Assurance & Compliance Checklists.',
      'Centralized Project Documentation Dossier.'
    ],
    methodology: 'Modern infrastructure projects require the convergence of physical engineering, software control systems, and complex procurement governance. Neudact Engineers provides a disciplined coordination layer—translating client goals into precise technical packages executed through our direct digital capabilities and vetted specialist partners.',
    complianceNotice: 'Indigenous defence and regulated engineering solutions: Neudact coordinates engineering requirements and sub-assembly development exclusively through verified, compliant technical partners. We do not manufacture controlled defence items or claim unverified defence-sector approvals. All procurement is subject to statutory compliance.',
    responsibilities: {
      direct: 'Direct digital development, procurement documentation, compliance matrices, project scoping, and coordination management are executed directly by Neudact Engineers.',
      partner: 'Specialized electrical schematics, heavy manufacturing, licensed civil works, and specialized electronics are delivered by accredited specialist partners.'
    },
    technicalTerms: [
      'Multidisciplinary EPC Coordination', 'Turnkey Solution Architecture', 'Statutory Procurement Compliance',
      'Bill of Materials (BOM)', 'Embedded System Coordination', 'Quality Assurance Plan (QAP)'
    ],
    faqs: [
      {
        q: 'What makes Neudact different from a generic consulting or IT company?',
        a: 'We understand the realities of ground-level contracting in India. We do not just build a website or write software in isolation; we understand railway GCC rules, public procurement compliance, solar BoS components, and field networking realities, providing unified execution.'
      },
      {
        q: 'How does Neudact maintain transparent billing and vendor relationships?',
        a: 'We operate with strict delivery transparency. Clients know exactly which components are delivered directly by Neudact in-house, which are delivered by specialist partners, and which products are sourced directly from third-party OEMs with transparent pricing.'
      }
    ],
    relatedServices: [
      { title: 'Tender Management in India', path: '/services/tender-management-india' },
      { title: 'Solar Plant SLD Design & Sourcing', path: '/services/solar-plant-sld-design-sourcing' },
      { title: 'Custom Software Development', path: '/services/custom-software-development' }
    ]
  }
};
