import { Link } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { cn } from "@workspace/ui/lib/utils";
import { useState } from "react";
import { FORGOT_PASSWORD_STRING } from "@/lib/strings/auth";
import { supabase } from "@/lib/supabase/client";

const siteDomain = import.meta.env.VITE_SITE_DOMAIN;

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${siteDomain}/update-password`,
      });
      if (error) {
        throw error;
      }
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {success ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {FORGOT_PASSWORD_STRING.checkEmail}
            </CardTitle>
            <CardDescription>
              {FORGOT_PASSWORD_STRING.resetSent}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              {FORGOT_PASSWORD_STRING.resetMessage}
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {FORGOT_PASSWORD_STRING.resetPassword}
            </CardTitle>
            <CardDescription>
              {FORGOT_PASSWORD_STRING.resetDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">{FORGOT_PASSWORD_STRING.email}</Label>
                  <Input
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    required
                    type="email"
                    value={email}
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button className="w-full" disabled={isLoading} type="submit">
                  {isLoading
                    ? FORGOT_PASSWORD_STRING.sending
                    : FORGOT_PASSWORD_STRING.sendReset}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                {FORGOT_PASSWORD_STRING.alreadyHaveAccount}
                <Button asChild variant={"link"}>
                  <Link to={"/login"}>{FORGOT_PASSWORD_STRING.login}</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
