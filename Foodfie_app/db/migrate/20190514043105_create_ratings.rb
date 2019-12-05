class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :rating
      t.belongs_to :dish,  index: true

      t.timestamps
    end
  end
end
