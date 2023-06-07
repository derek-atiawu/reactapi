import React, {Component} from 'react';

class MovieReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie_reviews: []
        }
    }

        componentDidMount() {
            // console.log("working alright");
            fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=Gpt7im1gBrHdL2bsPDsGeYZaVhGGSh9X")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                this.setState({
                    movie_reviews: data.results,
                });
            })
            .catch((error) =>{
                console.log(error)
            });
            // console.log(this.state.movie_reviews);
        }

        

    render() {
        return(
            <>
            <div><h1 style={{color: 'Blue'}} >My Movie Reveiw App, from NewYork Times API</h1></div>
            <div className="details" > {this.state.movie_reviews.map((item) =>{
                return(<div>
                  <h3> {item.byline} </h3>  
                  <h3> {item.critics_pick} </h3>  
                  <h3> {item.display_title} </h3>
                  <h3> {item.headline} </h3>
                  <h3> {item.date_updated} </h3>
                  <hr/>  
                </div>)
            })} </div>
            </>
        )
    }

}

export default MovieReview;