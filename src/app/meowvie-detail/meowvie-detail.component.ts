import { Component, OnInit, Input } from '@angular/core';
import { Meowvie } from '../meowvie';

@Component({
  selector: 'app-meowvie-detail',
  templateUrl: './meowvie-detail.component.html',
  styleUrls: ['./meowvie-detail.component.scss']
})
export class MeowvieDetailComponent implements OnInit {

  @Input() meowvie: Meowvie;

  constructor() { }

  ngOnInit() {
  }

  close() {
    document.querySelector('.detail-modal').classList.add('hidden');
  }

}
