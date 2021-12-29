import {Utils} from "./utils";
import {AvailableStyles, FormField} from "../models/model";

describe('Utils', () => {
  it('should call copy', () => {
    const mockData: string = 'Test';
    expect(Utils.copy(mockData)).toEqual(mockData);
  });

  it('should call updateArray', () => {
    const fields: FormField[] = [
      {
        availableStyles: {},
        id: 1,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      },
      {
        availableStyles: {},
        id: 1,
        icon: 'fa fa-submit',
        label: 'Test1',
        type: 'text'
      }
    ];
    const index: number = 1;
    const styles: AvailableStyles = {};
    expect(Utils.updateArray(fields, index, styles)).toEqual(fields);
  });
});
