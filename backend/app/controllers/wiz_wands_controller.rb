class WizWandsController < ApplicationController
    def index
        wiz_wands = WizWand.all 
        render json: WizWandSerializer.new(wiz_wands).to_serialized_json
    end 

    def show 
      wiz_wand = WizWand.find(params[:id])
      render json: WizWandSerializer.new(wiz_wand).to_serialized_json
    end

    def create
      wiz_wand = WizWand.new(wiz_wand_params)
        if wiz_wand.save
          render json: WizWandSerializer.new(wiz_wand).to_serialized_json
        end
    end


    private

    def wiz_wand_params
        params.require(:wiz_wand).permit(:wizard_id, :wand_id)
    end 

end

