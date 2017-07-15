import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ListaShotsComponent} from './lista-shots/lista-shots.component';
import { ShotComponent } from './shot/shot.component';

const shotsRoutes: Routes = [
    { path: 'listaShots', component: ListaShotsComponent },
    { path: 'buscaShots', component: ShotComponent }
]

@NgModule({
    imports: [RouterModule.forChild(shotsRoutes)],
    exports: [RouterModule]
})

export class ShotsRoutingModule {}
