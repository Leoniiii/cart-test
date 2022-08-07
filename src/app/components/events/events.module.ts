import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { NgModule } from "@angular/core";
import { EventsCardModule } from '../event-card/event-card.module';
const routes: Routes = [
    { path: '', component: EventsComponent }
]
@NgModule({
    declarations: [EventsComponent],
    imports: [EventsCardModule, CommonModule, RouterModule.forChild(routes)],
    exports: [EventsComponent, RouterModule]
})

export class EventsModule { }