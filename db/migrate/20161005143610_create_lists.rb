class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.integer :author_id
      t.string :name

      t.timestamps
    end

    add_index :lists, :author_id

  end
end
