import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { AppConfig } from '../config/app.config';

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

  constructor(private http:HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${AppConfig.ARTICLE_URL}`);
  }
  addArticle(data:any){
    const obj = {"title":"Article 05", "content":data};
    this.articleContent.unshift(obj);
  }

  deleteArticle(index:any){
    this.articleContent.splice(index,1);
  }
}
