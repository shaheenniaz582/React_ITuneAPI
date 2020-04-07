import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }; // ends state
  }// ends constructor
  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res =>res.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err=>console.err)
  } // ends mount
  render(){
    return(
      <div>
      <h2>Top 20 Songs</h2>
      <SongList songs={this.state.songs}/>
      </div>
    );
  }
}

export default SongContainer;
