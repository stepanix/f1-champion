import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerRoutingModule } from './winner-routing.module';
import { WinnerListComponent } from './containers/winner-list/winner-list.component';
import { WinnerApiService } from './services/apis/winner.api.service';

@NgModule({
  declarations: [WinnerListComponent],
  providers: [WinnerApiService],
  imports: [
    CommonModule,
    WinnerRoutingModule
  ]
})
export class WinnerModule { }
