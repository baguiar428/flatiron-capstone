class UsersController < ApplicationController

  skip_before_action :authorized, only: [:index, :show, :create, :update, :destroy]

  def index
    render json: User.all, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :ok
  end

  # def show
  #     user = User.find_by(id: session[:user_id])
  #     if user
  #       render json: user
  #     else
  #       render json: { error: "Not authorized" }, status: :unauthorized
  #     end
  # end

  def show
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def update
    user = User.find(params[:id]).update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :username, :password)
  end


end
