import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {CommentsComponent} from './comments/comments.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';





@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
      CommentsComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
    
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      HttpClientModule,
      AppRoutingModule,
      InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
