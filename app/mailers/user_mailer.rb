class UserMailer < ApplicationMailer
    default from: 'b.aguiar428@gmail.com'

    def email
        @user = params[:user]
        # binding.pry
        mail(to: params[:email], subject: "#{params[:subject]}")
    end
    
end
