// src/components/ui/Badge.tsx
const STATUS_STYLES = {
  Pending:   'bg-amber-100   text-amber-800',
  Scheduled: 'bg-blue-100    text-blue-800',
  Active:    'bg-green-100   text-green-800',
  Completed: 'bg-gray-100    text-gray-700',
  Cancelled: 'bg-red-100     text-red-800',
}

export function StatusBadge({ status }: { status: keyof typeof STATUS_STYLES }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  )
}