import { Component, OnInit } from '@angular/core';
import { MeowvieService } from '../meowvie.service';
import { Meowvie } from '../meowvie';

@Component({
  selector: 'app-meowvies',
  templateUrl: './meowvies.component.html',
  styleUrls: ['./meowvies.component.css']
})
export class MeowviesComponent implements OnInit {

  meowvies: Meowvie[];
  selectedMeowvie: Meowvie;

  constructor(
    private mewovieService: MeowvieService) { }

  ngOnInit() {
    this.getMeowvies()
  }

  showDetail(meowvie: Meowvie): void {
    this.selectedMeowvie = meowvie;
  }

  getMeowvies(): void {
    this.mewovieService.getMeowvies()
      .subscribe(meowvies => this.meowvies = meowvies)
  }

}
