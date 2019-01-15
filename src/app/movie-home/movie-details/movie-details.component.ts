import { Component, OnInit, Input } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movieListDetails;

  movies; //variable to hold movies data 
  p: number = 1;//set page number to 1
  

  constructor() { }

  ngOnInit() {
    this.movies = this.movieListDetails;
  }

  //method to show trailer on clicking show trailer
  showCollapsedTable(e, data) {    
    let clpsTable = jQuery(e.target).closest('.collapse-button-row').prev('.collapse-table')
    if (clpsTable) {
      if (clpsTable.hasClass('collapse')) {
        clpsTable.addClass('active').removeClass('collapse');
        jQuery(e.target).closest('.collapse-button-row').find('.fa-angle-down').addClass('fa-angle-up').removeClass('fa-angle-down');
      } else {
        clpsTable.addClass('collapse').removeClass('active');
        jQuery(e.target).closest('.collapse-button-row').find('.fa-angle-up').addClass('fa-angle-down').removeClass('fa-angle-up')
      }
    }
  }

}
