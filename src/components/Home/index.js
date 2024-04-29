// Write your JS code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="bg-home-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
          alt="home-icon"
        />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
