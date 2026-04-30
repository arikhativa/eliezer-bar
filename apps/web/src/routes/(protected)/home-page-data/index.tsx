import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(protected)/home-page-data/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(protected)/home-page-data/"!</div>
}
