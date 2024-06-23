import * as moment from 'moment';

export const formateDate = (date: Date) =>
  moment(date).format('YYYY/MM/DD HH:mm:ss');
