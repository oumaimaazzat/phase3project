class WizardsController < ApplicationController


    def index
        wizards = Wizard.all 
        render json: wizards
    end 

    def create
        Wizard.create(wizards_param)
    end 
    private

    def wizards_param
        params.require(:wizard).permit(:name, :age, :blood, :image)
    end 
end
