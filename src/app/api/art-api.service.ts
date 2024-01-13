import { Injectable } from '@angular/core';
import { Art } from '../models/art';
import { arts } from '../fixtures/arts';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtApiService {
  constructor() {}

  public getArts(): Observable<Art[]> {
    return of(arts);
  }

  public getArtsItem(id: number): Observable<Art> {
    const item: Art | undefined = arts.find(el => el.id === id);
    return (item !== undefined) ? of(item) : throwError(() => 'Not found!');
  }
}
