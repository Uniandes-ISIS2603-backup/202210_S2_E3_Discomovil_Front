import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {

  constructor(library : FaIconLibrary) {
    library.addIcons(fasStar, farStar)
  }

  fill : boolean = false;

  ngOnInit() {
  }

  @Input() self : Number = 0;
  @Input() selected : Number = -1;

  ngOnChanges(changes: SimpleChanges) {
    if (this.self > this.selected) {
      this.fill = false;
    } else {
      this.fill = true;
    }
  }

}
