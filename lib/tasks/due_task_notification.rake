namespace :due_task_notification do
  desc "TODO"
  task send_due_notification: :environment do
    puts "Sending notification email"
    User.send_notification
    puts 'done'
  end
end
