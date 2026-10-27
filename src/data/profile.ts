// All page content lives here. Edit this file; the page, llms.txt and llms-full.txt pick it up.
// Anything marked TODO is a placeholder you should check or replace.

export const profile = {
  name: 'Max Livirov',
  // Legal name, used as a byline on some articles. Shown on those cards and in structured data so they're credited to you.
  // Set to '' to hide it everywhere.
  alternateName: 'Maxim Pustovoi',
  role: 'Freelance Senior .NET Engineer & Solution Architect',
  headline: 'I design and build high-load .NET backends — from architecture to production.',
  subheadline:
    '15+ years building backend systems for FinTech, capital markets, insurance, cybersecurity and GovTech. C#, .NET, Kafka, PostgreSQL, Azure, and RAG-based AI copilots when your product needs them.',
  location: 'Remote · clients in the US, Canada, UK and beyond',
  availability: 'Open to new freelance projects', // TODO: add a start date, e.g. "Available from January 2027"
  email: 'max.livirov@gmail.com',
  bookingUrl: '', // TODO: e.g. https://cal.com/yourname. Leave empty to hide the button
  cvUrl: '', // TODO: e.g. /cv.pdf (put the file in /public). Leave empty to hide
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/max-livirov/' },
    { label: 'GitHub', url: 'https://github.com/mlivirov' },
    { label: 'Habr', url: 'https://habr.com/ru/users/livirov/' },
  ],
};

// What you do now vs. what you've done. llms.txt states this so assistants don't pitch the wrong kind of work.
export const focus = {
  primary: 'C# / .NET backend engineering and solution architecture',
  secondary: 'Python for scripting and prototyping (e.g. automation, proofs of concept, a FastAPI BFF); Angular on the frontend when needed',
  past: 'C++ (2009–2014: real-time, embedded and systems work). Can still read and review C++ code, but does not take C++ development projects.',
};

// Search-engine specifics. Keep `title` under ~60 chars and `description` under ~155 so Google doesn't truncate them.
export const seo = {
  title: 'Max Livirov — Freelance Senior .NET Engineer & Architect',
  description:
    'Freelance senior .NET engineer and solution architect, 15+ years. High-load C# backends, Kafka, Azure, RAG AI copilots for FinTech, insurance and security.',
  givenName: 'Max',
  familyName: 'Livirov',
  languages: ['English', 'Russian'],
  keywords: [
    'freelance .NET developer',
    'freelance C# developer',
    'senior .NET engineer',
    'solution architect',
    'fractional architect',
    'backend tech lead',
    'ASP.NET Core',
    'microservices',
    'CQRS',
    'DDD',
    'Kafka',
    'Azure',
    'RAG',
    'AI integration',
    'FinTech',
    'payments',
    'insurance software',
    'cybersecurity',
    'remote contractor',
  ],
  credentials: ['PCI DSS certified developer'],
};

