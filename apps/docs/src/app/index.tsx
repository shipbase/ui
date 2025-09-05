import { baseOptions } from "@/lib/layout.shared"
import { Link } from "@tanstack/react-router"
import { HomeLayout } from "fumadocs-ui/layouts/home"

export const Route = createFileRoute({
  component: Home,
})

function Home() {
  return (
    <HomeLayout {...baseOptions()} className="justify-center py-32 text-center">
      <h1 className="mb-4 font-medium text-xl">Fumadocs on Tanstack Start.</h1>
      <Link
        to="/docs/$"
        params={{
          _splat: "",
        }}
        className="mx-auto rounded-lg bg-fd-primary px-3 py-2 font-medium text-fd-primary-foreground text-sm"
      >
        Open Docs
      </Link>
    </HomeLayout>
  )
}
