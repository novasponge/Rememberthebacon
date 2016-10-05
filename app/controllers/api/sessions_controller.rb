class Api::SessionsController < ApplicationController
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
