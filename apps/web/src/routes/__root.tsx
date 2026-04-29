import { AppSidebar } from "@/routes/-AppSidebar"
import { Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <Outlet />
      </main>
    </>
  )
}
