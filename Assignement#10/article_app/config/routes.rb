Rails.application.routes.draw do
	root 'articles#index', as: "articles_list"
	 
	get 'articles/new', as: "new_article"
	post 'articles/create', as: "create_article"
	get 'articles/:id', to: 'articles#show', as: "article"
	get 'articles/:id/edit', to: 'articles#edit', as: "edit_article"
	patch 'articles/:id', to: 'articles#update'
	delete 'articles/:id', to: 'articles#destroy', as: "delete_article"

end
