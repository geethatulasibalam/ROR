class AddLimitToColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :sports, :description, :string, limit: 30
  end
end
