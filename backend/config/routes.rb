Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    get "/wizards", to: "wizards#index"
    post "/wizards", to: "wizards#create"
    patch "/wizards/:id", to: "wizards#edit"

    get "/houses", to: "houses#index"
    get "/wiz_houses", to: "wiz_houses#index"

    post "wiz_houses", to: "wiz_houses#create"


end
