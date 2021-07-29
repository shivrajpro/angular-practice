import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor(private routeService:RouteService, private location:Location) { }

  ngOnInit(): void {
    this.routeService.getPreviousUrl();
  }

  onBackClick(){
    this.location.back();
  }
}
