import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifecycleComponent } from "./LifecycleHooks/LH.component";
import { HttpClientComponent } from './httpclient/httpclient.component';

const appRoutes: Routes = [
    { path: 'LifecycleHooks', component: LifecycleComponent},
    {path: 'httpclient', component: HttpClientComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}