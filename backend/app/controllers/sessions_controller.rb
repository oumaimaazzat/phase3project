class SessionsController < ApplicationController
    
    def new
        @wizard = Wizard.new
    end

    def create
      # byebug
        wizard = Wizard.find_by(email: params[:email])
        if wizard && wizard.authenticate(params[:password])
            session[:id] = wizard.id
            render json: WizardSerializer.new(wizard).to_serialized_json
        else
            render json: {status:401}
        end
    end

    # def destroy
    #     session.clear
    # end
end


