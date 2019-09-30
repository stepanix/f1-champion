import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerRoutingModule } from './winner-routing.module';
import { WinnerListComponent } from './views/winner-list/winner-list.component';
import { WinnerListApiService } from './services/apis/winner-list.api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WinnerListFacade } from './facades/winner-list/winner-list.facade';

@NgModule({
  declarations: [WinnerListComponent],
  providers: [WinnerListApiService, WinnerListFacade],
  imports: [CommonModule, SharedModule, WinnerRoutingModule],
  exports: [WinnerListComponent]
})
export class WinnerModule {}
