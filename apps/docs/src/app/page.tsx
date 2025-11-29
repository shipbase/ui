import { HomeLayout } from "fumadocs-ui/layouts/home"
import Link from "next/link"

export default function HomePage() {
  return (
    <HomeLayout
      nav={{
        title: "UI Components",
      }}
      className="justify-center py-32 text-center"
    >
      <h1 className="mb-4 font-medium text-xl">
        Accessible UI Components Documentation
      </h1>
      <Link
        href="/docs"
        className="mx-auto rounded-lg bg-fd-primary px-3 py-2 font-medium text-fd-primary-foreground text-sm"
      >
        Open Docs
      </Link>
    </HomeLayout>
  )
}
