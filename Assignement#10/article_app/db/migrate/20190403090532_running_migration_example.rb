class RunningMigrationExample < ActiveRecord::Migration[5.2]
  def change
  	add_column :sports, :history, :string, limit:100
  end
end
