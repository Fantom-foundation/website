import React from "react"
import Layout from "../../components/layouts/layout"


const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <div className="not-found-warpper text-center">
        <h1>未找到</h1>
        <p>您只是走了一条不存在的路...悲伤。</p>
        <a href="/" className="btn">
        回到首页
        </a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage