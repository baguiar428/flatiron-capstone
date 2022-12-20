class TextsController < ApplicationController

    require 'twilio_client.rb'

    skip_before_action :authorized, only: [:create]


    def create
        binding.pry
            TwilioClient.new.send_text(params[:text])
    end

end
