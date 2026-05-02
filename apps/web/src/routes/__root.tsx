import { createRootRoute, Outlet } from "@tanstack/react-router"
import { AppSidebar } from "@/routes/-AppSidebar"

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
