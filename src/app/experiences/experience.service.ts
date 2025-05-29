import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../commons/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private readonly JSON_URL: string = "./experiences/experiences.json";

  constructor(private readonly http: HttpClient) { }

  public getJson(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.JSON_URL);
  }

}
