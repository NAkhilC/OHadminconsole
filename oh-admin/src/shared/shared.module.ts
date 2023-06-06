import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpService } from './services/http/http.service';
import { FormsService } from './services/form/forms.service';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './services/authGuard/auth-guard.service';
import { UsernamePipe } from './pipes/username/username.pipe';

@NgModule({
  declarations: [HeaderComponent, UsernamePipe],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class SharedModule {
  constructor(private httpService: HttpService) {}
}
