import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverNamePipe } from './pipes/driver/driver-name.pipe';
import { LoadingIndicatorComponent } from './components/loading-indicator/views/loading-indicator.component';
import { ErrorScreenComponent } from './components/error-screen/views/error-screen.component';
import { ChampionListPipe } from './pipes/champion/champion-list.pipe';
import { WinnerListPipe } from './pipes/winner/winner-list.pipe';

@NgModule({
  declarations: [DriverNamePipe, ChampionListPipe, WinnerListPipe, LoadingIndicatorComponent, ErrorScreenComponent],
  exports: [DriverNamePipe, ChampionListPipe, WinnerListPipe, LoadingIndicatorComponent, ErrorScreenComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
