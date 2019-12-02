//业务处理层
const ResgModel = require("../model/ResgModel.js")
//登陆
class ResgService {
	constructor() {
	    this.resgModel = new ResgModel();
	}
	resgister(username, password,useremail,userphone) {
		let _this=this;
		const p = new Promise((resolve, reject)=>{
			const firstp=this.resgModel.seekUser(username);
			firstp.then(function(user){
				if(user[0]){
					let user=false
					resolve(user)
				}else{
					const seconp = _this.resgModel.addUser(username, password,useremail,userphone);
					seconp.then(function(user){
						const thirdp = _this.resgModel.getUser(user.insertId);
						thirdp.then(function(user){
							resolve(user);
						}).catch(function(e){
							reject(e);
						});
					}).catch(function(e){
						reject(e);
					});
				}
			}).catch(function(e){
				reject(e);
			});
			
			
		})
		return p;
	}
}
module.exports=ResgService;