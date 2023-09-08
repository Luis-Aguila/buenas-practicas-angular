import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "@pages/layout/layout/layout.component";
import { LoginComponent } from '@pages/auth/login/login.component';
import { NotFoundComponent } from '@pages/auth/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("@pages/home/home.module").then(
          (m) => m.HomeModule
        )
      },
      {
        path: "forms",
        loadChildren: () => import("@pages/forms/forms.module").then(
          (m) => m.FormsModule
        )
      },
      {
        path: "services",
        loadChildren: () => import("@pages/services/services.module").then(
          (m) => m.ServicesModule
        )
      },
      {
        path: "signals",
        loadChildren: () => import("@pages/signals/signals.module").then(
          (m) => m.SignalsModule
        )
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
