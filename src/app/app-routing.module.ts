import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditoTableComponent } from './components/credit-table/credito-table.component';
import { CreditoDetailsComponent } from './components/credit-details/credito-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'creditos', pathMatch: 'full' },
  { path: 'creditos', component: CreditoTableComponent },
  { path: 'creditos/:id', component: CreditoDetailsComponent },
  { path: '**', redirectTo: 'creditos' } // Uma rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
