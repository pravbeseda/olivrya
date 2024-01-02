import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtApiService } from 'src/app/api/art-api.service';
import { Art } from 'src/app/models/art';

@Injectable()
export class ArtService {
  constructor(private readonly artApiService: ArtApiService) {}

  public getArts(): Observable<Art[]> {
    return this.artApiService.getArts();
  }
}
