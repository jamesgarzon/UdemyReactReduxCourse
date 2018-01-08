import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component{

  render(){
    const { fields:{ title, categories, content }, handleSubmit } = this.props;
    console.log(title);
    // const title = this.props.fields.title;
    return(
      <form onSubmit={handelSubmit}>
        <h3>Create new post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control"/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <input type="text" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>

    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);

// state === {
//   form: {
//     PostsNewForm:{
//       title: '...',
//       categories: '...',
//       content: '....'
//     }
//   }
// };
