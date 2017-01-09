class Api::SessionsController < ApplicationController
  def omni_create
    @user = User.from_omniauth(env['omniauth.auth'])
    if @user
      log_in!(@user)
      session[:read_token] = request.env['omniauth.auth']["credentials"]["token"]
      redirect_to root_path
    else
      render json: ["unknown error"], status: 422
    end
  end

  def csrf_token
    render json: { auth_token: form_authenticity_token }
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:info],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      redirect_to root_path
    else
      render json: ["invalid username, email or password"], status: 422
    end
  end

  def destroy
    log_out!
    render json: {}
  end
end
