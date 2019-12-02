//业务处理层
const PayModel = require("../model/PayModel.js")

class PayService {
	constructor() {
	    this.payModel = new PayModel();
	}
	pay(userid, cinname,movietitle,time,price,house,row,col) {
      
		const p = new Promise((resolve, reject)=>{
			const promise = this.payModel.pay(userid, cinname,movietitle,time,price,house,row,col);
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=PayService;