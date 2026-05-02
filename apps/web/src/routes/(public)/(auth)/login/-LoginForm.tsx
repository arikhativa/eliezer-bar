import { useQueryClient } from "@tanstack/react-query"
import { Link, useNavigate } from "@tanstack/react-router"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"
import { useState } from "react"
import { AUTH_KEY } from "@/lib/queryOptions/auth"
import { AUTH_STRING } from "@/lib/strings/auth"
import { supabase } from "@/lib/supabase/client"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [password, setPassword] = useState("")

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        throw error
      }
      console.log("QQ invali")
      queryClient.invalidateQueries({ queryKey: [AUTH_KEY] })
      console.log("QQ invali2")
      navigate({ to: "/" })
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{AUTH_STRING.login}</CardTitle>
          <CardDescription>{AUTH_STRING.addEmail}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{AUTH_STRING.email}</Label>
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
                  <Label htmlFor="password">{AUTH_STRING.pass}</Label>
                </div>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  value={password}
                />
                <Button asChild variant={"link"}>
                  <Link to={"/forgot-password"}>{AUTH_STRING.forgotPass}</Link>
                </Button>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button className="w-full" disabled={isLoading} type="submit">
                {isLoading ? AUTH_STRING.loggingIn : AUTH_STRING.login}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {AUTH_STRING.noAccount}
              <Button asChild variant={"link"}>
                <Link to={"/sign-up"}>{AUTH_STRING.signUp}</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
