//业务处理层
const CPlanModel = require("../model/CPlanModel.js")
//登陆
class CPlanService {
	constructor() {
	    this.cplanModel = new CPlanModel();
	}
	find(cid) {
		const p = new Promise((resolve, reject)=>{
			const promise = this.cplanModel.selectFind(cid);
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=CPlanService;