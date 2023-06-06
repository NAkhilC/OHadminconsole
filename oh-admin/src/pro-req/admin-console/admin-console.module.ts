import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpService } from 'src/shared/services/http/http.service';
import { EditmodelComponent } from './editmodel/editmodel.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    NotificationsComponent,
    EditmodelComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgbModule, NgbDatepickerModule],
  exports: [AdminHomeComponent, EditmodelComponent],
})
export class AdminConsoleModule {
  constructor(private router: Router, private httpService: HttpService) {}
}
