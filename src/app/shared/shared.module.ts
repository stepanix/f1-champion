import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverNamePipe } from './pipes/driver/driver-name.pipe';
import { LoadingIndicatorComponent } from './components/loading-indicator/views/loading-indicator.component';
import { ErrorScreenComponent } from './components/error-screen/views/error-screen.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [DriverNamePipe, LoadingIndicatorComponent, ErrorScreenComponent, HeaderComponent],
  exports: [DriverNamePipe, LoadingIndicatorComponent, ErrorScreenComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