// Every technology from both CVs, grouped. `aliases` are the other ways people search for the same thing;
// they go into meta keywords, structured data and llms.txt, while the page shows just the main name.
export const techStack: { group: string; items: { name: string; aliases?: string[] }[] }[] = [
  {
    group: 'Languages',
    items: [
      { name: 'C#', aliases: ['CSharp', 'C Sharp', 'C# developer', 'C# engineer'] },
      { name: 'Python (scripting & prototyping)', aliases: ['Python 3', 'automation scripts', 'prototyping', 'FastAPI BFF'] },
      { name: 'TypeScript', aliases: ['TS'] },
      { name: 'JavaScript', aliases: ['JS'] },
      { name: 'Scala' },
      { name: 'SQL', aliases: ['T-SQL', 'PL/pgSQL'] },
      { name: 'HTML & CSS', aliases: ['HTML5', 'CSS3'] },
    ],
  },
  {
    group: '.NET ecosystem',
    items: [
      { name: '.NET', aliases: ['dotnet', 'DotNet', '.NET 8', '.NET 5', '.NET Core', 'dotnet core', '.NET Framework'] },
      { name: 'ASP.NET Core', aliases: ['ASP.NET', 'ASP.NET Web API', 'Web API', 'ASP.NET MVC'] },
      { name: 'Entity Framework Core', aliases: ['EF Core', 'Entity Framework', 'EF'] },
      { name: 'Dapper' },
      { name: 'MediatR' },
      { name: 'FluentValidation' },
      { name: 'AutoMapper' },
      { name: 'MassTransit' },
      { name: 'Hangfire' },
      { name: 'RestEase' },
      { name: 'gRPC', aliases: ['gRPC .NET', 'Protobuf', 'Protocol Buffers'] },
      { name: 'MagicOnion' },
      { name: 'WCF', aliases: ['Windows Communication Foundation'] },
      { name: 'WPF', aliases: ['Windows Presentation Foundation'] },
      { name: 'Umbraco CMS', aliases: ['Umbraco'] },
      { name: 'Testcontainers', aliases: ['integration testing'] },
      { name: 'Roslyn analyzers', aliases: ['Roslynator', 'Meziantou.Analyzer', 'static code analysis'] },
    ],
  },
  {
    group: 'Architecture & practices',
    items: [
      { name: 'Clean Architecture', aliases: ['Onion Architecture', 'Hexagonal Architecture'] },
      { name: 'CQRS', aliases: ['Command Query Responsibility Segregation'] },
      { name: 'Domain-Driven Design', aliases: ['DDD'] },
      { name: 'Microservices', aliases: ['microservice architecture', 'macroservices'] },
      { name: 'Modular monolith', aliases: ['monolith'] },
      { name: 'Event-driven architecture', aliases: ['EDA', 'messaging'] },
      { name: 'Transactional Outbox', aliases: ['outbox pattern'] },
      { name: 'Backend for Frontend', aliases: ['BFF'] },
      { name: 'API Gateway' },
      { name: 'Multi-tenancy', aliases: ['multi-tenant SaaS', 'tenant isolation'] },
      { name: 'REST API', aliases: ['RESTful API', 'REST'] },
      { name: 'SOLID', aliases: ['dependency injection', 'DI', 'unit testing'] },
      { name: 'High-load systems', aliases: ['highload', 'performance tuning', 'performance optimization', 'scalability'] },
      { name: 'Distributed locking', aliases: ['RedLock'] },
    ],
  },
  {
    group: 'Databases & storage',
    items: [
      { name: 'PostgreSQL', aliases: ['Postgres', 'PgSQL'] },
      { name: 'Microsoft SQL Server', aliases: ['MS SQL', 'MSSQL', 'SQL Server', 'Azure SQL', 'Azure SQL Database'] },
      { name: 'MySQL' },
      { name: 'MongoDB', aliases: ['Mongo'] },
      { name: 'Redis', aliases: ['Redis cache', 'distributed cache'] },
      { name: 'Elasticsearch', aliases: ['Elastic Search', 'Elastic'] },
      { name: 'ClickHouse' },
      { name: 'HDFS', aliases: ['Hadoop'] },
      { name: 'Amazon S3', aliases: ['S3', 'object storage'] },
      { name: 'Liquibase', aliases: ['database migrations'] },
    ],
  },
  {
    group: 'Messaging & streaming',
    items: [
      { name: 'Apache Kafka', aliases: ['Kafka', 'event streaming'] },
      { name: 'Kafka Connect' },
      { name: 'Debezium', aliases: ['CDC', 'change data capture'] },
      { name: 'RabbitMQ', aliases: ['Rabbit MQ'] },
      { name: 'Azure Service Bus', aliases: ['Service Bus', 'Azure Event Bus'] },
      { name: 'AMQP' },
      { name: 'AWS SQS', aliases: ['SQS', 'Amazon SQS'] },
      { name: 'AWS SNS', aliases: ['SNS', 'Amazon SNS'] },
    ],
  },
  {
    group: 'Data engineering',
    items: [
      { name: 'Apache Spark', aliases: ['Spark'] },
      { name: 'Databricks', aliases: ['Azure Databricks'] },
      { name: 'Apache Airflow', aliases: ['Airflow'] },
      { name: 'OpenMetadata', aliases: ['data catalog', 'metadata management', 'data governance'] },
      { name: 'Data warehouse', aliases: ['DWH', 'data lake', 'data platform', 'Data Fabric', 'ETL', 'ELT'] },
    ],
  },
  {
    group: 'AI & LLM',
    items: [
      { name: 'RAG', aliases: ['Retrieval-Augmented Generation'] },
      { name: 'LLM integration', aliases: ['Large Language Models', 'LLM', 'GenAI', 'generative AI'] },
      { name: 'AI copilots', aliases: ['AI assistants'] },
      { name: 'LangChain' },
      { name: 'OpenAI', aliases: ['ChatGPT', 'GPT', 'OpenAI API'] },
      { name: 'YandexGPT' },
      { name: 'AI document classification', aliases: ['document AI', 'NLP'] },
    ],
  },
  {
    group: 'Cloud',
    items: [
      {
        name: 'Microsoft Azure',
        aliases: ['Azure', 'Azure App Service', 'Azure Application Service', 'Azure VMs', 'Azure Kubernetes Service', 'AKS', 'Azure cloud'],
      },
      {
        name: 'Amazon Web Services',
        aliases: ['AWS', 'AWS Lambda', 'Lambda', 'serverless', 'AWS API Gateway', 'AWS Cognito', 'Amazon Cognito'],
      },
      { name: 'Cloud migration', aliases: ['on-prem to cloud', 'lift and shift'] },
    ],
  },
  {
    group: 'DevOps & observability',
    items: [
      { name: 'Kubernetes', aliases: ['K8s', 'K8S'] },
      { name: 'Docker', aliases: ['containers'] },
      { name: 'Helm' },
      { name: 'Terraform', aliases: ['Infrastructure as Code', 'IaC'] },
      { name: 'CI/CD', aliases: ['continuous integration', 'continuous delivery', 'DevOps'] },
      { name: 'Azure DevOps', aliases: ['Azure Pipelines', 'VSTS'] },
      { name: 'GitLab CI', aliases: ['GitLab', 'GitLab pipelines'] },
      { name: 'TeamCity' },
      { name: 'Octopus Deploy' },
      { name: 'Git', aliases: ['GitHub'] },
      { name: 'SonarQube', aliases: ['code coverage', 'code quality'] },
      { name: 'Grafana' },
      { name: 'Prometheus' },
      { name: 'ELK stack', aliases: ['ELK', 'Logstash', 'Kibana'] },
    ],
  },
  {
    group: 'Security & compliance',
    items: [
      { name: 'SSO', aliases: ['Single Sign-On', 'SAML', 'SAML 2.0', 'SAML SSO'] },
      { name: 'MFA', aliases: ['multi-factor authentication', '2FA'] },
      { name: 'JWT', aliases: ['JSON Web Token', 'token authentication'] },
      { name: 'Authentication & authorization', aliases: ['identity', 'external authentication', 'tenant impersonation'] },
      { name: 'Privileged Access Management', aliases: ['PAM'] },
      { name: 'Audit logging', aliases: ['CEF', 'Common Event Format', 'SIEM'] },
      { name: 'PCI DSS', aliases: ['PCI compliance', 'payment card security'] },
      { name: 'FedRAMP' },
      { name: 'FISMA' },
      { name: 'NIST', aliases: ['NIST 800-53'] },
      { name: 'GRC', aliases: ['Governance, Risk & Compliance', 'ATO', 'Authority to Operate'] },
      { name: 'FSTEC' },
      { name: 'Secure data erasure', aliases: ['DoD data wiping', 'digital forensics'] },
    ],
  },
  {
    group: 'Frontend & mobile',
    items: [
      { name: 'Angular', aliases: ['Angular 2+', 'Angular framework'] },
      { name: 'NgRx', aliases: ['ngrx store', 'NgStore'] },
      { name: 'PrimeNG', aliases: ['NgPrime'] },
      { name: 'RxJS' },
      { name: 'Bootstrap', aliases: ['Bootstrap CSS'] },
      { name: 'iOS & Android apps', aliases: ['mobile development', 'iOS', 'Android'] },
      { name: 'Figma' },
      { name: 'Lovable' },
    ],
  },
  {
    group: 'Domains',
    items: [
      { name: 'FinTech', aliases: ['financial technology', 'financial services'] },
      { name: 'Payments', aliases: ['payment processing', 'recurring payments', 'subscriptions', 'billing', 'installments'] },
      { name: 'Capital markets', aliases: ['stock exchange'] },
      { name: 'Insurance', aliases: ['InsurTech', 'P&C insurance', 'insurance CRM'] },
      { name: 'Cybersecurity', aliases: ['information security', 'InfoSec', 'IT security'] },
      { name: 'GovTech', aliases: ['government SaaS', 'public sector'] },
      { name: 'Healthcare', aliases: ['HealthTech', 'medical document exchange'] },
      { name: 'Marketing analytics', aliases: ['omnichannel marketing', 'MarTech'] },
      { name: 'E-commerce', aliases: ['marketplace', 'retail', 'grocery delivery'] },
      { name: 'CRM', aliases: ['CRM systems', 'workflow engine', 'business rules engine'] },
      { name: 'Aerospace', aliases: ['space tech', 'launch monitoring'] },
    ],
  },
  {
    // Earlier career (2009–2014). Shown for context; not offered as current work.
    group: 'Earlier career: C++',
    items: [
      { name: 'C++', aliases: ['C++14'] },
      { name: 'Boost' },
      { name: 'Qt' },
      { name: 'RTOS', aliases: ['real-time operating system'] },
      { name: 'Multithreading' },
      { name: 'Networking protocols', aliases: ['TCP/IP', 'PC over IP'] },
    ],
  },
];

