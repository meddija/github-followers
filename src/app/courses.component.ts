import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h1>{{title}}</h1>

  <div (click)="onClickDiv()">
  <button (click)="onClick($event)"  class="btn btn-primary"> Mon button</button>
  </div>

  <i class="bi bi-x-diamond-fill">tst</i>

  `

})
export class CoursesComponent {
  title = "la liste de mes cours";
  courses: any;
onClick($event: any){
  $event.stopPropagation();
console.log('button clicked',$event);
 }

 onClickDiv(){
    console.log('div is clicked');
     }

}