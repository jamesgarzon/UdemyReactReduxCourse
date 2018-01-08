import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
class PostIndex extends Component{
  render(){
    return (
      <Segment>
        <Header size='huge' textAlign='center'>
          Hello world
        </Header>
      </Segment>
    )
  }
}

export default PostIndex;
