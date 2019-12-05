require_relative '20190403085019_change_method'

class RevertExample < ActiveRecord::Migration[5.2]
  def change
  	revert ChangeMethod
  end
end
