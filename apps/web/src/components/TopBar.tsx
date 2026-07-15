export function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-border bg-neutral-surfaceCard px-6">
      <span className="text-lg font-semibold text-neutral-heading">B App LMS</span>
      <div className="h-9 w-9 rounded-full bg-primary-selected" aria-hidden="true" />
    </header>
  )
}
