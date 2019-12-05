class ChangeAccountsSupplierid < ActiveRecord::Migration[5.2]
  def change
  	change_column_null(:accounts, :supplier_id, false)
  end
end
