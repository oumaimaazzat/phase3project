class SessionsController < ApplicationController
    
    def new
        @wizard = Wizard.new
    end

    def create
        @wizard = Wizard.find_by(email: params[:wizard][:email])
        if @wizard && @wizard.authenticate(params[:wizard][:password])
            session[:id] = @wizard.id
            render json:@wizard
        else
            flash[:errors] = "Email or password is incorrect."
            redirect_to login_path
        end
    end

    def destroy
        session.clear
        redirect_to "/"
    end
end


