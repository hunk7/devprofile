export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  specialization?: string;
  coursework: string[];
}

export const education: EducationEntry[] = [
  {
    school: 'BITS Pilani',
    degree: 'M.Tech in Software Engineering',
    period: '2023 to 2025',
    gpa: 'CGPA: 8.2/10',
    specialization: 'Software Product Management',
    coursework: [
      'Software Architecture and Design',
      'Full-Stack Engineering',
      'Distributed Systems',
      'DevOps and CI/CD',
      'Software Testing and Quality Assurance',
      'Agile Product Development',
      'Enterprise Software Engineering',
    ],
  },
  {
    school: 'G.H. Raisoni College of Engineering, Nagpur',
    degree: 'B.E. in Computer Science and Engineering',
    period: '2017 to 2020',
    gpa: 'CGPA: 8.8/10',
    coursework: [
      'Object-Oriented Programming',
      'Database Design',
      'Open-Source Software Engineering',
      'Data Structures and Algorithms',
      'Cloud Computing',
      'Cyber Security',
      'Computer Networks',
    ],
  },
];
