import type { Todo } from './todo';

export interface Certification {
  name: string;
  code: string;
  credentialUrl: string | Todo;
  issueDate: string | Todo;
  renewalDate: string | Todo;
}

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    code: 'AZ-305',
    credentialUrl: 'https://www.credly.com/badges/6be056bf-31ae-42fa-b66c-1cd8df57485d/',
    issueDate: '',
    renewalDate: '',
  },
  {
    name: 'Microsoft Certified: Azure DevOps Engineer Expert',
    code: 'AZ-400',
    credentialUrl: 'https://www.credly.com/badges/c7860cae-124e-4c28-b9dc-dfa236b847ae/',
    issueDate: '',
    renewalDate: '',
  },
  {
    name: 'Back End Development and APIs',
    code: 'freeCodeCamp',
    credentialUrl: 'https://www.freecodecamp.org/certification/hunk/back-end-development-and-apis',
    issueDate: '',
    renewalDate: '',
  },
  {
    name: 'Data Science Math Skills',
    code: 'Duke University',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7L7Z7YWFEE2W',
    issueDate: '',
    renewalDate: '',
  },
];

