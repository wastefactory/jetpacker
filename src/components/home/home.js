import React, {Component} from 'react';
import { Link } from 'react-router';

import PageTitle from './../page_title';
import Setup from './../setup/setup.js';
import Menu from './../setup/menu.js';

import axios from 'axios';

import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component{
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('../api/jetpacker.json')
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render(){

    const pageInfo = {
      title: ["This is ", <label className="theme" key="0">Jetpacker</label>],
      description: "An easy-to-use interface that helps you generate JAVA environment toolkit."
    };

    return (
      <div className="home-page">
        <PageTitle info={pageInfo}/>
        <div className="container">
          <Grid>
            <Row className="show-grid">
              <Col md={12} md={8}>
                <Setup vagrant={this.state.posts.ubuntu}/>
              </Col>
              <Col md={4}>
                <Menu />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
};

export default Home;
