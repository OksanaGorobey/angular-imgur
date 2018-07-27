import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';
import {ThirdPageComponent} from './third-page/third-page.component';
import {CommentsComponent} from './comments/comments.component';

const routes: Routes = [
    { path: 'tag', component: SecondPageComponent},
    { path: 'post/:id', component: ThirdPageComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: FirstPageComponent},
    { path: 'comments/:id', component: CommentsComponent},

];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule {
}
