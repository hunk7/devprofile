export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Configuration',
    items: ['C#', 'JavaScript', 'TypeScript', 'SQL', 'PowerShell', 'YAML'],
  },
  {
    category: 'Frameworks & Application Development',
    items: [
      '.NET 10',
      'ASP.NET Core',
      'Entity Framework Core',
      'LINQ',
      'React',
      'Razor',
      'ASP.NET MVC',
      'RESTful APIs',
      'Microservices',
      'Event-Driven Architecture',
      'SOLID Principles',
      'Design Patterns',
    ],
  },
  {
    category: 'Cloud, Platform & DevOps',
    items: [
      'Azure PaaS',
      'Azure API Management',
      'Azure Kubernetes Service',
      'Azure DevOps',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Cloud Migration',
      'Application Modernization',
      'Cloud-Native Development',
    ],
  },
  {
    category: 'Messaging & Data',
    items: ['RabbitMQ', 'SQL Server', 'PostgreSQL', 'Dapper', 'Entity Framework Core'],
  },
  {
    category: 'Quality',
    items: ['xUnit', 'TDD', 'BDD', 'Refactoring', 'Software Testing & QA'],
  },
];
