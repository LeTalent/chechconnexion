import { Component, OnInit } from '@angular/core';
// import { OfflineService } from './offline.service';
import { ConnectionService } from 'ng-connection-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [OfflineService]
})
export class AppComponent implements OnInit {
  status = 'ONLINE';
  isConnected = true;
  color = 'green';

  // constructor(private offlineService: OfflineService) {}
  // ngOnInit(): void {
  //   this.offlineService.connectionStatus$.subscribe(x => {
  //     this.isConnected = x;
  //     if (this.isConnected) {
  //       this.status = 'ONLINE';
  //       this.color = 'green';
  //     } else {
  //       this.status = 'OFFLINE';
  //       this.color = 'red';
  //     }
  //   });
  // }
  constructor(private connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.connectionService.monitor().subscribe(x => {
      this.isConnected = x;
      if (this.isConnected) {
        this.status = 'ONLINE';
        this.color = 'green';
      } else {
        this.status = 'OFFLINE';
        this.color = 'red';
      }
    });
  }
}
