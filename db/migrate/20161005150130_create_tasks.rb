class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.boolean :completed, default: false
      t.date :start_date
      t.date :due_date
      t.integer :priority
      t.integer :list_id

      t.timestamps
    end

    add_index :tasks, :list_id
  end
end
