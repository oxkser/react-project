const pool = require("../util/DBUtil.js")
class UserModel {
	//根据loginid和pwd进行查询
	selectUser(username, password) {
		const promise = new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con){//con就是连接对象
				const sql = 'select * from tpp_users where username=? and password=?';
				//查询,当前错时，e为错误对象，当成功时， e的值为null, user是查询到的数据
				con.query(sql, [username, password], function(e, user){
					con.release();
					if(!e) {//如果e不为null, 则成功
					
						resolve(user);//发出事件 resolve事件
					}else {//
						reject("err") //发出事件
					}
				});
			})
		});
		return promise;
	}
}
module.exports=UserModel;


