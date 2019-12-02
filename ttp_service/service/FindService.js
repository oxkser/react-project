//业务处理层
const FindModel = require("../model/FindModel.js")
//登陆
class FindService {
	constructor() {
	    this.findModel = new FindModel();
	}
	find(title) {
		const p = new Promise((resolve, reject)=>{
			const promise = this.findModel.selectFind(title);
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=FindService;