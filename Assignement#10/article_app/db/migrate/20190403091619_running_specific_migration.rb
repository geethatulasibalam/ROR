class RunningSpecificMigration < ActiveRecord::Migration[5.2]
  def change
  	remove_column :sports, :history
  end
end
