const express = require('express');
const cors = require('cors');
const Axios = require('axios')
const app = express()
const port = 8000;
// 지급 받은 url
// const serviceKey = "24%2Bx51XF5tzWd2BWHdjkll0xieI5fwBw3EDInWOps9zYyGjIr3hPwKCrawhuPOMHlZ3iYvc0eWrMlTYqTD2jQA%3D%3D"
// const serviceKey = "24+x51XF5tzWd2BWHdjkll0xieI5fwBw3EDInWOps9zYyGjIr3hPwKCrawhuPOMHlZ3iYvc0eWrMlTYqTD2jQA=="
// 
const serviceKey = "ejdrD89pyah0JlAaICprH0xOAEp0tAxvExhm2p0DT5Ulq2MskjlekFH7kFIAEt6d16gjJ2scGwRSLG4Rr1HUiA=="
const url = 'http://opendata.kwater.or.kr/openapi-data/service/pubd/dam/sluicePresentCondition/mnt/list';
const perfecturl = 'http://opendata.kwater.or.kr/openapi-data/service/pubd/dam/sluicePresentCondition/mnt/list?damcode=2403201&stdt=2021-09-02&eddt=2021-09-02&numOfRows=10&pageNo=undefined&serviceKey=ejdrD89pyah0JlAaICprH0xOAEp0tAxvExhm2p0DT5Ulq2MskjlekFH7kFIAEt6d16gjJ2scGwRSLG4Rr1HUiA=='

// let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+encodeURIComponent(serviceKey); /*Service Key*/
// let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+decodeURIComponent(serviceKey); /*Service Key*/
// let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+serviceKey; /*Service Key*/
let queryParams = '?'
queryParams += encodeURIComponent('damcode') + '=' + encodeURIComponent('2403201'); /**/
queryParams += '&' + encodeURIComponent('stdt') + '=' + encodeURIComponent('2020-09-02'); /**/
queryParams += '&' + encodeURIComponent('eddt') + '=' + encodeURIComponent('2020-09-02'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('144'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('undefined'); /**/
queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + serviceKey; /*Service Key*/

// console.log(queryParams)





app.use(cors());

app.get('/', (req, res) => {
    // console.log(url+queryParams)
    // console.log(url + queryParams)
    // console.log(perfecturl)
    // Axios.get(perfecturl).then((response) => {
    //     console.log(response.data);
    //     res.send(response.data)
    // })

    Axios.get(url + queryParams).then((response) => {
        console.log(response.data);
        res.send(response.data)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})