export interface Order {


id:string


customer:string


amount:number


status:
'待支付'
|
'已支付'
|
'已发货'
|
'已完成'
|
'已取消'


product:string


quantity:number


createTime:string


}


export interface OrderQuery {


keyword:string


status:string


startDate:string


endDate:string


}