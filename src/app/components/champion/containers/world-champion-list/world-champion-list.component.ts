import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldChampionFacade } from '../../facades/world-champion-facade/world-champion.facade';
import { Champion } from '../../models/champion.model';
import { WorldChampionApiService } from '../../services/apis/world-champion.api.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-world-champion-list',
  templateUrl: './world-champion-list.component.html',
  styleUrls: ['./world-champion-list.component.scss']
})
export class WorldChampionListComponent implements OnInit, OnDestroy {

  champions: Array<Champion>;
  errorObject: any;
  private subscriptions = new Subscription();

  constructor(private worldChampionService: WorldChampionApiService,
              private worldChampionFacade: WorldChampionFacade) { }

  ngOnInit() {
    this.listChampions();
  }

  initVariables() {
    this.champions = [];
    this.errorObject = null;
  }

  listChampions() {
    this.initVariables();
    const championServiceSubscription =  this.worldChampionService.get().subscribe(res => {
      this.champions = this.worldChampionFacade.parseChampionList(res);
    }, err => {
      this.errorObject = err;
    });
    this.subscriptions.add(championServiceSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  reloadService() {
    this.listChampions();
  }

}
