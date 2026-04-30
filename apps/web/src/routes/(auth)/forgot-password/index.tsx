import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordForm } from "@/routes/(auth)/forgot-password/-ForgotPasswordForm";

export const Route = createFileRoute("/(auth)/forgot-password/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ForgotPasswordForm />;
}
