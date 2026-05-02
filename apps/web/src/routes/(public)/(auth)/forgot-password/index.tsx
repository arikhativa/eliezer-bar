import { createFileRoute } from "@tanstack/react-router"
import { ForgotPasswordForm } from "@/routes/(public)/(auth)/forgot-password/-ForgotPasswordForm"

export const Route = createFileRoute("/(public)/(auth)/forgot-password/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ForgotPasswordForm />
}
