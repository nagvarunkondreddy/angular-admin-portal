import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleContent:any=[
    {"title":"Article 01", "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
    {"title":"Article 02", "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
    {"title":"Article 03", "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
    {"title":"Article 04", "content" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
 
  ]

  constructor() { }

  getArticles(){
    return this.articleContent;
  }
  addArticle(data:any){
    const obj = {"title":"Article 05", "content":data};
    this.articleContent.unshift(obj);
  }

  deleteArticle(index:any){
    this.articleContent.splice(index,1);
  }
}
