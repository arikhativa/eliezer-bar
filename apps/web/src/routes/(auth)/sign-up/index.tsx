import { SignUpForm } from "@/routes/(auth)/sign-up/-SignUpForm"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(auth)/sign-up/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignUpForm />
}
