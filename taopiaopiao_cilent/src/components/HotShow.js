import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import './HotShow.css';
import List from './List'
export default class HotShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeobj: props.homeobj,
        }
    }
    tabExample() {
        const tabs = [
            { title: <Badge text={'41'}>正在热映</Badge> },
            { title: <Badge text={'6'}>即将上映</Badge> }
        ];
        return (
            <div>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <List isShow={true} homeobj={this.state.homeobj}></List>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
                        <List isShow={false} homeobj={this.state.homeobj}></List>
                    </div>
                </Tabs>

            </div>
        )
    }
    render() {
        return this.tabExample()
    }
}
