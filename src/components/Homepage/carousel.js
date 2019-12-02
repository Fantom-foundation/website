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
  let date = new Date(newDate.replace(' ', 'T'));
  //let date = new Date(newDate);

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
      console.log(fetchedPosts);
      this.setState({
        posts: fetchedPosts
      });
    })
    }
  render() {
    let postsState = this.state.posts
    var settings = {
      arrows: true,
      infinite: false,
      speed: 100,
      pauseOnHover: false,
      slidesToShow:3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1920,
          settings:{
            slidesToShow:3,
            slidesToScroll: 1,
          }
      },
      {
        breakpoint: 1440, 
        settings:{
          slidesToShow:3,
          slidesToScroll: 1,
        }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow:3,
        slidesToScroll: 1,
        
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          
        }
      },
        {
            breakpoint: 769,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          }
        }
    ],
      autoplay: false,
      autoplaySpeed: 5000,
    };
   
    return (
      <div className="inner-container container carousel-section section">
        <h2 className="slider-heading" data-aos="fade-right">Latest articles</h2>
        <Slider {...settings}>
          {
            postsState.map((post, index) => {
              var postdata = post.content;
              var anchorTagsRemoved = postdata.replace(/<h3.*>.*?<\/h3>/ig,'');
              var StrippedString = anchorTagsRemoved.split(" ").splice(0, 25).join(" ");
              var StrippedText = StrippedString.replace(/(<([^>]+)>)/ig,"");
              //var StrippedHeading = post.title.split(" ").splice(0, 5).join(" ");
              return (
                <div className="carousel-card" data-index={index} key={index}>
                  <div className="subcard">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <div className="heading">
                      <h4>{post.title}</h4>
                      <p>{formatDate(post.pubDate)}</p>
                    </div>
                    <div className="card-content">
                      <p>{StrippedText}...</p>
                    </div>
                    <div className="read"><span>Read More</span></div>
                    </a>
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