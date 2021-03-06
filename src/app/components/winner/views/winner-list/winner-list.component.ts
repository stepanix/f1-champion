import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Winner } from '../../models/winner.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { WinnerListApiService } from '../../services/apis/winner-list.api.service';
import { WinnerListFacade } from '../../facades/winner-list/winner-list.facade';

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

  // Inject pipe and service as component dependency into constructor
  constructor(
    private route: ActivatedRoute,
    private winnerListService: WinnerListApiService,
    private winnerListFacade: WinnerListFacade
  ) { }

  // invoke service
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
    // Declare and assign subcription to a subscription object. This helps to manage multiple subscriptions
    const winnerServiceSubscription = this.winnerListService
      .get(this.season)
      .subscribe(
        res => {
          this.winners = this.winnerListFacade.parse(res);
        },
        err => {
          this.errorObject = err;
        }
      );
    // Add subscription to subscription object
    this.subscriptions.add(winnerServiceSubscription);
  }

  /* *
   * unsubscribe to prevent memory leaks although http subscriptions
   * also unsubscribe after a restful service transaction has completed.
   */
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  /* *
 * This method is used to invoke the service again if call fails.
 */
  reloadService() {
    this.listWinners();
  }
}
