import { Component } from '@angular/core';

import {
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsService } from 'src/shared/services/form/forms.service';
import { HttpService } from 'src/shared/services/http/http.service';
import { EditmodelComponent } from '../editmodel/editmodel.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class NotificationsComponent {
  data: any = [];
  activeMessage!: any;
  maxMessages: number = 0;
  messageStatus: any;
  constructor(
    private httpService: HttpService,
    pconfig: NgbModalConfig,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {}

  activete(data: any) {
    this.activeMessage = data;
  }

  ngOnInit() {
    this.httpService.getNotificationMessage();

    this.maxMessages = this.httpService.data$.subscribe((val: any) => {
      this.data = val;
    });
    this.httpService.maxNot$.subscribe((val: any) => {
      this.maxMessages = val;
    });
    this.httpService.message$.subscribe((val: any) => {
      this.messageStatus = val;
    });
  }

  edit(eachdata?: any) {
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'lg',
    };
    let model = this.modalService.open(EditmodelComponent, ngbModalOptions);
    model.componentInstance.formGroupInstace = eachdata;
  }

  delete(eachdata?: any) {
    if (!window.confirm('are you sure want to delete ?')) {
      return;
    }

    this.httpService.deleteNotification(eachdata).subscribe((val: any) => {
      if (val.status === 200) {
        this.httpService.data$.next(val.data);
      }
    });
  }
}
