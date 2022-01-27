import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardContent: any;
  @Input() cardImageLocation: any;
  @Input() cardTitle: any;
  constructor(private spinnerService: SpinnerService) {


  }

  ngOnInit(): void {
    this.cardContent = [
      { "name": `${this.cardTitle} 1`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": `${this.cardTitle} 2`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": `${this.cardTitle} 3`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": `${this.cardTitle} 4`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": `${this.cardTitle} 5`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": `${this.cardTitle} 6`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." },
      { "name": `${this.cardTitle} 7`, "description": "Some quick example text to build on the card title and make up the bulkof the card's content." }
    ]

  }

}
