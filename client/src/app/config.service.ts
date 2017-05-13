import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ISettings } from './config.model';

@Injectable()
export class ConfigService {
    public settings: ISettings;

    constructor(private http: Http) { }

    public load(): Promise<ISettings> {
        return this.http.get('/api/config')
            .map(res=> this.extractData(res))
            .catch(this.handleError)
            .toPromise();
    }

    private extractData(res: Response) {
        let body = res.json();
        this.settings = body;
        return this.settings;
    }
    
    private handleError(error: Response) {
        return Observable.throw(error);
    }
}