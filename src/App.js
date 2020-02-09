import React, { Component } from 'react'
import {Button,Input,message} from 'antd'

export default class App extends Component {

	show = ()=>{
		//alert('操作成功')
		message.success('操作成功',1)
	}

	render() {
		return (
			<div>
				<h3>App</h3>
				<Button type="danger" onClick={this.show}>点我1</Button>
				<Button type="primary">点我2</Button>
				<Input style={{width:'100px'}}></Input>
			</div>
		)
	}
}
