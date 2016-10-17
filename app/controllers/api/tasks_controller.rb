class Api::TasksController < ApplicationController
  def index
    if params[:list_id]
      @tasks = current_user.lists.find(params[:list_id]).tasks
    else
      @tasks = current_user.tasks
    end
  end

  def search
    @tasks = current_user.tasks.search_tasks(params[:query])
    render :index
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = current_user.tasks.find(params[:id])
    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy
    render :show
  end

  def task_params
    params.require(:task).permit(
    :name, :start_date, :completed,
    :due_date, :priority,
    :list_id)
  end
end
