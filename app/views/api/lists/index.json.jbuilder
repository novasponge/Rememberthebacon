json.list_index_info do
  @lists.each do |list|
    json.set! list.id do
      json.partial! "list", list: list
    end
  end
end

json.task_num_info do
  json.todayTaskNumber @today_tasks_number
  json.tomorrowTaskNumber @tomorrow_tasks_number
end
