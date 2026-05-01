import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
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
import { HOMEPAGE_KEY } from "@/lib/queryOptions/homepage";
import { UPDATE_PASSWORD_STRING } from "@/lib/strings/auth";
import { supabase } from "@/lib/supabase/client";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleForgotPassword = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        throw error;
      }
      queryClient.invalidateQueries({ queryKey: [HOMEPAGE_KEY] });
      navigate({ to: "/" });
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {UPDATE_PASSWORD_STRING.resetPassword}
          </CardTitle>
          <CardDescription>
            {UPDATE_PASSWORD_STRING.enterNewPassword}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">
                  {UPDATE_PASSWORD_STRING.newPassword}
                </Label>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={UPDATE_PASSWORD_STRING.newPassword}
                  required
                  type="password"
                  value={password}
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button className="w-full" disabled={isLoading} type="submit">
                {isLoading
                  ? UPDATE_PASSWORD_STRING.saving
                  : UPDATE_PASSWORD_STRING.saveNewPassword}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
