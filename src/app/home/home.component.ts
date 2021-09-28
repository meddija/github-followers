import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }


  ajouter(){
//ce button ne dirige vers le sigment dynamique followers dans le fichier de routage
this.route.navigate(['followers',12,'khadija'],{ queryParams: {page:12,type:'Admin'}
}

)
  }
}
