class AddSupplierToAccounts < ActiveRecord::Migration[5.2]
  def change
    add_foreign_key :accounts, :suppliers
  end
end
