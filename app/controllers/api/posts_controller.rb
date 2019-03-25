class Api::PostsController < ApplicationController
  before_action :set_post, only: [:update, :destroy, :show]

  def index
    render json: @blog.posts
  end

  def show
    render json: @post
  end

  def create
    post = @blog.posts.new(post_params)
    if post.save
      render json: department
    else
      render json: { errors: post.errors },status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
    render json: {alert: ("You have deleted a post")}
  end

  private

    def set_blog
      @blog = Blog.find(params[:blog_id])
    end

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:name, :body)
    end
    
end
