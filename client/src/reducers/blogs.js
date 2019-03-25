import axios from 'axios';

const BLOGS = 'BLOGS';
const ADD_BLOG = 'ADD_BLOG';
const UPDATE_BLOG = 'UPDATE_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';

export const getBlogs = () => {
  return (dispatch) => {
    axios.get('/api/blogs')
      .then( res => dispatch({ type: BLOGS, blogs: res.data }) )
  }
}

export const addBlog = (blog) => {
  return (dispatch) => {
    axios.post('/api/blogs', { blog } )
     .then( res => dispatch({ type: ADD_BLOG, blog: res.data }) )
  }
}

export const updateBlog = (blog) => {
  return (dispatch) => {
    axios.put(`/api/blogs/${blog.id}`, { blog } )
      .then( res => dispatch({ type: UPDATE_BLOG, blog: res.data }) )
  }
}

export const deleteBlog = (id) => {
  return (dispatch) => {
    axios.delete(`/api/blogs/${id}`)
      .then( () => dispatch({ type: DELETE_BLOG, id }) )
  }
}


const blogs = ( state = [], action ) => {
  switch(action.type) {
    case BLOGS:
      return action.blogs
    case ADD_BLOG:
      return [action.blog, ...state];
 
    case UPDATE_BLOG:
      return state.map( b => {
        if (b.id === action.blog.id)
          return action.blog
          return b
      })
    case DELETE_BLOG:
    let updatedBlogs = state.filter( b => {
      if (b.id === action.id) 
        return
          return b
    })
      return updatedBlogs

    case 'ADD_POST':
      let addedPost = state.map(b => {
        if (b.id === action.post.blog_id)
        return {
          name: b.name, id: b.id, posts: [...b.posts, action.post]
        }
        return b

      })
      return addedPost

    default:
      return state
  }
}

export default blogs;
