class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students, id: false do |t|
      t.primary_key :roll_no
      t.string :name
      t.string :branch
      t.string :year
      t.string :address
      t.date :joining_date
      t.string :regulation
      t.integer :percentage
      t.integer :points
      t.integer :backlogs
      t.timestamps
    end
  end
end
