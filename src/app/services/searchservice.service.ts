import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { Global } from '../common/global';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  subject = webSocket(`${Global.apiWs}/search`);
  constructor() {
  }

  connect(){
    return this.subject.asObservable();
  }
  searchVideo(ytUrl: string) {
    this.subject.next({ "url": ytUrl })
  }
}
