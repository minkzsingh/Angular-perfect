import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { FetchDataService } from './service/fetch-data.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Component/test/test.component';
import { FeaturesComponent } from './Component/features/features.component';
import { PricingComponent } from './Component/pricing/pricing.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { PostsComponent } from './Component/posts/posts.component';
import { PostComponent } from './Component/post/post.component';
import { ServiceComponent } from './Component/service/service.component';
import { DirectiveDirective } from './directive.directive';

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
  },
  {
    path: "service",
    component: ServiceComponent
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
    ServiceComponent,
    DirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
