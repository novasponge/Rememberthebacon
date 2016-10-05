class AddConstrain < ActiveRecord::Migration[5.0]
  def change
    change_column :lists, :name, :string, null: false
  end
end
