import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-[#4ade80] flex items-center justify-center">
        <Image 
          src="/e-bot_profile.png"
          alt="Ebot Logo" 
          width={32} 
          height={32}
          className=""
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-white leading-none">E-bots</span>
        <span className="text-sm text-gray-400">by WhyFaithe</span>
      </div>
    </Link>
  )
}

