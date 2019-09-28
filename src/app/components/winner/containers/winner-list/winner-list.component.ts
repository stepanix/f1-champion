import { Component, OnInit } from '@angular/core';
import { WinnerApiService } from '../../services/apis/winner.api.service';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.scss']
})
export class WinnerListComponent implements OnInit {

  constructor(private winnerService: WinnerApiService) { }

  ngOnInit() {
    
  }

}
