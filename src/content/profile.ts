import { TODO_PLACEHOLDER, type Todo } from './todo';

export interface Profile {
  name: string;
  role: string;
  company: string;
  previousCompanies: string[];
  experienceYears: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  /** TODO: phone-number visibility decision (Section 15) - keep in resume only unless approved for public display */
  phone: string;
  phonePubliclyVisible: boolean;
  browserTitle: string;
  heading: string;
  descriptor: string;
  /** TODO: accent colour preference (Section 15) - defaults to spec accent */
  accentOverride: string | Todo;
  /** TODO: opportunity-status wording (Section 15) */
  opportunityStatus: string | Todo;
  /** TODO: professional photograph decision (Section 15) */
  photoUrl: string | Todo;
}

export const profile: Profile = {
  name: 'Ganesh Bhadra',
  role: 'Product Developer',
  company: 'Epicor',
  previousCompanies: ['LTIMindtree', 'Kyndryl'],
  experienceYears: '6+ years',
  location: 'Bengaluru, Karnataka, India',
  email: 'ganeshbhadra404@gmail.com',
  github: 'https://github.com/hunk7',
  linkedin: 'https://linkedin.com/in/ganeshbhadra404',
  phone: '+91 8806929545',
  phonePubliclyVisible: false,
  browserTitle: 'Ganesh Bhadra | Senior .NET, React & Azure Engineer',
  heading: 'Ganesh Bhadra',
  descriptor: 'Building reliable, scalable software across .NET, React & Azure',
  accentOverride: TODO_PLACEHOLDER,
  opportunityStatus: TODO_PLACEHOLDER,
  photoUrl: TODO_PLACEHOLDER,
};
