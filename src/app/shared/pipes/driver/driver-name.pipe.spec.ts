import { DriverNamePipe } from './driver-name.pipe';
import { Driver } from 'src/app/core/models/driver.model';

describe('DriverNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DriverNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should format drivers name', () => {
    const MOCK_DRIVER: Driver = {
        driverId: '12345',
        permanentNumber: '1',
        code: '001',
        url: 'url',
        givenName: 'lastName',
        familyName: 'firstName',
        dateOfBirth: '01/01/2019',
        nationality: 'earth'
    };
    const pipe = new DriverNamePipe();
    const expectedDriverName = pipe.transform(MOCK_DRIVER);
    const actualDriverName = MOCK_DRIVER.givenName + ' ' + MOCK_DRIVER.familyName;
    expect(expectedDriverName).toEqual(actualDriverName);
  });
});
