class AddColumns < ActiveRecord::Migration[5.2]
  def change
  	add_column :physicians, :name, :string
  	add_column :patients, :name, :string
  end
end
