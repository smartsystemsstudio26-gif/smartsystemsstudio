import { cn } from '@/lib/utils'

export function Logo({
  className,
  withText = true,
}: {
  className?: string
  withText?: boolean
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-primary"
          aria-hidden="true"
        >
          <path
            d="M12 2L4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 11.5l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-sm font-bold tracking-tight">
            Smart Systems
          </span>
          <span className="font-heading text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
            STUDIO
          </span>
        </span>
      )}
    </span>
  )
}
