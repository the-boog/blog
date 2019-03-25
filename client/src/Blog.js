import React from 'react';
import { connect, } from 'react-redux';
import PostForm from './PostForm';
import { Header, Button } from 'semantic-ui-react';
import UpdateBlogForm from './UpdateBlogForm';

class Blog extends React.Component {
  state = {blog: "", showForm: false }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }

 
  
  render () {
    return (
      
   
        <div>
          
              <div>
                <Header>
                  Hey
                  <br />
                  <Button onClick={() => this.toggleForm()}>Edit</Button>
                </Header>
                {this.state.showForm ? <UpdateBlogForm /> : "" }
              </div>
              
            
       
        </div>
    )
    }
  }
      


const mapStateToProps = (state, props) => {
  return { blogs: state.blogs.find( b => b.id === parseInt(props.match.params.id))}
};


export default connect(mapStateToProps)(Blog)
