OmniAuth.config.logger = Rails.logger
OmniAuth.config.full_host = Rails.env.production? ? 'http://www.rememberthebacon.co' : 'http://localhost:3000'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], {scope: 'userinfo.email, userinfo.profile, https://www.googleapis.com/auth/calendar', client_options: {ssl: {ca_file: Rails.root.join('cacert.pem').to_s}}}
end
