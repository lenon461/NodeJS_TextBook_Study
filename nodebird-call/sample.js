var request = require('request');

var url = 'http://kosis.kr/openapi/Data/statisticsMeta.do';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=wP4vTJ%2Babr1jAP3C3HkWtJTMJ8LZbvvQlSfkrgVOc1QObf0E2jT1YUJzzH0Ts3%2Fcwzw%2F1JcVlHqFWRgDTEzDYA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('orgId') + '=' + encodeURIComponent('101'); /* 기관코드 */
queryParams += '&' + encodeURIComponent('tblId') + '=' + encodeURIComponent('DT_1IN0001'); /* 통계표ID */
queryParams += '&' + encodeURIComponent('format') + '=' + encodeURIComponent('json'); /* 결과 유형 */
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('TBL'); /* */
queryParams += '&' + encodeURIComponent('method') + '=' + encodeURIComponent('getList'); /* 메소드 */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
