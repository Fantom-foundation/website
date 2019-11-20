import React from "react"
import Slider from "react-slick"
import axios from "axios"

function formatDate(newDate) {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  let date = new Date(newDate);

  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

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
      infinite: false,
      speed: 100,
      mobileFirst: true,
      slidesToShow: 3,
      pauseOnHover: false,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 769,
            settings: 'unslick'
        }
    ],
      //autoplay: true,
      //autoplaySpeed: 5000,
    };
   
    return (
      <div className="inner-container carousel-section section">
        <h2 className="slider-heading">Latest articles</h2>
        <Slider {...settings}>
          {
            postsState.map((post, index) => {
              var StrippedString = post.content.split(" ").splice(0, 20).join(" ");
              var StrippedText = StrippedString.replace(/(<([^>]+)>)/ig,"");
              console.log(formatDate(post.pubDate));
              return (
                <div className="carousel-card">
                  <div className="subcard">
                    <div className="heading">
                      <h4>{post.title}</h4>
                      <p>{formatDate(post.pubDate)}</p>
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