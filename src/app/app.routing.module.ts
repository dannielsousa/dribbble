import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'shots', loadChildren: 'app/shots/shots.module#ShotsModule' },
    { path: 'modal', component: ModalComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }