class Task < ApplicationRecord
  validates :list, :name, presence: true

  belongs_to :list

  has_one :author,
    class_name: 'User',
    through: :list,
    source: :author

  def self.search_tasks(queryStr)
    queryStr = queryStr.split(" ")
    name =  queryStr.select do |str|
      !(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.match(str)) &&
      !(/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(\/|-|\.)(((0[13578]|Jan|Mar|May|Jul|Aug|Oct|Dec|1[02])(\/|-|\.)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11|Apr|Jun|Sep|Nov)(\/|-|\.)(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.match(str))
    end

    date = queryStr.select do |str|
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.match(str) ||
      /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(\/|-|\.)(((0[13578]|Jan|Mar|May|Jul|Aug|Oct|Dec|1[02])(\/|-|\.)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11|Apr|Jun|Sep|Nov)(\/|-|\.)(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/.match(str)
    end

    if name.empty? && date.empty?
      return Task.where("tasks.name like '%#{name}%'")
    elsif !name.empty? && !date.empty?
      date = Date.parse(date.first)
      name = name.join(" ")
      return Task.where("tasks.name like '%#{name}%'").where("tasks.due_date = '#{date}'")
    elsif name.empty?
      date = Date.parse(date.first)
      return Task.where("tasks.due_date = '#{date}'")
    elsif date.empty?
      name = name.join(" ")
      return Task.where("tasks.name like '%#{name}%'")
    end
  end
end
