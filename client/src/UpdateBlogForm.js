import React from 'react';
import { connect, } from 'react-redux';
import { updateBlog } from './reducers/blogs'

class UpdateBlogForm extends React.Component {
  state = {name: ''};

 

  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch, } = this.props;
    const { name, id } = this.state;
    const blog = { name, id }
    dispatch(updateBlog(blog))
   
  }


  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  render() {

    return (
      <div>
        <h3>Edit This Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}




export default connect()(UpdateBlogForm);