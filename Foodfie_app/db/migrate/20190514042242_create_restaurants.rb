class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :mobile

      t.timestamps
    end

    create_table :dishes_restaurants, id: false do |t|
    	t.belongs_to :dish, index: true
    	t.belongs_to :restaurant, index: true
    end
  end
end
