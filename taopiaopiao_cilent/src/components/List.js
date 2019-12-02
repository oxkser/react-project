import React from 'react';
import './List.css'
import { ListView } from 'antd-mobile';
import $ from 'jquery';
import IsPurser from './IsPurser';
const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
});
const NUM_ROWS = 100;
function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeobj:props.homeobj,
            dataSource,
            isLoading: true,
            isShow: props.isShow,
            NUM_ROWS: 40,
            pageIndex: 0,
            data1: [],
        };
    }
    componentDidMount() {

        let data1=null;
        $.ajax({
            url: "http://localhost:9000/getindex",
            type: "GET",
            dataType: "text",
            success(data) {
                if (data) {
                    data = JSON.parse(data);
                    data1=data;
                  
                }
            },
            error() {
  
            }
        });
        setTimeout(()=> {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
                data1:data1
            });
        }, 600);
    }
    
    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false

        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }

        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...this.genData(++this.pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
    toDetail(title){
        this.state.homeobj.props.history.push({
            pathname:"/moviedetail",
            query:{
                title:title
            }
        })
    }
    render() {
        if (this.state.data1 != null) {
            //所有的电影列表
            let movielist = this.state.data1;
            //已经上映的电影
            let list1 = [];
            //未上映的电影
            let list2 = [];
            let year = new Date().getFullYear();
            let month = new Date().getMonth() + 1;
            let date = new Date().getDate();
            if (movielist != null) {
                for (let i = 0; i < movielist.length; i++) {
                    let movieYear = Number(movielist[i].moviedate.substring(0, 4));
                    let movieMonth = Number(movielist[i].moviedate.substring(5, 7));
                    let moviedate = Number(movielist[i].moviedate.substring(8, 10)) + 1;
                    if (movieYear > year) {
                        list2.push(movielist[i]);
                    }
                    else if (movieYear < year) {
                        list1.push(movielist[i]);
                    }
                    else {
                        if (movieMonth > month) {
                            list2.push(movielist[i]);
                        }
                        else if (movieMonth < month) {
                            list1.push(movielist[i]);
                        }
                        else {
                            if (moviedate > date) {
                                list2.push(movielist[i]);
                            }
                            else {
                                list1.push(movielist[i]);
                            }
                        }
                    }
                }
            }
            var data=[];
            if (this.state.isShow == true) {
                data=list1;
    
            }
            else {
                data=list2;
     
            }
        }
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = 0;
        const row = (rowData, sectionID, rowID) => {
            if (index <= data.length) {
                const obj = data[index++];
                let date= obj.moviedate.substring(0,10)
                return (
                    <div key={rowID} style={{ padding: '0 15px' }} onClick={this.toDetail.bind(this,obj.movietitle)}>
                        <div
                            style={{
                                lineHeight: '50px',
                                color: '#000',
                                fontSize: 18,
                                borderBottom: '1px solid #F6F6F6',
                            }}
                        >{obj.movietitle}</div>
                        <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0', position: 'relative' }}>
                            <img style={{ height: '100px', marginRight: '15px' }} src={obj.movieimage} alt="" />
                            <div style={{ lineHeight: 1 }}>
                                <div style={{ marginBottom: '15px', marginTop: '5px', fantSize: '13px', color: '#666', width: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>评分：{obj.moviemark}</div>
                                <div style={{ marginBottom: '15px', marginTop: '15px', fantSize: '13px', color: '#666', width: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',width:'10rem' }}>导演：{obj.moviedirect}</div>
                                <div style={{ marginBottom: '15px', marginTop: '15px', fantSize: '13px', color: '#666', width: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',width:'10rem' }}>主演：{obj.moviestar}</div>
                                <div style={{ marginBottom: '15px', marginTop: '15px', fantSize: '13px', color: '#666', width: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',width:'10rem' }}>上映时间：{date}</div>
                            </div>

                            <IsPurser isShow={this.props.isShow}></IsPurser>
                        </div>
                    </div>
                );
            }
        };
        return (
            <ListView
                ref={el => this.lv = el}
                initialListSize={data.length}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={40}
                useBodyScroll
                onScroll={() => { console.log('scroll'); }}
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={1000}
            />
        );
    }
}

