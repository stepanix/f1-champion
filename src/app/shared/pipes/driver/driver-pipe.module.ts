import { NgModule } from '@angular/core';
import { DriverNamePipe } from './driver-name.pipe';

@NgModule({
  declarations: [DriverNamePipe],
  exports: [DriverNamePipe]
})
export class DriverNamePipeModule {}
