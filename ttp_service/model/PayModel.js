const pool = require("../util/DBUtil.js")
class PayModel {
	//根据loginid和pwd进行查询
	pay(userid, cinname,movietitle,time,price,house,row,col) {
        console.log('bb')
		const promise = new Promise(function(resolve, reject) {
			pool.getConnection(function(err, con){//con就是连接对象
                let sql = `insert into tpp_history (userid, cinname,movietitle,time,price,house,rows,col) values(${userid},'${cinname}','${movietitle}','${time}','${price}','${house}','${row}','${col}')`;
				//查询,当前错时，e为错误对象，当成功时， e的值为null, user是查询到的数据
				con.query(sql,  function(e, user){
                    con.release();
                    console.log(e)
					if(!e) {//如果e不为null, 则成功
                        resolve('支付成功');//发出事件 resolve事件
                        console.log(e)
					}else {//
						reject("err") //发出事件
					}
				});
			})
		});
		return promise;
	}
}
module.exports=PayModel;