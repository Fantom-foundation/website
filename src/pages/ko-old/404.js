import React from "react"
import Layout from "../../components/layouts/layout"


const NotFoundPage = (props) => (
 
  <Layout location={props.location}>
    <div className="container">
      <div className="not-found-warpper text-center">
        <h1>찾지 못함</h1>
        <p>당신은 존재하지 않는 길을 쳤습니다 ... 슬픔.</p>
        <a href="/" className="btn">
          홈으로
        </a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage