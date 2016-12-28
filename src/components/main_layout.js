import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';

class MainLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log(this.refs);
    // this.refs.Menu.measure( (fx, fy, width, height, px, py) => {
    //     console.log('Component width is: ' + width)
    //     console.log('Component height is: ' + height)
    //     console.log('X offset to frame: ' + fx)
    //     console.log('Y offset to frame: ' + fy)
    //     console.log('X offset to page: ' + px)
    //     console.log('Y offset to page: ' + py)
    // })
  }

  render(){
    return (
      <div className="app">
        <Header />
        <div id="content">
          <main>
            {this.props.children}
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
