class ChangeColumnDesc < ActiveRecord::Migration[5.2]
  def change
  	rename_column :sports, :desc, :description
  end
end
