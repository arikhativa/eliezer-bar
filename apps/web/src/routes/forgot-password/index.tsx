import { ForgotPasswordForm } from "@/routes/forgot-password/-ForgotPasswordForm"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/forgot-password/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full items-center justify-center">
      <ForgotPasswordForm />
    </div>
  )
}
