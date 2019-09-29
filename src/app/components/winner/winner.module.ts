import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerRoutingModule } from './winner-routing.module';
import { WinnerListComponent } from './containers/winner-list/winner-list.component';
import { WinnerApiService } from './services/apis/winner.api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WinnerListPipe } from 'src/app/shared/pipes/winner/winner-list.pipe';

@NgModule({
  declarations: [WinnerListComponent],
  providers: [WinnerApiService, WinnerListPipe],
  imports: [CommonModule, SharedModule, WinnerRoutingModule],
  exports: [WinnerListComponent]
})
export class WinnerModule {}
