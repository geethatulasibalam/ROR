class AddForeignKey1 < ActiveRecord::Migration[5.2]
  def change
  	add_foreign_key :articles_categories, :articles
  end
end
