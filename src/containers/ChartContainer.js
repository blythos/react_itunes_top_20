import React, {Component} from 'react';
import ChartList from '../components/ChartList'

class ChartContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      top20: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({top20: data.feed.entry}))
    .catch(err => console.error(err))
  }

  render(){
    return (
      <ChartList top20={this.state.top20} />
    )
  }

}

export default ChartContainer;
