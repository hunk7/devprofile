type Status = 'live' | 'active' | 'archived';

const statusStyles: Record<Status, string> = {
  live: 'text-success border-success',
  active: 'text-accent border-accent',
  archived: 'text-text-secondary border-border',
};

export function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
