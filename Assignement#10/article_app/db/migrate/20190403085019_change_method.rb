class ChangeMethod < ActiveRecord::Migration[5.2]
  def change
  	remove_timestamps :sports
  end
end
