class PagesController < ApplicationController
    def index
        blog = Blog.all
        render json: blog
    end
end
