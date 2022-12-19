class UsersController < ApplicationController

  skip_before_action :authorized, only: [:index, :create]

  def index
    render json: User.all, status: :ok
  end

  def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
  end

  private

  def user_params
    params.permit(:first_name, last_name,:username, :password)
  end


end
