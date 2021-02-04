import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() logout: string;
  @Input() showUserName: string;
  @Input() username: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  logoutFunction() {
    console.log('in logout function');
    //this.userService.userName = undefined;
    this.router.navigate(['']);
  }

}
