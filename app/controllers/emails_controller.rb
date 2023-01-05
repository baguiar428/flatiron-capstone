class EmailsController < ApplicationController

    # require 'user_mailer.rb'

    skip_before_action :authorized, only: [:create]

    def create
        params[:email].each do |email|
        @user = params[:user]
        # binding.pry
        # @user = params[:user]
        UserMailer.with(user: @user[:name] , email: email , subject: @user[:subject] , body: @user[:body]).email.deliver_now
        sleep 1
        end
    end
    
end
