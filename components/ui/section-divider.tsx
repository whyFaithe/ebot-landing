export function SectionDivider() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-700"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-gray-900 px-3 text-lg font-semibold text-gray-300">
          •••
        </span>
      </div>
    </div>
  )
}

