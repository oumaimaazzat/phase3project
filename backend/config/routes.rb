Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    # get "/wizards/new", to: "wizards#new"
    get "/wizards", to: "wizards#index"
    get "/wizards/:id", to: "wizards#show"
    post "/wizards", to: "wizards#create"
    patch "/wizards/:id", to: "wizards#edit"

    get "/houses", to: "houses#index"

    get "/wiz_houses", to: "wiz_houses#index"
    get "/wiz_houses/:id", to: "wiz_houses#show"
    post "wiz_houses", to: "wiz_houses#create"
    delete "wiz_houses/:id", to: "wiz_houses#delete"

    # get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

end
