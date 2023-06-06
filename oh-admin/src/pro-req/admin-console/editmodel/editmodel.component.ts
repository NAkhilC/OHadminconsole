import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsService } from 'src/shared/services/form/forms.service';
import { HttpService } from 'src/shared/services/http/http.service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-editmodel',
  templateUrl: './editmodel.component.html',
  styleUrls: ['./editmodel.component.scss'],
})
export class EditmodelComponent {
  notificationForm!: FormGroup;
  responseText: number = 0;
  @Output() public emitMessage: EventEmitter<NotificationsComponent> =
    new EventEmitter();
  @Input() formGroupInstace!: any;
  constructor(
    private formBuilder: FormsService,
    private httpService: HttpService,
    private modalService: NgbModal
  ) {
    this.notificationForm = this.formBuilder.initNotificationForm();
  }
  ngOnInit() {
    this.notificationForm.patchValue(this.formGroupInstace);
    this.responseText = 0;
  }
  close() {
    this.modalService.dismissAll();
  }
  save() {
    if (this.notificationForm.valid) {
      this.httpService
        .saveNotifications({
          ...this.formGroupInstace,
          ...this.notificationForm.value,
        })
        .subscribe((val: any) => {
          if (val.status === 200) {
            this.httpService.data$.next(val.data);
            this.httpService.message$.next({
              message: 'Notification has been saved',
              status: 200,
            });
            setTimeout(() => {
              this.httpService.message$.next({});
            }, 10000);
            this.modalService.dismissAll();
            this.responseText = 200;
          } else {
            this.responseText = 400;
          }
        });
    }
  }
}
