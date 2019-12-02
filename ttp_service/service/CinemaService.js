//业务处理层
const CinemaModel = require("../model/CinemaModel.js")
//登陆
class CinemaService {
	constructor() {
	    this.cinemaModel = new CinemaModel();
	}
	getCinema() {
		const p = new Promise((resolve, reject)=>{
			const promise = this.cinemaModel.selectCineme();
			promise.then(function(data){
				resolve(data);
			}).catch(function(e){
				reject(e);
			});
		})
		return p;
	}
}
module.exports=CinemaService;