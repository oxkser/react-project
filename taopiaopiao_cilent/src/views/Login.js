import React, { Component } from 'react'
import cookie from 'react-cookies'
import $ from 'jquery';
export default class login extends Component {
    constructor(){
        super()
    }
    login() {
        let login = document.getElementsByName('user')[0].value;
        let password = document.getElementsByName("password")[0].value;
        let that = this;
        $.ajax({
          url: "http://localhost:9000/login",
          type: "POST",
          data: {
            loginid: login,
            pwd: password
          },
          dataType: "text",
          success(user) {
            if (user) {
              user = JSON.parse(user);
              let obj={ id: user.id, name: user.username,avatar:user.userimage };
              obj=JSON.stringify(obj);
              // cookie.save('myuser', { id: user.id, name: user.username,avatar:user.userimage }, { path: '/' });
              localStorage.setItem("myuser",obj);
              console.log( JSON.parse(localStorage.getItem("myuser")))
              that.props.history.push('/');
            }
            else {
              console.log("帐号或密码错误");
              alert("账号密码错误");
            }
            
          },
          error() {
          }
        })
        
      }
    render() {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div className="bank"></div>
            <div className="logo"></div>
            <div className='input'>
              <input type="text" className="user" name="user" placeholder="请输入账号" /><br />
              <input type="password" className="password" name="password" placeholder="请输入密码" id="" />
            </div>
            <button type="submit" className="login" onClick={this.login.bind(this)}>登录</button>
          </div>
        )
    }
}
