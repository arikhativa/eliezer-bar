import { UpdatePasswordForm } from "@/routes/(auth)/update-password/-UpdatePasswordForm"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(auth)/update-password/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <UpdatePasswordForm />
}
