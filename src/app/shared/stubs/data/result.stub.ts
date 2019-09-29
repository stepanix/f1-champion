import { Result } from 'src/app/core/models/result.model';
import { driverStub } from './driver.stub';
import { timeStub } from './time.stub';
import { constructorStub } from './constructor.stub';

export const resultStub: Result = {
  number: '1',
  position: '1',
  positionText: '1',
  points: '10',
  Driver: driverStub,
  Constructor: constructorStub,
  grid: '1',
  laps: '20',
  status: 'finnished',
  Time: timeStub
};
