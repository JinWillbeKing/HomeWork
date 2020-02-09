import React, { Component } from 'react'

export default class HomeMessageDetail extends Component {

	state = {
		data:[
			{id:'001',title:'末将于谦',content:'啥也不是'},
			{id:'002',title:'末将于谦',content:'啥也不是'},
			{id:'003',title:'末将于谦',content:'啥也不是'},
		]
	}

	render() {
		const {id} = this.props.match.params
		const result = this.state.data.find((item)=>{
			return item.id === id
		})
		return (
			<ul>
				<li>ID:{result.id}</li>
				<li>TITLE:{result.title}</li>
				<li>CONTNET:{result.content}</li>
			</ul>
		)
	}
}
