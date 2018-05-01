import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User[];

  constructor(
    private UserService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.UserService.getUser()
      .subscribe(user => this.user = user)
  }

}
