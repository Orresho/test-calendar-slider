import { Slide } from './slide.model';

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class SlideService {
    constructor(private http: Http) { }

    // Main slides array
    private slides: Slide[] = [];

    getSlides() {
        return this.http.get('http://localhost:3000/event')
            .map((response: Response) => {
                return this.slides = response.json().obj;
                //this.slides = response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error.json()));

    }
}