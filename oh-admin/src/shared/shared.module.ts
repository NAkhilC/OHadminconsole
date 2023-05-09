import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpService } from './services/http/http.service';
import { FormsService } from './services/form/forms.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
