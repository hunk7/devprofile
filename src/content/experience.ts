export interface ExperienceEntry {
  company: string;
  location: string;
  title: string;
  period: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Epicor',
    location: 'Bengaluru',
    title: 'Product Developer',
    period: 'February 2025 to Present',
    highlights: [
      'Architected and launched ReadDB, a service for consuming and managing SQL Server snapshot data — designed the ingestion pipeline, caching layer, and access API from the ground up, enabling multiple product teams to move away from Amazon RDS-dependent workflows and delivering 44% infrastructure cost savings.',
      'Engineered a high-throughput snapshot-processing solution for Rapid Data Vending by re-architecting the request pipeline with parallelized batch processing and optimized query planning, reducing execution time by 50%, lowering compute cost by 22% per request, and generating approximately $2,800 in quarterly savings.',
      'Drove cross-team adoption of shared platform capabilities (common auth, data access, and observability libraries) to reduce duplicate engineering effort, promoting recurring annual savings of 28% per product by cutting dependency on third-party services.',
      'Established automated regression and performance test suites (xUnit, TDD-first workflow) that caught regressions pre-release and cut manual QA cycles for the ReadDB and Rapid Data Vending services.',
      'Containerized and deployed services with Docker and Kubernetes on Azure PaaS, wiring up RabbitMQ-based event messaging for asynchronous cross-service communication and improved fault isolation.',
    ],
    stack: ['C#', '.NET 10', 'React', 'TypeScript', 'Microservices', 'Docker', 'Kubernetes', 'Azure PaaS', 'SQL Server', 'RabbitMQ', 'TDD', 'xUnit'],
  },
  {
    company: 'LTIMindtree',
    location: 'Bengaluru',
    title: 'Senior Software Engineer',
    period: 'June 2023 to February 2025',
    highlights: [
      'Led the end-to-end modernization of legacy on-premises applications and background Windows services, migrating them to Azure PaaS (App Service, Functions, and Service Bus) with zero-downtime cutover plans.',
      'Refactored monolithic workloads into cloud-native, loosely-coupled architectures using domain-driven boundaries, improving scalability, maintainability, and deployment reliability while cutting release cycle time significantly.',
      'Led a cross-functional team of five engineers through the full delivery lifecycle — design reviews, sprint planning, development, code review, testing, staging validation, and production rollout — while mentoring junior engineers on cloud-native patterns.',
      'Introduced infrastructure-as-code and CI/CD pipelines to standardize deployments across environments, reducing manual deployment errors and improving release confidence.',
      'Partnered with stakeholders to translate business requirements into technical designs, balancing near-term delivery pressure with long-term architectural health.',
    ],
    stack: ['Azure PaaS', 'Cloud Migration', 'Cloud-Native Development', 'CI/CD'],
  },
  {
    company: 'Kyndryl',
    location: 'Bengaluru',
    title: 'Associate Software Engineer',
    period: 'August 2020 to June 2023',
    highlights: [
      'Maintained 99% service availability across enterprise applications by proactively monitoring, triaging incidents, and implementing resilient failover and retry strategies.',
      'Modernized API governance using Azure API Management — centralizing rate limiting, authentication, and versioning policies across dozens of internal and partner-facing APIs.',
      'Enabled seamless integrations between Quantum and WebSphere platforms, designing adapters and message transformations that bridged legacy middleware with modern service consumers.',
      'Supported containerized microservices on Azure Kubernetes Service, handling scaling configuration, health probes, and rolling deployments to keep services resilient under variable load.',
      'Collaborated with operations teams on incident response runbooks and root-cause analysis, reducing repeat incidents through targeted fixes and monitoring improvements.',
    ],
    stack: ['Azure API Management', 'Azure Kubernetes Service'],
  },
];

