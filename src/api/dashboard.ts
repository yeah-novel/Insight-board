import request from './request'


export function getDashboard(){

return request({

url:'/dashboard',

method:'GET'

})

}