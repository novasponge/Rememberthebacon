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
    _task_params = task_params.reject {|k| k == 'tz'}

    if current_user.provider && task_params[:due_date].empty? == false
      tz = task_params[:tz]
      calendar = Google::Apis::CalendarV3::CalendarService.new
      calendar.authorization = session[:read_token]
      calendar_id = @task.google_calendar_id

      if task_params[:completed] === "false"
        start_date = task_params[:start_date].empty? ? task_params[:due_date] : task_params[:start_date]
        if calendar_id
          event = calendar.get_event('primary', calendar_id)
          event.summary = task_params[:name]
          event.description = task_params[:name]
          event.start = {
            date: start_date,
            time_zone: tz
          }
          event.end = {
            date: task_params[:due_date],
            time_zone: tz
          }
          res = calendar.update_event('primary', calendar_id, event)
        else
          event = Google::Apis::CalendarV3::Event.new({
            summary: task_params[:name],
            description: task_params[:name],
            start: {
              date: start_date,
              time_zone: tz
            },
            end: {
              date: task_params[:due_date],
              time_zone: tz
            },
            reminders: {
              use_default: true,
            }
          })
          res = calendar.insert_event('primary', event)
          @task.google_calendar_id = res.id
        end
      elsif task_params[:completed] == "true"
        calendar.delete_event('primary', calendar_id)
        @task.google_calendar_id = nil
      end
    end

    if @task.update(_task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = current_user.tasks.find(params[:id])
    @task.destroy
    render :show
    calendar_id = @task.google_calendar_id
    if calendar_id
      calendar = Google::Apis::CalendarV3::CalendarService.new
      calendar.authorization = session[:read_token]
      calendar.delete_event('primary', calendar_id)
    end
  end

  def task_params
    params.require(:task).permit(
    :name, :start_date, :completed,
    :due_date, :priority,
    :list_id, :tz)
  end
end
