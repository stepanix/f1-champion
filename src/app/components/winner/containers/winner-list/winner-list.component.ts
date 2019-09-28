import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WinnerListFacade } from '../../facades/winner-list-facade/winner-list.facade';
import { Winner } from '../../models/winner.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.scss']
})
export class WinnerListComponent implements OnInit {

  winners$: Observable<Array<Winner>>;
  driverId = '';

  constructor(private route: ActivatedRoute, private winnerListFacade: WinnerListFacade) {}

  ngOnInit() {
    const season = this.route.snapshot.params.season;
    this.driverId = this.route.snapshot.params.driverId;
    this.winners$ = this.winnerListFacade.listWinners(season, this.driverId);
  }
}
