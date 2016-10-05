# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  completed  :boolean          default(FALSE)
#  start_date :date
#  due_date   :date
#  priority   :integer
#  list_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ApplicationRecord
  # validates :list, presence: true

  belongs_to :list
end
