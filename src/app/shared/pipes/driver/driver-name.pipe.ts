import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../../../core/models/driver.model';

@Pipe({
  name: 'driverNamePipe'
})
export class DriverNamePipe implements PipeTransform {

  transform(driver: Driver): any {
    return driver.givenName + ' ' + driver.familyName;
  }

}
