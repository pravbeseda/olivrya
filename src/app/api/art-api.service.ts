import { Injectable } from '@angular/core';
import { Art } from '../models/art';
import { arts } from '../fixtures/arts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArtApiService {
  constructor() {}

  public getArts(): Observable<Art[]> {
    return of(arts);
  }
}
