import PageReportSetKeyWord from './PageReporterSetKeyword';
import PageReportSetResult from './PageReporterSetResult';

import {query} from '../gapi/PageTracking';

module.exports = function(parameter) {
  return (dispatch, getState) => {
    dispatch(PageReportSetKeyWord(parameter));

    query({
      startDate: '7daysAgo',
      endDate: 'today',
      keyword: getState().PageReporter.get('query').keyword,
      desc: true
    }).then((result) => {
      dispatch(PageReportSetResult(result));
    });
  }
};
