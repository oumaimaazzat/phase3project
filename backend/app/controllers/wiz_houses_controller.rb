class WizHousesController < ApplicationController


    def index
        wiz_houses = WizHouse.all 
        render json: wiz_houses
    end 

    def create
      # byebug
      wiz_house = WizHouse.create(wizard_id: wiz_house_params[:wizard_id], house_id: rand(1..4))  
      render json:wiz_house
    end

    private

    def wiz_house_params
        params.require(:wiz_house).permit(:wizard_id, :house_id)
    end 
end
