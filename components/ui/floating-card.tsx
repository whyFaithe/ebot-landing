import { cn } from "@/lib/utils"

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function FloatingCard({ children, className, ...props }: FloatingCardProps) {
  return (
    <div 
      className={cn(
        "relative transition-all duration-500 hover:translate-y-[-4px]",
        "before:absolute before:inset-0 before:-z-10 before:translate-x-2 before:translate-y-2 before:rounded-2xl before:bg-gradient-to-r before:from-green-500/20 before:to-purple-500/20 before:blur-xl before:transition-all before:duration-500 hover:before:translate-x-3 hover:before:translate-y-3 hover:before:blur-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

