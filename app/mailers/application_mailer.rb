class ApplicationMailer < ActionMailer::Base
  default from: 'notification@erememberthebacon.herokuapp.com'
  layout 'mailer'
end
