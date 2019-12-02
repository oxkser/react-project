import React, { Component } from 'react'
import $ from 'jquery';
import cookie from 'react-cookies'
import '../components/CinemaTicket.css'
export default class CinemaTicket extends Component {
    constructor(){
        super()
        this.state={
            history:[]
        }
    }
    componentDidMount(){
        let that=this
        // let userid = cookie.load('myuser').id
        let userid =JSON.parse(localStorage.getItem("myuser")).id
        $.ajax({
            url: "http://localhost:9000/history",
            type: "GET",
            data:{
                userid:userid,
 
            },
            dataType: "text",
            success(data) {
                if (data) {
                    data = JSON.parse(data);
                    that.setState({
                        history: data
                    })
                    console.log(data);
                }
                else {
                }
            },
            error() {

            }
        })
    }
    list(){
        let listitems=this.state.history.map((item)=>{
            return(
                <div key={item.id} className='ticket-body'>
                    <div className='left-area'>
                        <span className='tag'>座</span>
                    </div>
                    <div className='right-area'>
                        <div className='movie'>{item.movietitle}</div>
                        <div className='time'>{"购票时间:"+item.time}</div>
                        <div className='paycinname'>{item.cinname}</div>
                        <div className='house'>{item.house} {item.rows} {item.col}</div>
                        <div className='payprice'>{'￥'+item.price}</div>
                    </div>
                </div>
            )
        })
        return listitems
    }
    render() {
        return (
            <div className='root'>
              {this.list()}
            </div>
        )
    }
}
