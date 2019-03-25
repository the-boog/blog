import React from 'react';
import { connect, } from 'react-redux';
import BlogForm from './BlogForm'
import { Link } from 'react-router-dom'
import { Header, Button } from 'semantic-ui-react'

class BlogList extends React.Component {

  deleteBlog = (id) => {
    this.props.dispatch({ type: 'DELETE_BLOG', id });
  }

  render () {
    return (
   
      <div>
         <BlogForm />
        { this.props.blogs.map( b => {
          return (
            <div  key={b.id}>
              <Header as={Link} to={`/blogs/${b.id}`} >
                {b.name}
                <br />
              </Header>
              <Button onClick={() => this.deleteBlog(b.id)}>Delete</Button>
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
