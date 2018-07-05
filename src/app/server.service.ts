import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor (private http: Http) {}

  storeServers (server) {
    return this.http.post('https://http-angular-852da.firebaseio.com/data.json', server);
  }

  getServers() {
    return this.http.get('https://http-angular-852da.firebaseio.com/data.json')
                    .map((response: Response) => {
                            const data = response.json();
                            return data; }
                        )
                    .catch((error: Response) => {
                      console.log(error);
                      return Observable.throw('something went wrong');
                    });
}
