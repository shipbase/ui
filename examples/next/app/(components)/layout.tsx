export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <main className="row-start-2 flex w-64 flex-col items-center gap-[32px] sm:items-start">
        {children}
      </main>
    </div>
  )
}
