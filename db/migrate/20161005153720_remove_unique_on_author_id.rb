class RemoveUniqueOnAuthorId < ActiveRecord::Migration[5.0]
  def change
    remove_index :lists, :author_id
    add_index :lists, :author_id
  end
end
