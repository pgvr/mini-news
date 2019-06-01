import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  public showAlert: boolean;
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe(evt => {
      this.showAlert = true;
    });
  }

  public reloadLocation() {
    window.location.reload();
  }

  public closeAlert() {
    this.showAlert = false;
  }
}
