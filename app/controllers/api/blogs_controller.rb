class Api::BlogsController < ApplicationController
before_action :set_blog, only: [:update, :destroy, :show]

  def index
    render json: Blog.all
  end

  def show
    render json: @blog
  end

  def create
    blog = Blog.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: { errors: blog.errors },status: :unprocessable_entity
    end
  end

  def update
    if @blog.update(blog_params)
      render json: @blog
    else
      render json: @blog.errors, status: 422
    end
  end

  def destroy
    @blog.destroy
    render json: {alert: ("You have deleted a Blog")}
  end

  private
    def set_blog
      @blog = Blog.find(params[:id])
    end

    def blog_params
      params.require(:blog).permit(:name)
    end
    
end
