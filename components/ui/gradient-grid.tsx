export function GradientGrid() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-full bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 blur-[100px]" />
    </div>
  )
}

