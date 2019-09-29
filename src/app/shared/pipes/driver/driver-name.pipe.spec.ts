import { DriverNamePipe } from './driver-name.pipe';
import { driverStub } from '../../stubs/data/driver.stub';

describe('DriverNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DriverNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should format drivers name', () => {
    const pipe = new DriverNamePipe();
    const expected = pipe.transform(driverStub);
    const actual = driverStub.givenName + ' ' + driverStub.familyName;
    expect(expected).toEqual(actual);
  });
});
