class WizardsController < ApplicationController


    def index
        wizards = Wizard.all 
        render json: WizardSerializer.new(wizards).to_serialized_json
    end 

    def show 
        wizard = Wizard.find(session[:id])
        render json: WizardSerializer.new(wizard).to_serialized_json
    end

    def create
        wizard = Wizard.create(wizard_params)
        session[:id] = @user.id
        render json: WizardSerializer.new(wizard).to_serialized_json
    end 

    def edit
        wizard = Wizard.find(params[:id])
        wizard.update(name: wizard_params[:name], age: wizard_params[:age], blood: wizard_params[:blood])
        render json: WizardSerializer.new(wizard).to_serialized_json
    end
    private

    def wizard_params
        params.require(:wizard).permit(:email, :password, :password_confirmation, :name, :age, :blood, :image)
    end 
end
