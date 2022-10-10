import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from "../shared/models/tag";
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[] = [];
  @Input() foodPageTags:Tag[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.fs.getAllTags();
  }

}
