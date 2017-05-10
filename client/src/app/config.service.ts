import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    load() {
        return new Promise(resolve => {
            console.log('solved');
            resolve('ok');
        });
    }
}