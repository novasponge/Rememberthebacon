class AddConstrainAuthorName < ActiveRecord::Migration[5.0]
  def change
    change_column :lists, :author_id, :integer, null: false
  end
end
