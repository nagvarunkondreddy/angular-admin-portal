import { Component, OnInit } from '@angular/core';
import { Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip } from 'node_modules/chart.js';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleData:any;

  constructor(private articleService : ArticleService) {    

  }

  ngOnInit(): void {
    this.articleData=this.articleService.getArticles();
  }

  deleteArticle(index:any){
    this.articleService.deleteArticle(index);

  }

}
