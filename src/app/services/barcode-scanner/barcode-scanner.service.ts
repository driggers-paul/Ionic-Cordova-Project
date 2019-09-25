import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Parse } from './zebra';

@Injectable({
  providedIn: 'root'
})
export class BarcodeScannerService {

  constructor(public barcodeScanner: BarcodeScanner, public platform: Platform) {
  }

  /**
   * Start scanner
   */
  public scan(): Promise<string | boolean> {
    if (this.platform.is('cordova')) {
      return this.barcodeScanner.scan()
        .then(result => this.isResultCancelled(result))
        .then(result => this.getUPCA(result))
        .catch(() => Promise.reject('Bad scan. Try again'));
    }

    return Promise.reject('Not available in web platform');
  }

  /**
   * Get UPCA converted string from UPCE and EAN_13
   * For EAN_8 returning direct string value
   *
   * @param result
   */
  public getUPCA(result: BarcodeScanResult | boolean): Promise<string | boolean> {
    if (result === false) {
      return Promise.resolve(result);
    }

    result = <BarcodeScanResult>result;

    const barcodeInstance = Parse(result.text);

    if (result.format === 'EAN_8') {
      return Promise.resolve(result.text);
    }

    if (result.format === 'UPC_A') {
      return Promise.resolve(result.text);
    }

    return Promise.resolve(barcodeInstance.toUPCA().code);
  }

  public isResultCancelled(result: BarcodeScanResult): Promise<BarcodeScanResult | boolean> {
    if (result.cancelled) {
      return Promise.resolve(false);
    }

    return Promise.resolve(result);
  }
}
