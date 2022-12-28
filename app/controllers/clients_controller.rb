class ClientsController < ApplicationController

    skip_before_action :authorized, only: [:index, :show, :create, :update, :destroy]

    def index
        render json: Client.all, status: :ok
    end

    def show
        # binding.pry
        client = Client.find(params[:id])
        render json: client, status: :ok
    end

    def create
        client = Client.create!(client_params)
        render json: client
    end

    def update
        client = Client.find(params[:id]).update!(client_params)
        render json: client, status: :accepted
    end

    def destroy
        client = Client.find(params[:id])
        client.destroy 
        head :no_content
    end

    private

    def find_client
        @client = Client.find(params[:id])
    end
    
    def client_params
        params.permit(:first_name, :last_name, :phone_number, :email)
    end

end
