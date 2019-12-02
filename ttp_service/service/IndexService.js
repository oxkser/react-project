//业务处理层
const IndexModel = require("../model/IndexModel.js")
//登陆
class IndexService {
	constructor() {
	    this.indexModel = new IndexModel();
	}
	getIndex() {
		const p = new Promise((resolve, reject)=>{
			const promise = this.indexModel.selectIndex();
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=IndexService;