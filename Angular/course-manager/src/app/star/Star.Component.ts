import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component ({
    selector: 'app-star',
    templateUrl: './Star.Component.html',
    styleUrls: ['./Star.Component.css']
})

export class StarComponent implements OnChanges {

    @Input ()

    rating: number = 0;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74/5;
        
    }

}