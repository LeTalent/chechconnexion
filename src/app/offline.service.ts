import { Injectable } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';

@Injectable()
export class OfflineService {
  connectionStatus$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
    fromEvent(window, 'online').subscribe(online =>
      this.connectionStatus$.next(true)
    );
    fromEvent(window, 'offline').subscribe(online =>
      this.connectionStatus$.next(false)
    );
  }
}
