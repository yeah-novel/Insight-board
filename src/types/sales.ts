export interface SalesQuery {

startDate:string

endDate:string

region:string

employee:string

}



export interface SalesSummary {

amount:number

orders:number

growth:number

}



export interface SalesRecord {

id:string

customer:string

employee:string

region:string

amount:number

date:string

}
