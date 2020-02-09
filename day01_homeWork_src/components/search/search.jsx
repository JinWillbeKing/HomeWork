import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = ()=>{
        //获取输入框输入
        const {value} = this.refs.keyWord

        //展示Loading
        this.props.updateAppstate({isFirst:false,isLoading:true})

        //发送请求
        axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
            (response)=>{
                this.props.updateAppstate({
                    isLoading:false,
                    users:response.data.items
                })
            },
            (error)=>{
                this.props.updateAppstate({
                    isLoading:false,
                    error:error.message
                })
            }
        )
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref="keyWord"/>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
