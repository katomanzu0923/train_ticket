Rails.application.routes.draw do
  devise_for :users
  root to: 'top#index' 
  get 'select_jp_language', to: 'select_jp_language#index'
  get 'select_en_language', to: 'select_en_language#index'
  get 'select_zh_language', to: 'select_zh_language#index'
  get 'season', to:'season#index'
end
