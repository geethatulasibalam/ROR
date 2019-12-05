class RemoveTimestamps < ActiveRecord::Migration[5.2]
  def change
  	remove_timestamps :authors
  end
end
