import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
  id: number = 0;
  page: number = 0;
  username: string = "";
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    


      this.id = +this.route.snapshot.params['id'];
  
      this.username = this.route.snapshot.params['username'];
     
       this.page=+this.route.snapshot.queryParams['page']
   


  }
}


