Rails.application.routes.draw do
  devise_for :users
  root to: 'top#index' 
  get 'select_jp_language', to: 'select_jp_language#index'
  get 'select_en_language', to: 'select_en_language#index'
  get 'select_zh_language', to: 'select_zh_language#index'
  get 'season', to:'season#index'
  get 'area', to: 'area#index'
  get 'hokkaido_info', to: 'hokkaido_info#index'
  get 'tohoku_info', to: 'tohoku_info#index'
  get 'kanto_info', to: 'kanto_info#index'
  get 'hokuriku_info', to: 'hokuriku_info#index'
  get 'tokai_info', to: 'tokai_info#index'
  get 'kansai_info', to: 'kansai_info#index'
  get 'chugoku_info', to: 'chugoku_info#index'
  get 'sikoku_info', to: 'sikoku_info#index'
  get 'kyusyu_info', to: 'kyusyu_info#index'
end
