import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Winner } from '../../models/winner.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { WinnerApiService } from '../../services/apis/winner.api.service';
import { WinnerListPipe } from 'src/app/shared/pipes/winner/winner-list.pipe';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.scss']
})
export class WinnerListComponent implements OnInit, OnDestroy {
  errorObject: any;
  private subscriptions = new Subscription();
  winners: Array<Winner>;
  driverId = '';
  season = '';

  constructor(
    private route: ActivatedRoute,
    private winnerService: WinnerApiService,
    private winnerListPipe: WinnerListPipe
  ) {}

  ngOnInit() {
    this.season = this.route.snapshot.params.season;
    this.driverId = this.route.snapshot.params.driverId;
    this.listWinners();
  }

  initVariables() {
    this.winners = [];
    this.errorObject = null;
  }

  listWinners() {
    this.initVariables();
    const winnerServiceSubscription = this.winnerService
      .get(this.season)
      .subscribe(
        res => {
          this.winners = this.winnerListPipe.transform(res);
        },
        err => {
          this.errorObject = err;
        }
      );
    this.subscriptions.add(winnerServiceSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  reloadService() {
    this.listWinners();
  }
}
