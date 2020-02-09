import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from '../home_message_detail/home_message_detail'

export default class HomeMessage extends Component {
	state = {
		messages:[]
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				messages:[
					{id:'001',title:'抽烟'},
					{id:'002',title:'喝酒'},
					{id:'003',title:'烫头'},
				]
			})
		},2000)
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messages.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									<Link to={`/home/message/detail/${msgObj.id}`}>{msgObj.title}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				<Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
			</div>
		)
	}
}
