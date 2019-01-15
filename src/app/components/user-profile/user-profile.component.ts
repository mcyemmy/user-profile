import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserInfo } from '../../models/user-info';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: UserInfo[] = [];
  noData = false;
  breakpoint: number;
  private subscription: Subscription;

  constructor( 
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    // Subscribe to user data service
    this.subscription = this.userService.getUsers().subscribe( (res: UserInfo[]) => {
      if (res) {
        this.users = res;
      }
      else {
        this.noData = true;
      }
    }, error => {
      console.error(error);
      this.noData = true;
    })
  }
  visitLinkedPage(url) {
    window.location.href = `http:\/\/${url}`;
    // this.router.navigate([`http:\/\/${url}`]);
  }
  getGeoLocation(userLat, userLng) {
    const geoLocation = `Latitude, Longtitude = ${userLat}, ${userLng}`;
    return geoLocation;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
