import { createFileRoute } from "@tanstack/react-router"
import { SignUpForm } from "@/routes/(public)/(auth)/sign-up/-SignUpForm"

export const Route = createFileRoute("/(public)/(auth)/sign-up/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignUpForm />
}
