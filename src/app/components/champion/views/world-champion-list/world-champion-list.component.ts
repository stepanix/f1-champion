import { Component, OnInit, OnDestroy } from '@angular/core';
import { Champion } from '../../models/champion.model';
import { WorldChampionListApiService } from '../../services/apis/world-champion-list.api.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { WorldChampionListFacade } from '../../facades/world-champion-list/world-champion-list.facade';

@Component({
  selector: 'app-world-champion-list',
  templateUrl: './world-champion-list.component.html',
  styleUrls: ['./world-champion-list.component.scss']
})
export class WorldChampionListComponent implements OnInit, OnDestroy {

  champions: Array<Champion>;
  errorObject: any;
  private subscriptions = new Subscription();

  // Inject facade and service as component dependency into constructor
  constructor(private worldChampionListFacade: WorldChampionListFacade, private worldChampionService: WorldChampionListApiService) { }

  // invoke service
  ngOnInit() {
    this.listChampions();
  }

  initVariables() {
    this.champions = [];
    this.errorObject = null;
  }

  listChampions() {
    this.initVariables();
    // Declare and assign subcription to a subscription object. This helps to manage multiple subscriptions
    const championServiceSubscription = this.worldChampionService.get().subscribe(res => {
      this.champions = this.worldChampionListFacade.parse(res);
    }, err => {
      this.errorObject = err;
    });
    // Add subscription to subscription object
    this.subscriptions.add(championServiceSubscription);
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
    this.listChampions();
  }

}
