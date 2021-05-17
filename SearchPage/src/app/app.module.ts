import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SimpleSearchComponent } from './page/simple-search/simple-search.component';
import { ComplexSearchComponent } from './page/complex-search/complex-search.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { JournalService } from './service/journal.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SimpleSearchComponent,
    ComplexSearchComponent,
    SortPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
