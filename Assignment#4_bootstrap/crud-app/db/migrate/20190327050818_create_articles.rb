class CreateArticles < ActiveRecord::Migration[5.2]
  attachment :image 
  def change
    create_table :articles do |t|
      t.string :name
      t.string :description
      t.string :category_id
      t.boolean :published
      t.string :image

      t.timestamps
    end
  end
end
