class EmailsController < ApplicationController

    # require 'user_mailer.rb'

    skip_before_action :authorized, only: [:create]

    def create
        # binding.pry
        @user = params[:user]
        UserMailer.with(user: @user[:name] , email: @user[:email] , subject: @user[:subject] , body: @user[:body]).email.deliver_now
    end
    
end
