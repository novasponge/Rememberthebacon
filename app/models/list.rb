# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
