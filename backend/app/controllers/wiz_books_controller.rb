class WizBooksController < ApplicationController
    def index
        wiz_books = WizBook.all 
        render json: WizBookSerializer.new(wiz_books).to_serialized_json
    end 

    def show 
      wiz_book = WizBook.find(params[:id])
      render json: WizBookSerializer.new(wiz_book).to_serialized_json
    end

    def create
      wiz_book = WizBook.new(wiz_book_params)
        if wiz_book.save
          render json: WizBookSerializer.new(wiz_book).to_serialized_json
        end
    end


    private

    def wiz_book_params
        params.require(:wiz_book).permit(:wizard_id, :book_id)
    end 
end
