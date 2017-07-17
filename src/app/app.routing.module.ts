import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'shots', loadChildren: 'app/shots/shots.module#ShotsModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }