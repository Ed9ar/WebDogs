import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoLeftComponent } from './components/info-left/info-left.component';
import { InfoRightComponent } from './components/info-right/info-right.component';
import { StepsComponent } from './components/steps/steps.component';
import { ConoceComponent} from './components/conoce/conoce.component'

const routes: Routes = [
  {path:'', component: ConoceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConoceRoutingModule { }
