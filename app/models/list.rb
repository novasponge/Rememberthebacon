class List < ApplicationRecord
  validates :author, :name, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  has_many :tasks,
    dependent: :destroy

  def self.list_with_task_number
    List.select("lists.*, COUNT(tasks.id) AS num_task")
        .joins("LEFT OUTER JOIN tasks ON tasks.list_id = lists.id")
        .group('lists.id')
  end

end
