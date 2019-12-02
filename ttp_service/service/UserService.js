//业务处理层
const UserModel = require("../model/UserModel.js")
//登陆
class UserService {
	constructor() {
	    this.userModel = new UserModel();
	}
	login(username, password) {
		const p = new Promise((resolve, reject)=>{
			const promise = this.userModel.selectUser(username, password);
			promise.then(function(user){
				resolve(user);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=UserService;