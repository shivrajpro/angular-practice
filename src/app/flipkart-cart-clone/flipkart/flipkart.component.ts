import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {
  searchQuery: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSearch(event:Event){
    const q = (event.target as HTMLInputElement).value;

    this.apiService.search.next(q);
  }

}
