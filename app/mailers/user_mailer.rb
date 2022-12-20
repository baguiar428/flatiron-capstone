class UserMailer < ApplicationMailer
    default from: 'b.aguiar428@gmail.com'

    def test_email
        @user = params[:user]
        # binding.pry
        mail(to: params[:email], subject: "Hi, #{params[:user]}! This is a test.")
    end
end
