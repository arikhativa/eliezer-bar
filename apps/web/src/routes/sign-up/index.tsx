import { SignUpForm } from "@/routes/sign-up/-SignUpForm"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/sign-up/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-full items-center justify-center">
      <SignUpForm />
    </div>
  )
}
