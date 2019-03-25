const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE_BLOG':
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