const express = require('express'); //需要下载
const path = require('path'); //不需要下载
const app = express();
app.use(express.static(__dirname + '/public')); //静态资源根目录
//post 
const bodyParser = require("body-parser"); //被包含在express中，即下载了express就可以了
app.use(bodyParser.urlencoded({
	extended: false
}));
//cookie
var cookieParser = require('cookie-parser'); //需要下载
app.use(cookieParser());
//用于文件上传
const upload = require("./multerUtil.js")

//过滤器, 
app.use("/*", function(req, res, next) {
	//设置跨域时，客户端域名
	res.setHeader("Access-Control-Allow-Origin", "*");
	//设置对cookie的支持
	res.setHeader("Access-Control-Allow-Credentials", true);
	next(); //往下走
})



app.post("/login", function(req, res) {
	const UserService = require("./service/UserService.js");
	const userService = new UserService();
	let username = req.body.loginid; 
	let password = req.body.pwd;

	const p = userService.login(username, password);
	p.then((user) => { //成功 user是用户数组
		res.cookie("user", user[0], {
			maxAge: 60 * 60 * 24
		});
		res.json(user[0]);
	
	}).catch((e) => { //失败

	});
})

app.get("/quitlogin", function(req, res) {
	res.clearCookie('user');
	res.json("退出成功")
})

app.post("/resgister", function(req, res) {
	const ResgService = require("./service/ResgService.js");
	const resgService = new ResgService();
	let username = req.body.loginid;
	let password = req.body.pwd;
	let useremail = req.body.email;
	let userphone = req.body.phone;

	const p = resgService.resgister(username, password, useremail, userphone);
	p.then((user) => { //成功 user是用户数组
		if (user) {
			res.cookie("user",{id:user[0].id,username:user[0].username}, {
				maxAge: 60 * 60 * 24
			});
			res.json(user[0]);
		} else {
			res.json("用户已存在")
		}
	}).catch((e) => { //失败

	});
})

app.get("/getindex", function(req, res){
	const IndexService = require("./service/IndexService.js");
	const indexService = new IndexService();
	const p = indexService.getIndex();
	p.then((data) => { //成功 user是用户数组
		if (data) {
			res.json(data);
		}
	}).catch((e) => { //失败
	
	});
})


app.get("/getcinema", function(req, res){
	const CinemaService = require("./service/CinemaService.js");
	const cinemaService = new CinemaService();
	const p = cinemaService.getCinema();
	p.then((data) => { //成功 user是用户数组
		if (data) {
			res.json(data);
		}
	}).catch((e) => { //失败
	
	});
})

app.get("/finded", function(req, res){
	const FindService = require("./service/FindService.js");
	const findService = new FindService();
	let title = req.query.title;
	const p = findService.find(title);
	p.then((data) => { //成功 user是用户数组
		if (data) {
			res.json(data);
		}
	}).catch((e) => { //失败 
	
	});
})

app.get("/playplan", function(req, res){
	const PlanService = require("./service/PlanService.js");
	const planService = new PlanService();
	let mid = req.query.mid;
	const p = planService.find(mid);
	p.then((data) => { //成功 user是用户数组
		if (data) {
			res.json(data); 
		}
	}).catch((e) => { //失败
	
	});
})

app.get("/cplayplan", function(req, res){
	const CPlanService = require("./service/CPlanService.js");
	const cplanService = new CPlanService();
	let cid = req.query.cid;
	const p = cplanService.find(cid);
	p.then((data) => { //成功 user是用户数组
		if (data) {
			res.json(data); 
		}
	}).catch((e) => { //失败
	
	});
})

app.get("/history", function(req, res){
	const HisService = require("./service/HisService.js");
	const hisService = new HisService();
	let userid = req.query.userid;
	const p = hisService.find(userid);
	p.then((data) => { 
		if (data) {
			res.json(data); 
		}
	}).catch((e) => { //失败
	
	});
})
app.get("/pay", function(req, res){
	const PayService = require("./service/PayService.js");
	const payService = new PayService();
	let userid = req.query.userid;
	let cinname = req.query.cinname;
	let movietitle = req.query.movietitle;
	let time = req.query.time;
	let price = req.query.price;
	let house=req.query.house;
	let row = req.query.row;
	let col = req.query.col;
	const p = payService.pay(userid,cinname,movietitle,time,price,house,row,col);
	p.then((data) => { 
		if (data) {
			res.json(data); 
		}
	}).catch((e) => { //失败
	
	});
})

app.listen(9000, function() {
	console.log(" 端口9000listening");
});
