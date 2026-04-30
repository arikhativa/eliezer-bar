import { HomePageDataForm } from "@/routes/(protected)/(admin)/home-page-data/-HomePageDataForm"
import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "@workspace/ui/components/card"

export const Route = createFileRoute("/(protected)/(admin)/home-page-data/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex items-center justify-center pt-20">
      <Card>
        <CardContent>
          <HomePageDataForm />
        </CardContent>
      </Card>
    </div>
  )
}
