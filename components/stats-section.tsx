interface StatProps {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <Stat value="95%" label="Customer Satisfaction" />
      <Stat value="24/7" label="Availability" />
      <Stat value="50%" label="Cost Reduction" />
      <Stat value="2min" label="Average Response Time" />
    </div>
  )
}

