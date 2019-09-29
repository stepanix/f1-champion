import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerRoutingModule } from './winner-routing.module';
import { WinnerListComponent } from './containers/winner-list/winner-list.component';
import { WinnerApiService } from './services/apis/winner.api.service';
import { WinnerListFacade } from './facades/winner-list-facade/winner-list.facade';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WinnerListComponent],
  providers: [WinnerApiService, WinnerListFacade],
  imports: [CommonModule, SharedModule, WinnerRoutingModule],
  exports: [WinnerListComponent]
})
export class WinnerModule {}
