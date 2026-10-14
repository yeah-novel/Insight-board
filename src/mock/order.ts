import type {
Order
} from '@/types/order'


export const orders:Order[]=[


{
id:'ORD10001',

customer:'华为科技',

amount:12800,

status:'已支付',

product:'智能设备',

quantity:2,

createTime:'2026-10-10'

},


{
id:'ORD10002',

customer:'未来科技',

amount:8600,

status:'待支付',

product:'服务器设备',

quantity:1,

createTime:'2026-10-11'

},


{
id:'ORD10003',

customer:'星辰贸易',

amount:23000,

status:'已完成',

product:'智能终端',

quantity:5,

createTime:'2026-10-12'

}

]