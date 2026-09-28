import { impactMetrics } from '../content/impact';
import { Card } from '../components/Card';

export function ImpactMetrics() {
  return (
    <section id="impact" className="py-10">
      <h2 className="mb-8 text-center text-2xl font-heading font-semibold">Curated Impact</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {impactMetrics.map((metric) => (
          <Card key={metric.label} className="text-center">
            <p className="text-3xl font-bold text-accent">{metric.value}</p>
            <p className="mt-2 text-sm text-text-secondary">{metric.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
