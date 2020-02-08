import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'

export default class app extends Component {


    state = {
        isFirst:true,
        isLoading:false,
        error:'',
        users:[]        
    }

    updateAppstate = (stateObj)=>{
      this.setState(stateObj)
    }
    render() {
        return (
          <div className="container">
            <section className="jumbotron">
              <h3 className="jumbotron-heading">Search Github Users</h3>
              <Search updateAppstate={this.updateAppstate}/>
            </section>
            <List {...this.state}/>
          </div>
        )
    }
}
