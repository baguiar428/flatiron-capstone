Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test middleware/cookie configuration
  get '/hello', to: 'application#hello_world'

  #Route for Sessions/Login
  post "/login", to: "sessions#create"

  #Route for Twilio
  post "/text", to: "texts#create"

  #Route for Action Mailer
  post "/email", to: "emails#create"

  #Route for staying logged in
  get "/me", to: "users#show"

  #Route for logging out
  delete "/logout", to: "sessions#destroy"

  resources :users, only:[:index, :show, :create]


end
