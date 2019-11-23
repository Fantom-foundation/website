import React from "react"
import Slider from "react-slick"
import axios from "axios"
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
}

// componentDidUpdate() {
//     this.aos.refresh()
// }
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
      pauseOnHover: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1920,
          settings:{
            slidesToShow: 3,
            slidesToScroll: 1,
          }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
        {
            breakpoint: 769,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        }
    ],
      autoplay: true,
      autoplaySpeed: 5000,
    };
   
    return (
      <div className="inner-container carousel-section section">
        <h2 className="slider-heading" data-aos="fade-right">Latest articles</h2>
        <Slider {...settings}>
          {
            postsState.map((post, index) => {
              var StrippedString = post.content.split(" ").splice(0, 20).join(" ");
              var StrippedText = StrippedString.replace(/(<([^>]+)>)/ig,"");
              console.log(formatDate(post.pubDate));
              return (
                <div className="carousel-card" data-aos="fade-left">
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