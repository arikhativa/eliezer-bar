import { useSuspenseQuery } from "@tanstack/react-query";
import {
  type FileRouteTypes,
  Link,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
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
} from "@workspace/ui/components/sidebar";
import {
  Beer,
  ChartColumn,
  DatabaseIcon,
  Home,
  type LucideIcon,
} from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { useLogout } from "@/hooks/useLogout";
import { authQO } from "@/lib/queryOptions/auth";
import { SIDEBAR_STRINGS } from "@/lib/strings/sidebar";
import { isAdmin } from "@/lib/utils";

interface SidebarItem {
  icon: LucideIcon;
  reqAdmin?: boolean;
  reqAuth: boolean;
  subItems?: SidebarItem[];
  title: string;
  to: FileRouteTypes["to"];
}

export function AppSidebar() {
  const router = useRouterState();
  const logout = useLogout();
  const { data: user } = useSuspenseQuery(authQO());

  const navigate = useNavigate();

  const list: SidebarItem[] = [
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
  ];

  return (
    <Sidebar side="right">
      <SidebarHeader className="flex flex-row items-center justify-start gap-4 p-4">
        <Beer className="text-primary" />
        <div>
          <p className="font-bold">{SIDEBAR_STRINGS.title}</p>
          <p className="text-muted-foreground text-sm">
            {SIDEBAR_STRINGS.subtitle}
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {list.map((e) => (
                <Fragment key={e.title}>
                  <SidebarMenuItem className="px-2 py-1">
                    <SidebarMenuButton
                      disabled={e.reqAuth ? !user : false}
                      hidden={e.reqAdmin ? !isAdmin(user) : false}
                      isActive={router.location.pathname === e.to}
                      onClick={() => {
                        navigate({
                          to: e.to,
                          from: "/",
                        });
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
      <Separator />
      <SidebarFooter className="pb-10">
        {user ? (
          <Button onClick={logout}>{SIDEBAR_STRINGS.logout}</Button>
        ) : (
          <Button asChild>
            <Link to={"/login"}>{SIDEBAR_STRINGS.login}</Link>
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
