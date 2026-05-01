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
import { SIGNUP_STRING } from "@/lib/strings/auth";
import { supabase } from "@/lib/supabase/client";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== repeatPassword) {
      setError(SIGNUP_STRING.passwordsNoMatch);
      return;
    }
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
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
            <CardTitle className="text-2xl">{SIGNUP_STRING.thankYou}</CardTitle>
            <CardDescription>{SIGNUP_STRING.checkEmail}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              {SIGNUP_STRING.confirmMessage}
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{SIGNUP_STRING.signUp}</CardTitle>
            <CardDescription>{SIGNUP_STRING.createAccount}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">{SIGNUP_STRING.email}</Label>
                  <Input
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    required
                    type="email"
                    value={email}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">{SIGNUP_STRING.pass}</Label>
                  </div>
                  <Input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    value={password}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="repeat-password">
                      {SIGNUP_STRING.repeatPass}
                    </Label>
                  </div>
                  <Input
                    id="repeat-password"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                    type="password"
                    value={repeatPassword}
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button className="w-full" disabled={isLoading} type="submit">
                  {isLoading
                    ? SIGNUP_STRING.creatingAccount
                    : SIGNUP_STRING.signUp}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                {SIGNUP_STRING.alreadyHaveAccount}
                <Button asChild variant={"link"}>
                  <Link to={"/login"}>{SIGNUP_STRING.login}</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
