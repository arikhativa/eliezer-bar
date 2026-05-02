import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router"
import { authQO } from "@/lib/queryOptions/auth"

export const Route = createFileRoute("/(protected)")({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: user } = useSuspenseQuery(authQO())
  const navigate = useNavigate()

  if (!user) {
    navigate({ to: "/", replace: true })
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}
