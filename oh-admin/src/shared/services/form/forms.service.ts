import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor(private fbs: FormBuilder) {}

  initLoginForm() {
    return this.fbs.group({
      loginid: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  initNotificationForm() {
    return this.fbs.group({
      context: new FormControl(null, [Validators.required]),
      notificationName: new FormControl(null, [Validators.required]),
      effectiveDate: new FormControl(
        formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'),
        [Validators.required]
      ),
      endDate: new FormControl(
        formatDate(new Date().getTime() + 21 * 86400000, 'yyyy-MM-dd', 'en-US'),
        [Validators.required]
      ),
      priority: new FormControl(null, [Validators.required]),
      targetUsers: new FormControl(null, [Validators.required]),
    });
  }
}
