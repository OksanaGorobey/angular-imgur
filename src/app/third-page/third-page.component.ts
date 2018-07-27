import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
    id: string;
    posts: any [] = [];

    constructor(private httpClient: HttpClient,
                private route: ActivatedRoute,
                private location: Location
    ) { }

    getTags() {
        this.id = this.route.snapshot.paramMap.get('id');
        const url = 'https://api.imgur.com/3/gallery/t/' + this.id;
        this.httpClient.get(url, { headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c3da3db643e4880d337f3981563a52fc1cabf2d0'
            })})
            .subscribe(
                (data: any []) => {
                    this.posts = data['data']['items'];
                    console.log(this.posts);
                });
    }
    onScrollDown() {
        this.posts = this.posts.concat(this.posts);
        console.log('scrolled down!!');
    }
    goBack(): void {
        this.location.back();
    }
    onScrollUp() {
        console.log('scrolled up!!');
    }
    ngOnInit() {
        this.getTags();
    }

}
