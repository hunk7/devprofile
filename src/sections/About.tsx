import { profile } from '../content/profile';

export function About() {
  return (
    <section id="about" className="py-10">
      <h2 className="mb-4 text-2xl font-heading font-semibold">About</h2>
      <p className="text-text-secondary">
        {profile.name} is a {profile.role} at {profile.company} with {profile.experienceYears} of
        experience building reliable cloud platforms, distributed services, full-stack products,
        and developer tools. Previously at {profile.previousCompanies.join(' and ')}.
      </p>
    </section>
  );
}
