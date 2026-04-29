import { SIDEBAR_STRINGS } from "@/lib/strings/sidebar"
import {
  useNavigate,
  useRouterState,
  type FileRouteTypes,
} from "@tanstack/react-router"
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
import { ChartColumn, Home, type LucideIcon } from "lucide-react"
import { Fragment } from "react/jsx-runtime"

interface SidebarItem {
  title: string
  to: FileRouteTypes["to"]
  icon: LucideIcon
  subItems?: Array<SidebarItem>
}

export function AppSidebar() {
  const router = useRouterState()
  const navigate = useNavigate()

  const list: Array<SidebarItem> = [
    {
      title: SIDEBAR_STRINGS.home,
      to: "/",
      icon: Home,
    },
    {
      title: SIDEBAR_STRINGS.poll,
      to: "/poll",
      icon: ChartColumn,
    },
  ]

  return (
    <Sidebar side="right">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {list.map((e, index) => (
                <Fragment key={index}>
                  <SidebarMenuItem className="px-2 py-1">
                    <SidebarMenuButton
                      isActive={router.location.pathname === e.to}
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
      <SidebarFooter />
    </Sidebar>
  )
}
