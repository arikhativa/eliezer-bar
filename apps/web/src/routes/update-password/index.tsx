import { UpdatePasswordForm } from "@/routes/update-password/-UpdatePasswordForm"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/update-password/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full items-center justify-center">
      <UpdatePasswordForm />
    </div>
  )
}
