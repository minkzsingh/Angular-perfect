import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Component/test/test.component';
import { FeaturesComponent } from './Component/features/features.component';
import { PricingComponent } from './Component/pricing/pricing.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { PostsComponent } from './Component/posts/posts.component';
import { PostComponent } from './Component/post/post.component';

let routes: Routes = [
  {
    path: "features",
    component: FeaturesComponent
  },
  {
    path: "pricing",
    component: PricingComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  
  {
    path: "posts/:id",
    component: PostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FeaturesComponent,
    PricingComponent,
    SidebarComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
