import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {
    private config: any;

    constructor(private http: Http) { 
        let a = Date.now();
        this.config = {a: a};
        console.log(a)
    }

    load() {
        return this.http.get('/api/config')
            .map(res=> this.extractData(res))
            .catch(this.handleError)
            .toPromise();
    }

    private extractData(res: Response) {
        let body = res.json();
        this.config = body;
    }

    public get() {
        return this.config;
    }
    
    private handleError(error: Response) {
        return Observable.throw(error);
    }
}