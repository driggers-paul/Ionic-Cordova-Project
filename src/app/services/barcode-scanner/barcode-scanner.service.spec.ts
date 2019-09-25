import { TestBed, fakeAsync } from '@angular/core/testing';
import { BarcodeScannerService } from './barcode-scanner.service';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

/**
 * Formats taken from following doc
 * https://docs.google.com/document/d/1LQkmOPviOuG0O4G2EnmNqbwAgCV_lnWyQ6_0y8HiQiA/edit
 * @dated: 2019-05-10
 */
export const UPC_A_EXAMPLE = '038000000102';
export const UPC_E_EXAMPLE = '03801002';
export const EAN_13_EXAMPLE = '0038000000102';

class MockBarcodeScanner {
  scan() {
    return <BarcodeScanResult>{};
  }
}

describe('BarcodeScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: BarcodeScanner,
      useClass: MockBarcodeScanner
    }]
  }));

  it('should be created', () => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);
    expect(service).toBeTruthy();
  });

  it('should return false if cancelled in checking cancellation', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);
    const result = <BarcodeScanResult>{
      cancelled: true
    };

    service.isResultCancelled(result)
      .then(response => {
        console.log(response);
        expect(response).toBe(false);
      });
  }));

  it('should return result if not cancelled in checking cancellation', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);
    const result = <BarcodeScanResult>{
      cancelled: false
    };

    service.isResultCancelled(result)
      .then(response => {
        expect(response).toBe(result);
      });
  }));

  it('should return boolean (false) if no barcode result is present in UPC_A conversion', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    service.getUPCA(false)
      .then(response => {
        expect(response).toBe(false);
      });
  }));

  it('should return barcode result if present in UPC_A conversion when input is in UPC_A format', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    const result = <BarcodeScanResult>{
      cancelled: false,
      text: UPC_A_EXAMPLE,
      format: 'UPC_A'
    };

    service.getUPCA(result)
      .then(response => {
        expect(response).toBe(UPC_A_EXAMPLE);
      });
  }));

  it('should return barcode result if present in UPC_A conversion when input is in EAN_13 format', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    const result = <BarcodeScanResult>{
      cancelled: false,
      text: EAN_13_EXAMPLE,
      format: 'EAN_13'
    };

    service.getUPCA(result)
      .then(response => {
        expect(response).toBe(UPC_A_EXAMPLE);
      });
  }));

  it('should return barcode result if present in UPC_A conversion when input is in UPC_E format', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    const result = <BarcodeScanResult>{
      cancelled: false,
      text: UPC_E_EXAMPLE,
      format: 'UPC_E'
    };

    service.getUPCA(result)
      .then(response => {
        expect(response).toBe(UPC_A_EXAMPLE);
      });
  }));

  it('should throw error if platform is not cordova', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    spyOn(service.platform, 'is').and.returnValue(false);

    service.scan()
      .catch(err => {
        expect(err).toBe('Not available in web platform');
      });
    expect(service.platform.is).toHaveBeenCalled();
  }));

  it('should receive barcode if scan is successfull', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    spyOn(service.platform, 'is').and.returnValue(true);
    const result = <BarcodeScanResult>{
      format: 'UPC_A',
      text: UPC_A_EXAMPLE,
      cancelled: false
    };

    spyOn(service.barcodeScanner, 'scan').and.returnValue(Promise.resolve(result));

    service.scan()
      .then(code => {
        expect(code).toBe(result.text);
      });
    expect(service.platform.is).toHaveBeenCalled();
    expect(service.barcodeScanner.scan).toHaveBeenCalled();
  }));

  it('should receive error if scan has failed', fakeAsync(() => {
    const service: BarcodeScannerService = TestBed.get(BarcodeScannerService);

    spyOn(service.platform, 'is').and.returnValue(true);
    // const result = <BarcodeScanResult>{
    //   format: 'UPC_A',
    //   text: UPC_A_EXAMPLE,
    //   cancelled: false
    // };

    spyOn(service.barcodeScanner, 'scan').and.returnValue(Promise.reject('Failed'));

    service.scan()
      .catch(error => {
        expect(error).toBe('Bad scan. Try again');
      });
    expect(service.platform.is).toHaveBeenCalled();
    expect(service.barcodeScanner.scan).toHaveBeenCalled();
  }));
});
