class TextsController < ApplicationController

    require 'twilio_client.rb'

    skip_before_action :authorized, only: [:create]


    def create
        # binding.pry
        params[:to].each do |phone_number|
            binding.pry
            message={to: phone_number, from: params[:from], body: params[:body]}
            TwilioClient.new.send_text(message)
        # This should make Ruby wait 1 second before sending request
            sleep 1
        end
    end

end
