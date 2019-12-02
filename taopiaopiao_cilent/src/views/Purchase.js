import React, { Component } from 'react'
import { Picker, List, Button, WhiteSpace } from 'antd-mobile';
import $ from 'jquery';
import cookie from 'react-cookies'
import '../components/Purchase.css'
const district=[
    {
        label: '1号厅',
        value: '1号厅'
    },
    {
        label: '2号厅',
        value: '2号厅'
    },
    {
        label: '3号厅',
        value: '3号厅'
    },
    {
        label: '4号厅',
        value: '4号厅'
    },
    {
        label: '5号厅',
        value: '5号厅'
    },
    {
        label: 'vip厅',
        value: 'vip厅'
    }
]
const seasons = [
    [
        {
            label: '1排',
            value: '1排',
        },
        {
            label: '2排',
            value: '2排',
        },
        {
            label: '3排',
            value: '3排',
        },
        {
            label: '4排',
            value: '4排',
        },
        {
            label: '5排',
            value: '5排',
        },
        {
            label: '6排',
            value: '6排',
        },
        {
            label: '7排',
            value: '7排',
        },
        {
            label: '8排',
            value: '8排',
        }
    ],
    [
        {
            label: '1座',
            value: '1座',
        },
        {
            label: '2座',
            value: '2座',
        },
        {
            label: '3座',
            value: '3座',
        },
        {
            label: '4座',
            value: '4座',
        },
        {
            label: '5座',
            value: '5座',
        },
        {
            label: '6座',
            value: '6座',
        },
        {
            label: '7座',
            value: '7座',
        },
        {
            label: '8座',
            value: '8座',
        },
        {
            label: '9座',
            value: '9座',
        },
        {
            label: '10座',
            value: '10座',
        },
    ],
];
export default class Purchase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: this.props.location.query,
            data: [],
            pValue:['1号厅'],
            sValue: ['1排', '1座'],
        }
    }
    componentDidMount() {
 
    }
    pay() {
        let time = new Date().toLocaleString();
        // let userid = cookie.load('myuser').id;
        let userid=JSON.parse(localStorage.getItem("myuser")).id
        let cinname = this.state.detail.cinname;
        let movietitle = this.state.detail.movietitle;
        let price = this.state.detail.playprice;
        let house=this.state.pValue[0];
        let row = this.state.sValue[0];
        let col = this.state.sValue[1];
        $.ajax({
            url: "http://localhost:9000/pay",
            type: "GET",
            data: {
                userid: userid,
                cinname: cinname,
                movietitle: movietitle,
                time: time,
                price: price,
                house:house,
                row: row,
                col: col
            },
            dataType: "text",
            success(data) {
                if (data) {
                    data = JSON.parse(data);
                    alert(data);

                }
                else {
                }
            },
            error() {

            }
        })
        this.props.history.push('/')
    }
    //显示日期的组件
    showDate() {
        let date = this.state.detail.playdate.substring(5, 10) + " " + this.state.detail.playtime.substring(0, 5)
        return (
            <div style={{ margin: '0.5rem 0' }}>{date + ' 国语3D'}</div>
        )
    }
    render() {
        return (
            <div>
                <div className='nav-top'></div>
                <div className='nav-middle'>
                    <div className='top-content'>
                        <div className='detail'>
                            <div style={{ borderBottom: '1px solid #ddd' }}>
                                <img className='movieimage' src={this.state.detail.movieimage} />
                                <div className='moviedetail'>
                                    <div className='movietitle'>{this.state.detail.movietitle}</div>
                                    {this.showDate()}
                                    <div style={{ margin: '0.5rem 0' }}>{this.state.detail.cinname}</div>
                                    <div style={{ margin: '0.5rem 0' }}>{'价格￥' + this.state.detail.playprice} </div>
                                </div>
                            </div>
                            <div className="change">
                                <img style={{ width: '1rem', height: '1rem' }} src="./error.png" />
                                <span className='quit'>不支持退票</span>
                                <img style={{ width: '1rem', height: '1rem', marginLeft: '1rem' }} src="./correct.png" alt="" />
                                <span>支持改签</span></div>
                        </div>
                    </div>
                    <div className='center-content'>
                        <Picker data={district} 
                        cols={1} 
                        className="forss"
                        title="选择厅"
                        value={this.state.pValue}
                        onChange={v => this.setState({ pValue: v })}
                        onOk={v => this.setState({ pValue: v })}>
                            <List.Item arrow="horizontal">选择厅</List.Item>
                        </Picker>
                    </div>
                    <div className='center-content'>
                        <Picker
                            data={seasons}
                            title="选择座位"
                            cascade={false}
                            extra="请选择(可选)"
                            value={this.state.sValue}
                            onChange={v => this.setState({ sValue: v })}
                            onOk={v => this.setState({ sValue: v })}
                        >
                            <List.Item arrow="horizontal">选择座位</List.Item>
                        </Picker>
                    </div>
                    <div className='pay'>
                        <div className='price'>{"￥" + this.state.detail.playprice}</div>
                        <div className='button' onClick={this.pay.bind(this)} >
                            <Button type="primary">立即付款</Button><WhiteSpace />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
