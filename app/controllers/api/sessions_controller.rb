class Api::SessionsController < ApplicationController
  def omni_create
    @user = User.from_omniauth(env['omniauth.auth'])
    @token = request.env['omniauth.auth']["credentials"]["token"]
    client = Google::Apis::CalendarV3::CalendarService.new
    # fix bug here
    client.authorization.access_token = @token
    service = client.discovered_api('calendar', 'v3')
    debugger
    if @user
      log_in!(@user)
      redirect_to root_path
    else
      render json: ["unknown error"], status: 422
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:info],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: ["invalid username, email or password"], status: 422
    end
  end

  def destroy
    log_out!
    render json: {}
  end
end
