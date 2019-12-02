//业务处理层
const HisModel = require("../model/HisModel.js")
//登陆
class HisService {
	constructor() {
	    this.hisModel = new HisModel();
	}
	find(userid) {
		const p = new Promise((resolve, reject)=>{
			const promise = this.hisModel.selectFind(userid);
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=HisService;