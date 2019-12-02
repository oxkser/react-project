//业务处理层
const PlanModel = require("../model/PlanModel.js")
//登陆
class PlanService {
	constructor() {
	    this.planModel = new PlanModel();
	}
	find(mid) {
		const p = new Promise((resolve, reject)=>{
			const promise = this.planModel.selectFind(mid);
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=PlanService;