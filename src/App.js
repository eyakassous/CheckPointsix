import React, { Component } from "react";


class App extends Component {
  state = { fullName: 'eya kassous', bio: '###', imgSrc: '/profil_img.png', profession: 'etudiante', show: false, count: 0, intervalId: 0 };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleshow = () => {
    if (this.state.show) {
      this.setState({ show: false })
    }
    else {
      this.setState({ show: true })
    }
    console.log(this.state.show);
  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'georgia', fontWeight: 'bold' }}>
        {this.state.show && <div ><h3>{this.state.fullName}</h3>
          <h3>{this.state.bio}</h3>
          <h3>{this.state.imgSrc}</h3>
          <h3>{this.state.profession}</h3></div >}
        <button onClick={this.handleshow}>show</button>
        <h1>crono: {this.state.count} seconds</h1>
      </div>
    );
  }
}
export default App;