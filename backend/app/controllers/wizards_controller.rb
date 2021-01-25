class WizardsController < ApplicationController


    def index
        wizards = Wizard.all 
        render json: wizards
    end 
end
