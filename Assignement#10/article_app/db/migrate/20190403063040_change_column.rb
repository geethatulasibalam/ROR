class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
  	rename_column :sports, :description, :desc
  end
end
