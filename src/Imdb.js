import React, { Component } from 'react';
import _ from 'lodash';
import Giphy from './giphy.js'
import './App.css'



class Imdb extends Component {
  constructor() {
    super();

    this.state = {
        
        movieName: ""
    };
      
  }

  componentWillMount() {
      this.search()
   
          
  }
    
  updateSearch() {
      this.search(this.refs.query.value)
      
  }
    
  search(query = ""){
       fetch('https://www.omdbapi.com/?s='+ query + '&r=json&plot=long&apikey=7c75e03b')
    .then(d => d.json())
    .then(d => {
        this.setState({
            imdbData: d.Search
            
        })
        
    })
  }
    
  handleClick(movie, e){

      this.setState({
          movieName: movie
      })
      
      
  }
  
    
  render() {
        var movies = _.map(this.state.imdbData, (movie) => {
            return <tr key={movie.imdbID} onClick={this.handleClick.bind(this, movie.Title)}>
                <td key={movie.Title}>{movie.Title}</td>
                
            </tr>;
            
        })
    

    return (
        
        <div className="imdb">
        <p>Search for a movie and click to show gifs!</p>
        <input className="imdb-search" ref="query" onChange={(e) => { this.updateSearch(); } } type="text" />
        
        <table className="table">
        <tbody className="table-2">{movies}
        </tbody></table>
        
        <Giphy movieName={this.state.movieName} />
        </div>
        
     
    )
  }
  
  
  
}

export default Imdb;


