import React from 'react';
import { connect, } from 'react-redux';
import BlogForm from './BlogForm'
import { Link } from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'
import { getBlogs, deleteBlog, updateBlog } from './reducers/blogs';


class BlogList extends React.Component {
  state = {showForm: false, updateForm: false,}

    componentDidMount() {
      this.props.dispatch(getBlogs())
    }

    toggleForm = () => {
      this.setState({showForm: !this.state.showForm})
    }


 updateButton = (id) => {
   this.props.dispatch(updateBlog(id))
 }



  render () {
    return (
   
      <div>
        <Button onClick={() => this.toggleForm()}>Add Blog</Button>
         {this.state.showForm ? <BlogForm /> : ''}
        { this.props.blogs.map( b => {
          return (
            <div  key={b.id}>
              <Header as={Link} to={`/blogs/${b.id}`} >
                {b.name}
                <br />
              </Header>
              <Button onClick={() => this.props.dispatch(deleteBlog(b.id))}>Delete</Button>
              <Button onClick={() => this.toggleForm(b.id)}>Change Blog Name</Button>
            </div>
          )
        })
      }
      </div>
    )
  }

  }
  




const mapStateToProps = (state) => {
  return {blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);
