import React from 'react';
import { connect, } from 'react-redux';
import PostForm from './PostForm';
import { Header } from 'semantic-ui-react';

class  Blog extends React.Component {
  state = {blog: ""}

 
  
  render () {
    return (
   
      <div>
         <PostForm blog_id={this.props.match.params.id}/>
        { this.props.blogs.map( b => 
        { if (b.id == this.props.match.params.id) 
          return (
          <div>
            {b.posts.map ( p =>
              <div>
                {p.body}
              </div>)}
          </div>)
              return
             }
          )}
         </div>
          )
        }
      }
      


const mapStateToProps = (state) => {
  return { blogs: state.blogs};
};

export default connect(mapStateToProps)(Blog)