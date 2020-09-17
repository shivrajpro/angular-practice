import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from '../services/data-storage.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{

    constructor(private dsService: DataStorageService ){}

    onSaveData(){
        this.dsService.storeRecipes();
    }

    onFetchData(){
        this.dsService.fetchRecipes();
    }
}