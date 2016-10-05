class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(tasks_params)
    if @task.save
      render :index
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
  end

  def destroy
  end

  def tasks_params
    params.require('task').permit(:name, :start_date, :due_date, :priority, :list_id)
  end

end
