import { useLogout } from "@/hooks/useLogout"
import { authQO } from "@/lib/queryOptions/auth"
import { SIDEBAR_STRINGS } from "@/lib/strings/sidebar"
import { isAdmin } from "@/lib/utils"
import { useSuspenseQuery } from "@tanstack/react-query"
import {
  Link,
  useNavigate,
  useRouterState,
  type FileRouteTypes,
} from "@tanstack/react-router"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import {
  Beer,
  ChartColumn,
  DatabaseIcon,
  Home,
  type LucideIcon,
} from "lucide-react"
import { Fragment } from "react/jsx-runtime"

interface SidebarItem {
  title: string
  to: FileRouteTypes["to"]
  icon: LucideIcon
  reqAuth: boolean
  reqAdmin?: boolean
  subItems?: Array<SidebarItem>
}

export function AppSidebar() {
  const router = useRouterState()
  const logout = useLogout()
  const { data: user } = useSuspenseQuery(authQO())

  const navigate = useNavigate()

  const list: Array<SidebarItem> = [
    {
      title: SIDEBAR_STRINGS.home,
      to: "/",
      reqAuth: false,
      icon: Home,
    },
    {
      title: SIDEBAR_STRINGS.poll,
      to: "/poll",
      reqAuth: true,
      icon: ChartColumn,
    },
    {
      title: SIDEBAR_STRINGS.hameData,
      to: "/home-page-data",
      reqAuth: true,
      reqAdmin: true,
      icon: DatabaseIcon,
    },
  ]

  return (
    <Sidebar side="right">
      <SidebarHeader className="flex flex-row items-center justify-start gap-4 p-4">
        <Beer className="text-primary" />
        <div>
          <p className="font-bold">{SIDEBAR_STRINGS.title}</p>
          <p className="text-sm text-muted-foreground">
            {SIDEBAR_STRINGS.subtitle}
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {list.map((e, index) => (
                <Fragment key={index}>
                  <SidebarMenuItem className="px-2 py-1">
                    <SidebarMenuButton
                      isActive={router.location.pathname === e.to}
                      disabled={!e.reqAuth ? false : !user}
                      hidden={!e.reqAdmin ? false : !isAdmin(user)}
                      onClick={() => {
                        navigate({
                          to: e.to,
                          from: "/",
                        })
                      }}
                    >
                      <e.icon />
                      <p className="test-base font-semibold">{e.title}</p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator></Separator>
      <SidebarFooter className="pb-10">
        {!!user ? (
          <Button onClick={logout}>{SIDEBAR_STRINGS.logout}</Button>
        ) : (
          <Button asChild>
            <Link to={"/login"}>{SIDEBAR_STRINGS.login}</Link>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
