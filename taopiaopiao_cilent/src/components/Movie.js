import React, { Component } from 'react'
import $ from 'jquery';
import { List, Tag, Popover, NavBar, Icon } from 'antd-mobile';
import './Movie.css'
const Item = List.Item;
const Brief = Item.Brief;
const PopoverItem = Popover.Item;
export default class movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            homeobj: props.homeobj,
            visible: false,
            selected: '',
            list: [
                // {
                //     id: 1,
                //     cinname: "重庆博纳电影院",
                //     price: 19.9,
                //     address: "沙坪坝区凤天大道37号（第三军医大对面）",
                //     act1: 1,
                //     act2: 1,
                //     act3: 0,
                //     act4: 1,
                // },
                // {
                //     id: 2,
                //     cinname: "UME影城（重庆北碚店）",
                //     price: 16.5,
                //     address: "北碚区康宁路58号",
                //     act1: 1,
                //     act2: 0,
                //     act3: 0,
                //     act4: 1,
                // },
                // {
                //     id: 3,
                //     cinname: "华谊兄弟电影（南坪店）",
                //     price: 25.5,
                //     address: "南岸区南坪西路38号",
                //     act1: 1,
                //     act2: 1,
                //     act3: 0,
                //     act4: 1,
                // }
            ]
        }
    }

    componentDidMount() {
        let that = this;
        $.ajax({
            url: "http://localhost:9000/getcinema",
            type: "GET",
            dataType: "text",
            success(data) {
                if (data) {
                    data = JSON.parse(data);
                    that.setState({
                        list: data
                    })
                }
                else {
                }
            },
            error() {

            }
        })
    }
    //点击某一项的回调函数
    onSelect(opt) {
        console.log(opt.props.value);
        //按价格升序的方式给电影院排序
        if (opt.props.value === "价格最低") {
            let arr = this.state.list;
            arr.sort(function (obj1, obj2) {
                let price1 = obj1.price;
                let price2 = obj2.price;
                if (price1 < price2) {
                    return -1;
                } else if (price1 > price2) {
                    return 1;
                } else {
                    return 0;
                }

            })
            this.setState({
                visible: false,
                selected: opt.props.value,
                list: arr
            });
        }
        //筛选出有特价票的电影院
        else if (opt.props.value === "特价票") {
            let arr = this.state.list;
            let result = [];
            let i = 0;
            while (i < arr.length) {
                if (arr[i].act2 == 1) {
                    result.push(arr[i]);
                }
                i++;
            }
            this.setState({
                visible: false,
                selected: opt.props.value,
                list: result
            });
        }
        //筛选出可以停车的电影院
        else {
            let arr = this.state.list;
            let result = [];
            let i = 0;
            while (i < arr.length) {
                if (arr[i].act4 == 1) {
                    result.push(arr[i]);
                }
                i++;
            }
            this.setState({
                visible: false,
                selected: opt.props.value,
                list: result
            });
        }
    };
    toCinema(item) {
        this.state.homeobj.props.history.push({
            pathname: "/cinema",
            query: {
                id: item.id,
                cinname: item.cinname,
                address: item.address,
                act1: item.act1,
                act2: item.act2,
                act3: item.act3,
                act4: item.act4,
            }
        });
    }
    //列表渲染
    List() {
        const listItems = this.state.list.map((item) => {
            return (
                <div key={item.id} onClick={this.toCinema.bind(this, item)}>
                    <List  className="my-list">
                        <Item multipleLine extra={item.price + "起"}>
                            {item.cinname} <Brief>{item.address}</Brief>
                            <Tag small style={{ color: '#FF2E62' }}>{item.act1 == 1 ? "可领影城劵" : ""}</Tag>
                            <Tag small style={{ color: '#FF9C1C' }}>{item.act2 == 1 ? "特价票" : ""}</Tag>
                            <Tag small>{item.act3 == 1 ? "vip厅" : "普通厅"}</Tag>
                            <Tag small>{item.act4 == 1 ? "可停车" : "不可停车"}</Tag>
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
                <div style={{ width: '100%', height: '3rem' }}>
                    <NavBar
                        mode="light"
                        rightContent={
                            <Popover mask
                                overlayClassName="fortest"
                                overlayStyle={{ color: 'currentColor' }}
                                visible={this.state.visible}
                                overlay={[
                                    (<PopoverItem key="4" value="特价票" data-seed="logId">特价票</PopoverItem>),
                                    (<PopoverItem key="5" value="价格最低" style={{ whiteSpace: 'nowrap' }}>价格最低</PopoverItem>),
                                    (<PopoverItem key="6" value="可停车" >
                                        <span style={{ marginRight: 5 }}>可停车</span>
                                    </PopoverItem>),
                                ]}
                                align={{
                                    overflow: { adjustY: 0, adjustX: 0 },
                                    offset: [-10, 0],
                                }}
                                // onVisibleChange={this.handleVisibleChange}
                                onSelect={this.onSelect.bind(this)}
                            >
                                <div style={{
                                    height: '100%',
                                    padding: '0 15px',
                                    marginRight: '-15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                >
                                    <Icon type="ellipsis" />
                                </div>
                            </Popover>
                        }
                    >
                        电影院
      </NavBar>
                </div>
                {this.List()}
            </div>
        )
    }
}
