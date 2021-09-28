import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers:any=[];
  follower={
    id:0,
    login:'',
    avatar_url:'',
    html_url:''
  }
  
  constructor( private githubFollowersService: GithubFollowersService) { }

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers(){
    this.githubFollowersService.getAll()
    .subscribe(followers=>
      this.followers=followers)
    
  }




}
