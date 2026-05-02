import { createFileRoute } from "@tanstack/react-router"
import { LoginForm } from "@/routes/(public)/(auth)/login/-LoginForm"

export const Route = createFileRoute("/(public)/(auth)/login/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginForm />
}
