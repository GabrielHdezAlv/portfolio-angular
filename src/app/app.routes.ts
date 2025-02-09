import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';

export const routes: Routes = [
    { path: '', component: HeroComponent }, // Ruta principal
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir rutas no encontradas a la home
];
