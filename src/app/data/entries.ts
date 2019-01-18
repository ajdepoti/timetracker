import { TimeEntry } from '../classes/time-entry';

export const Entries: TimeEntry[] = [
    {id: 1, entryDate: new Date(), startTime: '10.00', endtime: '10.15', hoursWorked: 3.1, tag: 'welding'},
    {id: 2, entryDate: new Date('1/16/2019'), startTime: '10.15', endtime: '11.00', hoursWorked: 3.1, tag: 'woodworking'}
];
