
import React, { Component } from 'react';
import _ from 'lodash';
import './App.css'

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
  }


    
  renderGifs(){
      const api_key = 'Jsaz3rzgxidUoyfXaBUNjXjcaDYM8F4J';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.props.movieName}&limit=25&offset=0&rating=G&lang=en`;
    fetch(url)
      .then(response => response.json())
      .then(d => {
        this.setState({
            img: d.data
            
            
       })})
      
  }

  render() {
      var gifs = _.map(this.state.img, (gif) => {
            return <img key={gif.id} src={gif.images.fixed_height.url} height="200" alt="hej" />;
            
        })
    return (
        
      <div className="gif">
        
        <p onChange={this.renderGifs()}>{this.props.movieName}</p>
       
        {gifs}
      </div>
    );
  }
}

export default Giphy;
