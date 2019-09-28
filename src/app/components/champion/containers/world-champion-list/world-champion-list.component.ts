import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WorldChampionFacade } from '../../facades/world-champion-facade/world-champion.facade';
import { Champion } from '../../models/champion.model';

@Component({
  selector: 'app-world-champion-list',
  templateUrl: './world-champion-list.component.html',
  styleUrls: ['./world-champion-list.component.scss']
})
export class WorldChampionListComponent implements OnInit {

  champions$: Observable<Array<Champion>>;

  constructor(private worldChampionFacade: WorldChampionFacade) { }

  ngOnInit() {
    this.champions$ = this.worldChampionFacade.listChampions();
  }

}
