import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable } from 'rxjs';
import { JoseTeste } from './ze';

@Injectable({
  providedIn: 'root',
})
export class ZeComponentService {
  private readonly path = 'http://localhost:3000/joseTeste'; // Substitua 3000 pela porta que sua API está usando
  constructor(private httpClient: HttpClient) {}

  listAll(): Observable<Array<JoseTeste>> {
    return this.httpClient
      .get<Array<JoseTeste>>(`${this.path}`)
      .pipe(first(), delay(3000));
  }
}
