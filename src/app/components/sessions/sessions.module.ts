import { CartComponent } from './../cart/cart.component';
import { SessionsListComponent } from './../sessions-list/sessions-list.component';
import { SesisonsListModule } from './../sessions-list/sessions-list.module';
import { SessionsComponent } from './sessions.component';
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from '../cart/cart.module';

const routes: Routes = [
    { path: '', component: SessionsComponent }
]
@NgModule({
    declarations: [SessionsComponent],
    imports: [SesisonsListModule, CartModule, RouterModule.forChild(routes)],
    exports: [SessionsComponent, RouterModule]
})
export class SessionsModule { }