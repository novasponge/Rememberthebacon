class NoticeMailer < ApplicationMailer

  def task_due_tomorrow_notice(user)
    @user = user

    mail(to: user.email_address, subject: 'Task due notification')
  end

end
