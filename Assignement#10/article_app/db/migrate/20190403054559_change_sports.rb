class ChangeSports < ActiveRecord::Migration[5.2]
  def change
  	change_table :sports do |t|
  		t.rename :sport_type, :sporttype
  	end
  end
end
