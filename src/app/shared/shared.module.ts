import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverNamePipe } from './pipes/driver/driver-name.pipe';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';

@NgModule({
  declarations: [DriverNamePipe, LoadingIndicatorComponent, ErrorScreenComponent],
  exports: [DriverNamePipe, LoadingIndicatorComponent, ErrorScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
