import React from "react"
import Slider from "react-slick"
import axios from "axios"

class Carousel extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const data = 'https://medium.com/feed/fantomfoundation';
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=' + data).then(response => {
      const fetchedPosts = response.data.items.slice(0, 10);
      this.setState({
        posts: fetchedPosts
      });
      console.log('posts', fetchedPosts)
      console.log('post.link');
    })
  }
  render() {
let postsState = this.state.posts
console.log('postsState ', postsState);
console.log('postsState type', typeof postsState);
    var settings = {
      arrows: true,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
   
    return (
      <div className="container carousel-section section">
        <h2 className="slider-heading">Latest articles</h2>
        <Slider {...settings}>
          {
            postsState.map((post, index) => {
              var StrippedString = post.content.split(" ").splice(0, 20).join(" ");
              var StrippedText = StrippedString.replace(/(<([^>]+)>)/ig,"");
              return (
                <div className="carousel-card">
                  <div className="subcard">
                    <div className="heading">
                      <h2>{post.title}</h2>
                      <p>{post.pubDate}</p>
                    </div>
                    <div className="card-content">
                      <p>{StrippedText}</p>
                    </div>
                    <div className="read"><a href={post.link} target="_blank">Read More</a></div>
                  </div>
                </div>
              )
            })
          }
          
          </Slider>
        </div>
      )
    }
}
  
  export default Carousel