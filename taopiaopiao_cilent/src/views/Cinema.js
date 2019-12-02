import React, { Component } from 'react'
import { List, Tag, } from 'antd-mobile';
import cookie from 'react-cookies'
import $ from 'jquery';
import Swiper from '../components/Swiper'
import '../components/Cinema.css'
const Item = List.Item;
const Brief = Item.Brief;
export default class Cinema extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.location.query,
      data2: []
    }
  }
  componentDidMount() {
    let that = this;
    let id = this.state.item.id;
    $.ajax({
      url: "http://localhost:9000/cplayplan",
      type: "GET",
      data: {
        cid: id
      },
      dataType: "text",
      success(data) {
        if (data) {
          data = JSON.parse(data);
          that.setState({
            data2: data
          })
 
        }
        else {
        }
      },
      error() {

      }
    })
  }
  //跳转到购买电影票界面
  toPurchase(cinname,movietitle,movieimage,playprice,playdate,playtime){
    this.props.history.push({
      pathname: "/purchase",
      query: {
          cinname: cinname,
          movietitle: movietitle,
          movieimage:movieimage,
          playprice: playprice,
          playdate: playdate,
          playtime:playtime
      }
  })
}
  //渲染日期
  time(){
    let date=this.state.data2[0];
    if(date!=undefined){
      date=date.playdate.substring(5,10)

      return(
        <div className="datecontainer">
          <div className="datetitle">日期</div>
          <div className="date">{date}</div>
        </div>
      )
    }
    
  }
  //渲染播放列表
  list() {
    const listItems = this.state.data2.map((item,index) => {
      //电影开始时间
      let playtime=item.playtime.substring(0,5);
      //电影结束的小时数
      let hour=Number(playtime.substring(0,2));
      //电影结束的分钟数
      let minute=Number(playtime.substring(3,5))+Number(item.movielength);
      if(minute>60){
        hour=hour+Number(Math.floor(minute/60));
        minute=Math.floor(minute%60);
        if(minute<10){
          minute="0"+minute;
        }
      }
      let quiettime=hour+":"+minute;
      return (
        <div className="play" key={index} onClick={this.toPurchase.bind(this,item.cinname,item.movietitle,item.movieimage,item.playprice,item.playdate,item.playtime)}>
          <List renderHeader={() => 'Align Vertical Center'} className="my-list">
            <Item multipleLine extra={'￥'+item.playprice}>
              {playtime} <Brief>{quiettime+'散场'}</Brief>
              <div className="cinname">{item.movietitle}</div>
              <div className="sort">{item.movietype}</div>
            </Item>

          </List>
        </div>
      )
    }
    );
    return listItems
  }
  render() {
  
    return (
      <div>
        <List className="my-list">
          <Item multipleLine >
            <span style={{ fontWeight: 'bold' }}>
              {this.state.item.cinname}
            </span> <Brief>{this.state.item.address}</Brief>
            <Tag small style={{ color: '#FF2E62' }}>{this.state.item.act1 == 1 ? "可领影城劵" : ""}</Tag>
            <Tag small style={{ color: '#FF9C1C' }}>{this.state.item.act2 == 1 ? "特价票" : ""}</Tag>
            <Tag small>{this.state.item.act3 == 1 ? "vip厅" : "普通厅"}</Tag>
            <Tag small>{this.state.item.act4 == 1 ? "可停车" : "不可停车"}</Tag>
          </Item>
        </List>
        <Swiper></Swiper>
        <div>
          <div>{this.time()}</div>
          {this.list()}
        </div>
      </div>
    )
  }
}
