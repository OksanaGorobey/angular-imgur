import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {

    tags: any [] = [];

    constructor(private httpClient: HttpClient) { }

    getTags() {
        this.httpClient.get('https://api.imgur.com/3/tags', { headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c3da3db643e4880d337f3981563a52fc1cabf2d0'
            })})
            .subscribe(
                (data: any []) => {
                    this.tags = data['data']['tags'];
                });

    }

    onScrollDown() {
        this.tags = this.tags.concat(this.tags);
        console.log('scrolled down!!');
    }

    onScrollUp() {
        console.log('scrolled up!!');
    }
    ngOnInit() {
        this.getTags();
    }
}
