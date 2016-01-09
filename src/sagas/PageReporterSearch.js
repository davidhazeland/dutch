import {call, put, take, fork} from 'redux-saga';
import {query} from '../gapi/PageTracking';
import PageReportSetKeyWord from '../actions/PageReporterSetKeyword';
import PageReportSetResult from '../actions/PageReporterSetResult';

function* request(getState) {
  const result = yield call(query, {
    startDate: '7daysAgo',
    endDate: 'today',
    keyword: getState().PageReporter.get('query').keyword,
    desc: true
  });
  yield put(PageReportSetResult(result));
}

export default function* (getState) {
  while (yield take('PAGE_REPORTER_SET_KEYWORD')) {
    yield fork(request, getState);
  }
}
