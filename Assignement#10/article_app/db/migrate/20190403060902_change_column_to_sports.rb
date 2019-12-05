class ChangeColumnToSports < ActiveRecord::Migration[5.2]
  def change
		change_column_null :sports, :no_of_players, true
		 
	end
end
