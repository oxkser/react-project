const pool = require("../util/DBUtil.js")
class ResgModel {
	//根据loginid和pwd进行查询
	addUser(username, password, useremail, userphone) {
		const promise = new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con) { //con就是连接对象
				const sql = "INSERT INTO tpp_users (username, password,useremail,userphone,userimage)VALUES (?,?,?,?,'https://gw.alicdn.com/i3/6000000007643/TB2c3h2r3xlpuFjy0FoXXa.lXXa_!!0-mytaobao.jpg_.webp?tdsourcetag=s_pctim_aiomsg')";
				//查询,当前错时，e为错误对象，当成功时， e的值为null, user是查询到的数据
				con.query(sql, [username, password, useremail, userphone], function(e, user) {
					con.release();
					if (!e) { //如果e不为null, 则成功
						resolve(user); //发出事件 resolve事件
					} else { //
						reject("err") //发出事件
					}
				});
			})
		});
		return promise;
	}

	seekUser(username) {
		const promise = new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con) { //con就是连接对象
				const sql = "select * from tpp_users where username=?";
				//查询,当前错时，e为错误对象，当成功时， e的值为null, user是查询到的数据
				con.query(sql, [username], function(e, user) {
					if (!e) { //如果e不为null, 则成功
						resolve(user); //发出事件 resolve事件
					} else { //
						reject("err") //发出事件
					}
				});
			})
		});
		return promise;
	}
	
	getUser(id) {
		const promise = new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con) { //con就是连接对象
				const sql = "select * from tpp_users where id=?";
				//查询,当前错时，e为错误对象，当成功时， e的值为null, user是查询到的数据
				con.query(sql, [id], function(e, user) {
					if (!e) { //如果e不为null, 则成功
						resolve(user); //发出事件 resolve事件
					} else { //
						reject("err") //发出事件
					}
				});
			})
		});
		return promise;
	}
}
module.exports = ResgModel;
