import React, { Component } from 'react'
import $ from 'jquery';
import '../components/MovieDetail.css'
export default class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: {}
        }
    }
    componentDidMount() {
        let that = this;
        let title = this.props.location.query.title;
        // let title = '海上钢琴师'
        $.ajax({
            url: "http://localhost:9000/finded",
            type: "GET",
            data: {
                title: title
            },
            dataType: "text",
            success(data) {
                if (data) {
                    data = JSON.parse(data);
                    that.setState({
                        detail: data[0]
                    })
 
                }
            },
            error() {

            }
        });
    }
    toHome() {
        this.props.history.push('/')
    }
    showDetail() {

        if(this.state.detail!={}){
            //从对象里取出来的moviedate数据在数据库里是date类型，不是字符串，无法调用substring方法，先转换为string类型
       var moviedate= String( this.state.detail.moviedate).substring(0,10);
        }
        return (
            <div>
                <div className='nav-top1'></div>
                <div className='nav-middle1'>
                    <div className='top-content1'>
                        <div className='detail1'>
                            <div style={{ borderBottom: '1px solid #ddd' }}>
                                <img className='movieimage1' src={this.state.detail.movieimage} />
                                <div className='moviedetail1'>
                                    <div className='movietitle1'>{this.state.detail.movietitle}</div>
                                    <div style={{ margin: '0.5rem 0' }}>{this.state.detail.movietype}&nbsp;{'/' + this.state.detail.moviearea}&nbsp;{'/' + this.state.detail.movielength + '分钟'}</div>
                                    <div style={{ margin: '0.5rem 0' }}>{'上映时间:'+moviedate}</div>
                                    <div style={{ margin: '0.5rem 0',width:'12rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis' }}>{'导演:'+this.state.detail.moviedirect}</div>
                                    <div style={{ margin: '0.5rem 0',width:'12rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis' }}>{'演员:'+this.state.detail.moviestar}</div>
                                </div>
                            </div>
                            <div className="change1">
                                <div className='title'>淘票票评分:</div>
                                <div className='title-mark'>{this.state.detail.moviemark}</div>
                            </div>
                        </div>
                    </div>
                    <div className='center-content1'>
                        <div className='info'>简介：</div>
                        <div className='count'>{this.state.detail.moviecount}</div>
                    </div>
                    <div className='purchase1' onClick={this.toHome.bind(this)} >
                        特惠选座
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div> {this.showDetail()}</div>
        )
    }
}
