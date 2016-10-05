Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :lists, only:[:create, :show, :update, :destroy, :index] do
      resources :tasks, only: [:create, :index]
    end

    resources :tasks, only: [:show, :destroy, :update]
  end
end
