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
}
