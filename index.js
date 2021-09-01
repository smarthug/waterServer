const express = require('express');
const cors = require('cors');
const Axios = require('axios')
const app = express()
const port = 8000;
const serviceKey = "24%2Bx51XF5tzWd2BWHdjkll0xieI5fwBw3EDInWOps9zYyGjIr3hPwKCrawhuPOMHlZ3iYvc0eWrMlTYqTD2jQA%3D%3D"
// const serviceKey = "24+x51XF5tzWd2BWHdjkll0xieI5fwBw3EDInWOps9zYyGjIr3hPwKCrawhuPOMHlZ3iYvc0eWrMlTYqTD2jQA=="
const url =  'http://opendata.kwater.or.kr/openapi-data/service/pubd/dam/sluicePresentCondition/mnt/list';

// let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+encodeURIComponent(serviceKey); /*Service Key*/
// let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+decodeURIComponent(serviceKey); /*Service Key*/
// let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+serviceKey; /*Service Key*/
let queryParams = '?' 
// queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams +=  encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('damcode') + '=' + encodeURIComponent('2022510'); /**/
queryParams += '&' + encodeURIComponent('stdt') + '=' + encodeURIComponent('2021-9-01'); /**/
queryParams += '&' + encodeURIComponent('eddt') + '=' + encodeURIComponent('2021-9-01'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams +=  '&' + encodeURIComponent('ServiceKey') + '='+serviceKey; /*Service Key*/

console.log(queryParams)





app.use(cors());

app.get('/', (req, res) => {
    // console.log(url+queryParams)
    Axios.get(url+queryParams).then((response)=>{
        // console.log(res);
        res.send(response.data)
    })

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})