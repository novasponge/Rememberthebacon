class Task < ApplicationRecord
  # validates :list, presence: true

  belongs_to :list
end
