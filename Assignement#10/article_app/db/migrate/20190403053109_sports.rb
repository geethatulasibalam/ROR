class Sports < ActiveRecord::Migration[5.2]
  def change
  	create_table :sports do |t|
  		t.string :name
  		t.string :description
  		t.string :sport_type
  		t.timestamps
  	end	
	end
end
