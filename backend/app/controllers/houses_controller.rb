class HousesController < ApplicationController


    def index
        houses = House.all 
        render json: houses
    end 

  
    private

    def wizard_params
        params.require(:wizard).permit(:name, :age, :blood, :image)
    end 
end
