import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    comments: any [] = [];
    clue: any[] = [];
    cover: string;
    pic: string;
    id: string;
    constructor(private httpClient: HttpClient,
                private route: ActivatedRoute,
                private location: Location

    ) {
    }
    getTags( ) {
        const id = this.route.snapshot.paramMap.get('id');
        const url = 'https://api.imgur.com/3/gallery/' + id + '/comments';
        const urlpic = 'https://api.imgur.com/3/gallery/' + id;
        this.httpClient.get(url, { headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c3da3db643e4880d337f3981563a52fc1cabf2d0'
            })})
            .subscribe(
                (comments: any []) => {
                    this.comments = comments['data'];
                });
        this.httpClient.get(urlpic, { headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c3da3db643e4880d337f3981563a52fc1cabf2d0'
            })})
            .subscribe(
                (data: any []) => {
                    this.clue = data['data'];
                    this.id = data['data']['id'];
                    this.cover = data['data']['cover'];
                    if (data['data']['images']) {
                    this. pic = data['data']['images'][0]['type']; }
                });
    }
    onScrollDown() {
        this.comments = this.comments.concat(this.comments);
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
