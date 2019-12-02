import React from 'react'
import cookie from 'react-cookies'
import $ from 'jquery';
import { TabBar } from 'antd-mobile';
import HotShow from './HotShow';
import { List, Badge } from 'antd-mobile';
import { Button, WhiteSpace } from 'antd-mobile';
import './TarBarS.css';
import Movie from './Movie'
export default class TabBarS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'movieTab',
      homeobj: props.homeobj
    };
  }
  quiet() {
    // cookie.remove('myuser', { path: '/' });
    localStorage.removeItem("myuser");
    $.ajax({
      url: "http://localhost:9000/quitlogin",
      type: "GET",
      dataType: "text",
      success(data) {
        if (data) {
          data = JSON.parse(data);
          console.log(data);
          alert(data);
        }
        else {
        }
      },
      error() {

      }
    })
    this.state.homeobj.props.history.push('/');
  }
  //跳转到登录界面
  tologin() {
    this.state.homeobj.props.history.push('/login');
  }
  //跳转到电影票界面
  toCinemaTicket() {
    this.state.homeobj.props.history.push('/cinematicket');
  }
  //渲染的内容
  renderContent() {
    if (this.state.selectedTab === "hotTab") {
      return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          <HotShow homeobj={this.state.homeobj}></HotShow>
        </div>
      );
    }
    else if (this.state.selectedTab === "movieTab") {
      return (
        <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          <Movie homeobj={this.state.homeobj}></Movie>
        </div>
      );
    }
    else {
      // let user = cookie.load('myuser')
      let user=JSON.parse(localStorage.getItem("myuser"))
      console.log(user);
      if (user!=undefined) {
        console.log(user)
        return (
          <div style={{ backgroundColor: '#F5F5F5', height: '100%', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#FF2E62', height: "13rem", width: '100%', }}>
              <div style={{ backgroundColor: '#FF2E62', width: '20rem', height: '6rem', margin: '0 auto', paddingTop: '3rem', boxSizing: 'content-box' }}>
                <img src={user.avatar} style={{ width: '6rem', height: '6rem', float: 'left', borderRadius: '50%' }} />
                <p style={{ width: '10rem', clear: "both", display: 'inline-block', color: 'white', fontSize: '2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</p>
              </div>
            </div>
            <div style={{ backgroundColor: 'white', width: '100%', height: '7rem', display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ width: '30%', height: '100%', display: 'flex', flexDirection: "column", padding: '1rem 2rem' }}
                onClick={this.toCinemaTicket.bind(this)}>
                <div className='bgc-1' ></div>
                <span style={{ width: '3rem' }}>电影票</span>
              </div>
              <div style={{ width: '30%', height: '100%', display: 'flex', flexDirection: "column", padding: '1rem 2rem' }}>
                <div className='bgc-2' ></div>
                <span style={{ width: '3rem' }}>优惠券</span>
              </div>
            </div>
            <div className="des">
              <List.Item className="special-badge" extra={<Badge text={'促'} />}>
                淘票票乐影卡
            </List.Item>
              <List.Item extra="咨询票小蜜" arrow="horizontal">
                <Badge style={{ marginLeft: 12 }}>帮助与反馈</Badge>
                <Badge style={{ marginLeft: 12 }} />
              </List.Item>
              <Button onClick={this.quiet.bind(this)}>退出登录</Button><WhiteSpace />
            </div>

          </div>
        );
      } else {
        console.log(user)
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '5rem' }}></div>
            <div style={{ margin: '0 auto 5rem' }}>你还没有登录，请先登录</div>
            <button type="submit" className="login" onClick={this.tologin.bind(this)} >登录</button>
          </div>
        );
      }
    }

  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }} >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="热映"
            key="热映"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url("http://gw.alicdn.com/tfs/TB1aNR5ifDH8KJjy1XcXXcpdXXa-66-66.png") center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url("http://gw.alicdn.com/tfs/TB1L.8XilfH8KJjy1XbXXbLdXXa-66-66.png") center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'hotTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'hotTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent()}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url("http://gw.alicdn.com/tfs/TB1ScFoidzJ8KJjSspkXXbF7VXa-66-66.png") center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alicdn.com/tfs/TB1kDeeib_I8KJjy1XaXXbsxpXa-66-66.png) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="影院"
            key="影院"
            dot
            selected={this.state.selectedTab === 'movieTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'movieTab',
              });
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
          < TabBar.Item
            icon={{ uri: 'https://gw.alicdn.com/tfs/TB1_Ox9invI8KJjSspjXXcgjXXa-66-66.png' }}
            selectedIcon={{ uri: 'https://gw.alicdn.com/tfs/TB16z4AicrI8KJjy0FhXXbfnpXa-66-66.png' }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'mineTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'mineTab',
              });
            }}
          >
            {this.renderContent()}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}