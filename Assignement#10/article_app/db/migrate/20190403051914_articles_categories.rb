class ArticlesCategories < ActiveRecord::Migration[5.2]
  def change
  	create_join_table :articles, :categories
  end
end
