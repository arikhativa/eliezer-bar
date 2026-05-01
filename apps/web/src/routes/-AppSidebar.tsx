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
  SidebarGroupLabel,
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
  subItems?: SidebarItem[];
  title: string;
  to: FileRouteTypes["to"];
}

function NavElement({ e }: { e: SidebarItem }) {
  const router = useRouterState();

  const navigate = useNavigate();

  return (
    <SidebarMenuItem className="px-2 py-1">
      <SidebarMenuButton
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
  );
}

export function AppSidebar() {
  const logout = useLogout();
  const { data: user } = useSuspenseQuery(authQO());

  const list: SidebarItem[] = [
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
  ];

  const adminList: SidebarItem[] = [
    {
      title: SIDEBAR_STRINGS.hameData,
      to: "/home-page-data",
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
                  <NavElement e={e} />
                </Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {isAdmin(user) && (
          <SidebarGroup>
            <SidebarGroupLabel>{SIDEBAR_STRINGS.adminPage}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminList.map((e) => (
                  <Fragment key={e.title}>
                    <NavElement e={e} />
                  </Fragment>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <Separator />
      <SidebarFooter className="px-4 py-6">
        {user ? (
          <>
            <p className="text-center text-muted-foreground">{user.email}</p>
            <Button onClick={logout}>{SIDEBAR_STRINGS.logout}</Button>
          </>
        ) : (
          <>
            <Button asChild>
              <Link to={"/login"}>{SIDEBAR_STRINGS.login}</Link>
            </Button>
            <Button asChild variant={"link"}>
              <Link to={"/sign-up"}>{SIDEBAR_STRINGS.signUp}</Link>
            </Button>
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
