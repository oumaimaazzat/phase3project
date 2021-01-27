class WizardsController < ApplicationController


    def index
        wizards = Wizard.all 
        render json: wizards
    end 

    def create
        wizard = Wizard.create(wizard_params)
        render json: wizard
    end 

    def edit
        wizard = Wizard.find(params[:id])
        wizard.update(name: wizard_params[:name], age: wizard_params[:age], blood: wizard_params[:blood])
        render json: wizard
    end
    private

    def wizard_params
        params.require(:wizard).permit(:name, :age, :blood, :image)
    end 
end