// Role names people search with; combined with the core technologies below for keyword phrases.
export const searchRoles = [
  'developer',
  'engineer',
  'architect',
  'consultant',
  'contractor',
  'tech lead',
];
export const coreTech = ['.NET', 'C#', 'ASP.NET Core', 'Azure', 'Kafka', 'Microservices', 'PostgreSQL', 'AWS', 'RAG', 'Angular', 'backend'];

// Used in llms.txt and structured data so AI assistants can match you to the right requests.
export const industries = [
  'FinTech and payments (recurring billing, PCI DSS card processing)',
  'Capital markets (London Stock Exchange Group)',
  'Insurance (P&C payment processing, broker CRM)',
  'Cybersecurity (Privileged Access Management, secure data erasure, forensics)',
  'GovTech and compliance (FedRAMP, FISMA, NIST)',
  'Retail and e-commerce data platforms',
  'Healthcare document exchange',
  'Aerospace (launch monitoring software)',
];

export const engagement = [
  'Remote, worldwide; experienced with US, Canadian and UK clients and distributed teams',
  'Contract or part-time; fixed price for defined scope or a day rate for ongoing work',
  'Roles: hands-on senior .NET engineer, tech lead, solution architect or fractional architect',
  'Happy to sign an NDA before technical discussions',
  'Written proposal with scope and milestones before work starts',
];

