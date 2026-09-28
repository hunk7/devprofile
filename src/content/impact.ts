export interface ImpactMetric {
  label: string;
  value: string;
}

export const impactMetrics: ImpactMetric[] = [
  { value: '44%', label: 'Infrastructure cost savings from ReadDB migration off Amazon RDS' },
  { value: '50%', label: 'Execution time reduction in Rapid Data Vending snapshot processing' },
  { value: '22%', label: 'Compute cost reduction per request' },
  { value: '28%', label: 'Recurring annual savings per product via shared platform capabilities' },
  { value: '99%', label: 'Service availability maintained across enterprise applications' },
];
