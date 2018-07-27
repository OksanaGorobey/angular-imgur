import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
    gallery: any [] = [];

    constructor(private httpClient: HttpClient) { }

    getAll() {
        this.httpClient.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
            .subscribe(
                (data: any []) => {
                    this.gallery = data['data'];
                });

    }
    onScrollDown() {
        this.gallery = this.gallery.concat(this.gallery);
        console.log(this.gallery);
        console.log('scrolled down!!');
    }

    onScrollUp() {
        console.log('scrolled up!!');
    }
    ngOnInit() {
        this.getAll();
    }

}