export const services = [
  {
    title: '.NET backend & API development',
    body: 'High-load ASP.NET Core services and APIs: clean, tested, observable, and ready for production traffic from day one.',
    tags: ['C#', '.NET', 'ASP.NET Core', 'EF Core', 'gRPC', 'PostgreSQL', 'MSSQL'],
  },
  {
    title: 'Architecture & re-architecture',
    body: 'Clean Architecture, CQRS and DDD for new products, or a safe path off a legacy backend. Available as a hands-on tech lead or fractional architect.',
    tags: ['Clean Architecture', 'CQRS', 'DDD', 'Microservices'],
  },
  {
    title: 'Data platforms & event streaming',
    body: 'Event-driven systems and data warehouses that scale to hundreds of terabytes, from ingestion to analytics APIs.',
    tags: ['Kafka', 'Spark', 'ClickHouse', 'Airflow', 'Databricks'],
  },
  {
    title: 'AI integration',
    body: 'RAG-powered copilots, document classification and AI-assisted workflows built into your existing product, not bolted on.',
    tags: ['RAG', 'LangChain', 'Python FastAPI', 'AI copilots'],
  },
  {
    title: 'Security & compliance-ready systems',
    body: 'SSO (SAML), MFA, JWT, multi-tenant isolation and audit logging for products that must pass security reviews, including FedRAMP/NIST contexts.',
    tags: ['SAML SSO', 'MFA', 'Multi-tenancy', 'Audit logging'],
  },
  {
    title: 'Cloud migration & DevOps',
    body: 'Moving on-prem services to Azure or AWS, with CI/CD, static analysis, monitoring and infrastructure as code.',
    tags: ['Azure', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
];

export const projects = [
  {
    title: 'Re-architecting a federal GRC SaaS platform',
    client: 'Kanda Software',
    year: '2025–2026',
    problem:
      'A Governance, Risk & Compliance platform that helps US government agencies get Authority to Operate (FedRAMP, FISMA, NIST) had outgrown its legacy backend.',
    solution:
      'Led the rebuild on Clean Architecture with CQRS, DDD, multi-tenant DB isolation and event-driven patterns. Added SAML SSO, MFA, CEF audit logging and a full document pipeline.',
    result: 'New foundation and team guardrails, plus 3 RAG-powered AI copilots for document analysis, control generation and audit assistance.',
    stack: ['C#', '.NET', 'PostgreSQL', 'Azure Service Bus', 'Redis', 'RAG', 'FastAPI'],
  },
  {
    title: 'Recurring payments service for a delivery platform',
    client: 'Snoonu',
    year: '2025',
    problem: "Snoonu's platform needed subscriptions and instalment payments managed end to end, with reliable messaging to downstream systems.",
    solution:
      'Built a .NET 8 billing-agreement microservice with a full lifecycle (Pending → Scheduled → Active → Completed/Cancelled), MediatR use cases, Hangfire scheduling and MassTransit/RabbitMQ consumers.',
    result: 'A transactional outbox guarantees reliable, eventually-consistent events to downstream payment systems.',
    stack: ['.NET 8', 'gRPC', 'PostgreSQL', 'MediatR', 'Hangfire', 'MassTransit', 'RabbitMQ', 'Redis'],
  },
  {
    title: 'Speeding up a Privileged Access Management product',
    client: 'Indeed Company',
    year: '2024–2025',
    problem: 'An IT-security (PAM) product needed new authentication options and faster responses to win and keep enterprise customers.',
    solution: 'Implemented multiple external authentication providers, optimised hot code paths and set up compliant GitLab build pipelines.',
    result: 'Server response time up to 10× faster; new auth options widened the sales funnel and helped expand the client contract.',
    stack: ['C#', '.NET', 'Angular', 'PostgreSQL'],
  },
  {
    title: 'Corporate data warehouse at hundreds of terabytes',
    client: 'Petrovich-Tech',
    year: '2022–2023',
    problem: 'Developers and sales teams at a large retailer could not easily get to the data they needed to spot trends.',
    solution: 'Designed the warehouse from scratch on Kafka, Spark, ClickHouse and Airflow, plus a high-load Data Fabric API and Angular management console.',
    result: 'Self-service data access for engineering and sales, and faster replies to customer requests.',
    stack: ['Kafka', 'Debezium', 'Spark', 'ClickHouse', 'Airflow', 'Kubernetes', 'Angular'],
  },
  {
    title: 'Launch-monitoring software for the Antares rocket',
    client: 'Design Office “Yuzhnoye”',
    year: '2009–2013',
    problem: 'Space-tech monitoring software for launches (contracted with Orbital ATK) was slow to develop on a real-time OS.',
    solution: 'Played a lead role on the software and ported the Qt library to the company\'s real-time operating system.',
    result: 'Development cycle cut from several months to just weeks.',
    stack: ['C++', 'Qt', 'Boost', 'RTOS'],
  },
];

// Newest first. `highlights` (optional) renders as a sub-list under the summary.
export const experience: {
  role: string;
  company: string;
  type: string;
  period: string;
  summary: string;
  highlights?: string[];
}[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Kanda Software',
    type: 'Contract',
    period: 'Aug 2025 – Present',
    summary:
      'Leading the re-architecture of a federal GRC SaaS platform (FedRAMP, FISMA, NIST): Clean Architecture, CQRS, DDD and multi-tenant isolation; 3 RAG-powered AI copilots; SAML SSO, MFA and CEF audit logging.',
  },
  {
    role: 'Senior .NET Developer — Recurring Payments',
    company: 'Snoonu',
    type: 'Contract',
    period: 'May 2025 – Jul 2025',
    summary:
      '.NET 8 microservice for recurring payment agreements (subscriptions and instalments): transactional outbox, Hangfire scheduling, MassTransit/RabbitMQ consumers, Redis distributed locking and a gRPC API, covered by Testcontainers integration tests.',
  },
  {
    role: 'Full Stack Engineer',
    company: 'Indeed Company',
    type: 'Full-time',
    period: 'Jan 2024 – Apr 2025',
    summary:
      'Privileged Access Management product: external authentication providers that widened the sales funnel, compliant GitLab build pipelines, and optimisations that cut server response time by up to 10×.',
  },
  {
    role: 'Solution Architect',
    company: 'Petrovich-Tech',
    type: 'Full-time',
    period: 'Oct 2022 – Dec 2023',
    summary:
      'Designed a corporate data warehouse of hundreds of terabytes from scratch (Kafka, Spark, ClickHouse, Airflow) and a high-load Data Fabric API with an Angular management console.',
  },
  {
    role: 'Team Lead / Solution Architect',
    company: 'CIGen',
    type: 'Part-time',
    period: 'Oct 2021 – Sep 2022',
    summary:
      'Solution architect on a greenfield grocery marketplace platform: 10+ .NET microservices, Umbraco-based CRM, payment and delivery gateways, Azure Kubernetes.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'LSEG (London Stock Exchange Group)',
    type: 'Contract',
    period: 'Dec 2021 – Jan 2022',
    summary: 'Migrated a legacy on-prem service to AWS: Lambda integrated with third-party Kafka and S3.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Prime TSR',
    type: 'Full-time',
    period: 'Feb 2021 – Sep 2021',
    summary:
      'Document-exchange CMS for US medical organisations: REST API on .NET 5 and EF Core, AWS Lambda, SQS, SNS, API Gateway and Cognito, Angular frontend.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Plurilock',
    type: 'Contract',
    period: 'Dec 2020 – Jan 2021',
    summary: 'C++14/Boost library integrating with a third-party application over a proprietary PC-over-IP protocol.',
  },
  {
    role: 'Solution Architect / Tech Lead',
    company: 'V12, A Porch Company',
    type: 'Part-time',
    period: 'Jan 2020 – Sep 2022',
    summary:
      'Lead engineer (team of 9) on an omnichannel marketing data and analytics platform: Spark/Databricks data warehouse and .NET API layer, SSO for internal and third-party access, migration of a C++ application to load-balanced Azure VMs, CI/CD and engineering standards.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Green Shield Canada (via EPAM)',
    type: 'Contract',
    period: 'Dec 2019 – Nov 2020',
    summary:
      "Multi-tenant CRM for Canada's largest insurance carrier, replacing a legacy system: microservices, API gateway, Azure Service Bus, Azure SQL, MongoDB, Redis, Elasticsearch, Angular.",
  },
  {
    role: 'Senior Software Engineer',
    company: 'Ascension Data and Analytics',
    type: 'Contract',
    period: 'Jun 2018 – Apr 2019',
    summary: 'Business CRM on Azure with a highly customisable workflow processor for business rules; C#, Azure Service Bus, SQL, Angular.',
  },
  {
    role: 'Software Developer',
    company: 'One, Inc.',
    type: 'Full-time',
    period: 'Sep 2014 – May 2018',
    summary:
      'Real-time, cloud-based payment processing (ProcessOne) for large P&C insurers: customer payment portals, PCI DSS-compliant card flows, iOS and Android apps, CI/CD; led a team of 4.',
  },
  {
    role: 'Junior Software Developer',
    company: 'Apriorit',
    type: 'Full-time',
    period: 'Jun 2013 – Jul 2014',
    summary: 'Mobile forensics software and a secure data erasure product meeting US Department of Defense standards.',
  },
  {
    role: 'Software Developer',
    company: 'Design Office "Yuzhnoye"',
    type: 'Full-time',
    period: 'Oct 2009 – Jun 2013',
    summary: 'Launch-monitoring software for the Antares rocket (Orbital ATK); ported Qt to a real-time OS, cutting the dev cycle from months to weeks.',
  },
];

// Articles and posts, newest first. `title` is shown as written; `titleEn` helps non-Russian readers and AI assistants.
export const articles: {
  title: string;
  titleEn: string;
  url: string;
  platform: string;
  lang: string;
  date: string;
  byline?: string;
  summary: string;
  tags: string[];
}[] = [
  {
    title: 'Шифруем ID сетью Фейстеля: защита API без правок в базе',
    titleEn: 'Encrypting IDs with a Feistel network: protecting an API without touching the database',
    url: 'https://habr.com/ru/articles/1025858/',
    platform: 'Habr',
    lang: 'ru',
    date: 'Apr 2026',
    summary:
      'How to hide sequential database IDs in a .NET API with a small Feistel cipher wired in through an EF Core value converter, so the schema and business code stay unchanged, plus where this defence stops and real access control has to start.',
    tags: ['.NET', 'EF Core', 'Security', 'REST API'],
  },
  {
    title: 'Revolutionizing Data Documentation with OpenMetadata and Large Language Models',
    titleEn: 'Revolutionizing Data Documentation with OpenMetadata and Large Language Models',
    url: 'https://www.linkedin.com/pulse/revolutionizing-data-documentation-openmetadata-large-maxim-pustovoi-iv5we/',
    platform: 'LinkedIn',
    lang: 'en',
    date: 'Feb 2024',
    byline: profile.alternateName, // published under the legal name
    summary:
      "How a retail company's data warehouse got its tables and columns documented automatically: an Airflow pipeline pulls schemas from OpenMetadata and has an LLM (ChatGPT, compared with YandexGPT) write the descriptions, in hours rather than by hand.",
    tags: ['OpenMetadata', 'LLM', 'Airflow', 'Data governance'],
  },
];

// Where the rest of your short posts live.
export const moreWritingUrl = 'https://www.linkedin.com/in/max-livirov/recent-activity/all/';

export const stats = [
  { value: 15, suffix: '+', label: 'years building backend systems' },
  { value: 10, suffix: '×', label: 'faster server responses after optimisation' },
  { value: 9, suffix: '', label: 'people in the largest team I led' },
  { value: 3, suffix: '', label: 'AI copilots built with RAG' },
];

// Shown on the page and exposed to search engines / AI assistants as FAQPage data.
export const faq = [
  {
    q: 'What kind of projects do you take on?',
    a: '.NET backends and APIs, architecture and re-architecture of legacy systems, data platforms and event streaming, AI/RAG integration, and security-sensitive multi-tenant SaaS. Both greenfield builds and rescuing existing systems.',
  },
  {
    q: 'Can you join as a tech lead or architect rather than just a developer?',
    a: 'Yes. I have worked as a solution architect and tech lead on several products, including leading a 9-person team. I can set the architecture, coding standards and CI/CD, and stay hands-on in the code.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'Contract or part-time, either a fixed price for a well-defined scope or a day rate for ongoing work. You get a written proposal before anything starts.', // TODO: add a rate range if you want to pre-qualify leads
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes, fully remote. I have worked with distributed teams and clients in the US, Canada and the UK.',
  },
  {
    q: 'How soon can you start?',
    a: 'Usually within one to two weeks, depending on current commitments. Get in touch and I will give you a concrete date.', // TODO
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Of course. Happy to sign your NDA before the first technical discussion.',
  },
];

export const process = [
  { step: 'Intro call', body: 'A free 30-minute call to understand your goals, constraints and timeline.' },
  { step: 'Proposal', body: 'A clear written scope, milestones and a fixed price or day rate. No surprises.' },
  { step: 'Build', body: 'Short iterations with regular demos and working code in your repo from day one.' },
  { step: 'Handover', body: 'Documentation, tests and a walkthrough so your team owns it after I leave.' },
];

export const about = [
  "I'm a senior .NET engineer and solution architect with more than 15 years of experience building robust, high-load backend systems in FinTech, capital markets, insurance, cybersecurity and GovTech.",
  "I like owning the whole backend lifecycle: architecture and design, implementation, performance tuning and production support. My career started in C++ on space-tech launch software, and that attention to reliability has stayed with me.",
  'I work well in distributed remote teams, communicate clearly, and leave behind code and standards that others enjoy maintaining.',
];
