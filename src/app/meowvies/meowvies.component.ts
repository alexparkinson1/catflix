import { Component, OnInit } from '@angular/core';
import { MeowvieService } from '../meowvie.service';

@Component({
  selector: 'app-meowvies',
  templateUrl: './meowvies.component.html',
  styleUrls: ['./meowvies.component.css']
})
export class MeowviesComponent implements OnInit {

  meowvies: Meowvie[];

  constructor(
    private mewovieService: MeowvieService) { }

  ngOnInit() {
    this.getMeowvies()
  }

  getMeowvies(): void {
    this.mewovieService.getMeowvies()
      .subscribe(meowvies => this.meowvies = meowvies)
  }

}
