import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvShow } from '../models/tv-show.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private apiUrl = `${environment.apiUrl}/api/tvshow`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(this.apiUrl);
  }

  getById(id: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/${id}`);
  }

  create(tvShow: TvShow): Observable<TvShow> {
    return this.http.post<TvShow>(this.apiUrl, tvShow);
  }

  update(id: number, tvShow: TvShow): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, tvShow);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
