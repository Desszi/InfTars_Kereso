import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Journal } from '../model/journal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  endpoint: string = 'http://localhost:3000/journals';

  journalList$: BehaviorSubject<Journal[]> = new BehaviorSubject<Journal[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  getAll(): void {
    this.http.get<Journal[]>(this.endpoint).subscribe(
      journals => this.journalList$.next(journals)
    );
  }

  get(id: number): Observable<Journal> {
    return this.http.get<Journal>(`${this.endpoint}/${id}`);
  }

  delete(journal: Journal): Observable<Journal> {
    return this.http.delete<Journal>(`${this.endpoint}/${journal.id}`);
  }

  create(journal: Journal): Observable<Journal> {
    return this.http.post<Journal>(`${this.endpoint}`, journal);
  }

  update(journal: Journal): Observable<Journal> {
    return this.http.patch<Journal>(`${this.endpoint}/${journal.id}`, journal);
  }
}
