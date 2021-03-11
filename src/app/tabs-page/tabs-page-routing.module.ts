import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPagePage } from "./tabs-page.page";

const routes: Routes = [
  {
    path: "tabs-page",
    component: TabsPagePage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "notifications",
        loadChildren: () =>
          import("../notifications/notifications.module").then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: "profile",
        loadChildren: () =>
          import("../profile/profile.module").then((m) => m.ProfilePageModule),
      },
      {
        path: "news",
        loadChildren: () =>
          import("../news/news.module").then((m) => m.NewsPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs-page/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs-page/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
