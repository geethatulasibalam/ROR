Rails.application.routes.draw do
  resources :places
  resources :widgets
  
  root to:'dishes#home'
   
  get 'dishes/search' => 'dishes#search', as: :search_result
  get 'dishes/sort' => 'dishes#sort', as: :sort
  get 'dishes/:id', to:'dishes#show', as: 'dish'
end
