import React,{Component} from 'react'
import {inject, observer} from 'mobx-react';
import {Button} from 'antd'

@inject("homeStore")
@observer
class Home extends Component{

    render () {
        return (
            <div>
                <h2>home 页面 {this.props.homeStore.data}</h2>
                <Button onClick={this.props.homeStore.add}>加1</Button>
            </div>
        );
    }
}

export default Home