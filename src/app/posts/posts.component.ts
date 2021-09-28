import { AppError } from './../common/app-error';
//import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:any=[];

status=true;
//on cree une variable initialiser par un objet vide 
post={
  id:0,
  title:'',
  body:'',
  userId:''
}
  constructor(private postService:PostService) {
   
   }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.postService.getAll()
    .subscribe((response)=>{
      this.posts=response
    },error=>{
      alert('erreur inattendu')
    })
  }
  //on cree un post a partir du formulaire
  createPost() {
    this.postService.create(this.post)
    .subscribe(response=>{
     this.post.id=(response as any).id;
    // this.posts.push(this.post); //permet de creer un post en queue 
     this.posts.unshift(this.post); //permet de creer un post en tete
     this.post={
      id:0,
      title:'',
      body:'',
      userId:''
    }

  } ,(error:Response)=>{
    if(error.status===400)
    {
      alert('merci de vérifier vos informations')
    }
    else{
    alert('erreur inattendu')
    }
  })
  }

  editPost(post:any){

    this.post=post;
    this.status=false
  }

  updatePost(){

    this.postService.update(this.post)
    .subscribe( ()=>{
     this.post={
      id:0,
      title:'',
      body:'',
      userId:''
    }
    this.status=true;
  }
    ,error=>{
      alert('erreur inattendu')
    })
  }

  deletePost(post: any){
    this.postService.delete(post)
    .subscribe(()=>{
      let index =this.posts.indexOf(post);
      this.posts.splice(index,1);
     
    },(error:AppError)=>{
      if(error instanceof NotFoundError)
      {
        alert('Ce post est déja supprimé')
      }
      else{
      alert('erreur inattendu')
      }
    })

}

}

