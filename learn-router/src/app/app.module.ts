import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildrenComponent } from './children/children.component';
import { NormalComponent } from './normal/normal.component';
import { RedirectComponent } from './redirect/redirect.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { AssistComponent } from './assist/assist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChildrenOneComponent } from './children-one/children-one.component';
import { ChildrenTwoComponent } from './children-two/children-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildrenComponent,
    NormalComponent,
    RedirectComponent,
    WildcardComponent,
    AssistComponent,
    NotFoundComponent,
    ChildrenOneComponent,
    ChildrenTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
