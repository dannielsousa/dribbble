import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'listarShots', loadChildren: 'app/shots/shots.module#ShotsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }