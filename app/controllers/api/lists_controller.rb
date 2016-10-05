class Api::ListsController < ApplicationController
  def index
    @lists = List.all
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render :index
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :index
  end

  def show
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :index
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def list_params
    params.require("list").permit(:name, :author_id)
  end
end
