class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :name
      t.integer :price
      t.text :description
      t.belongs_to :category, index: true
      

      t.timestamps
    end
  end
end
