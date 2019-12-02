import React, { Component } from 'react'
import { Button } from 'antd-mobile';
export default class IsPurser extends Component {
    constructor(props){
        super()
        this.state={
            isShow:props.isShow
        }
    }
    isPurchase(){
        if(this.state.isShow===true){
            return (
                <div className="button-container">
                <Button size='small' type="primary" style={{ margin: '15px 15px 15px 0',width:"100%",backgroundColor:'#FF3473' }} >购票</Button>
            </div>
            )
        }
        else{
            return <div></div>
        }
    }
    render(){
        return this.isPurchase()
    }
}
