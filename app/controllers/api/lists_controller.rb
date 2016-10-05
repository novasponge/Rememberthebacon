class Api::ListsController < ApplicationController
  def index
    @lists = List.all
  end

  def create
    @list = current_user.lists.new(list_params)
    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :show
  end

  def show
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def list_params
    # user current user
    params.require(:list).permit(:name)
  end
end
