import React from 'react';
import './App.css';
import RecomendFriend from './components/recomendFriend/recomendFriend.component';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : [
        {name : "cownut" , imageUrl : "https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"},
        {name : "sambi" , imageUrl: "https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"},
        {name : "giang" , imageUrl : "https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"}
      ]
    }
  }

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <RecomendFriend  user={user}/>
      </div>
    );
  }
}

export default App;
