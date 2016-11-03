OmniAuth.config.logger = Rails.logger
OmniAuth.config.full_host = Rails.env.production? ? 'http://www.rememberthebacon.co' : 'http://localhost:3000'

# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET'], {client_options: {ssl: {ca_file: Rails.root.join('cacert.pem').to_s}}}
# end
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '376282486981-rq8mp4h46j06t06ejd9hindfjt49flag.apps.googleusercontent.com', 'kMyKDUYEAbd9Ev-GAn3QMaV2', {client_options: {ssl: {ca_file: Rails.root.join('cacert.pem').to_s}}}
end

def haha

end
