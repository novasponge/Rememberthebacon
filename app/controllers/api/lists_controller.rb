class Api::ListsController < ApplicationController
  def index
    @lists = current_user.lists.list_with_task_number
  end

  def create
    @list = List.new(list_params)
    @list.author_id = current_user.id
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
