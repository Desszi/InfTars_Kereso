import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Journal } from 'src/app/model/journal';
import { JournalService } from 'src/app/service/journal.service';

@Component({
  selector: 'app-complex-search',
  templateUrl: './complex-search.component.html',
  styleUrls: ['./complex-search.component.css']
})
export class ComplexSearchComponent implements OnInit {

  filterPhraseAuthor: string = '';
  filterPhraseTitle: string = '';
  filterPhraseWord: string = '';

  filterKeyAuthor : string = 'szerzok';
  filterKeyTitle : string = 'cim';
  filterKeyWord : string = 'kulcsszavak';
  
  sortby: string = 'id';

  journals$: Observable<Journal[]> = this.journalService.journalList$;

  constructor(
    private journalService: JournalService,
  ) { }

  ngOnInit(): void {
    this.journalService.getAll();
    this.journals$.subscribe();
  }

  setSorting(param: string): void {
    
    this.sortby = param;
    const selectedHeader = document.querySelector('#h_' + param);
    const selectedtableHeaders = document.querySelectorAll('.header');

    selectedtableHeaders.forEach(element => {
      element.classList.remove('header-active');
    });
    selectedHeader?.classList.add('header-active');
  }

}
