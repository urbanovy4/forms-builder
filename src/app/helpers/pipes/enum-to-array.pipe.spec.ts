import { EnumToArrayPipe } from './enum-to-array.pipe';
import { BorderStyles } from '../models/model';

describe('EnumToArrayPipe', () => {
  let pipe: EnumToArrayPipe;

  beforeEach(() => {
    pipe = new EnumToArrayPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format enum to array', () => {
    const borderStyleArr = [
      'Dotted',
      'Dashed',
      'Solid',
      'Double',
      'Groove',
      'Ridge',
      'Inset',
      'Outset',
      'None',
      'Hidden'
    ];
    expect(pipe.transform(BorderStyles)).toEqual(borderStyleArr);
  });
});
