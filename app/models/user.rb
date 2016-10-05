class User < ApplicationRecord
  validates :username, :email_address, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, :email_address, uniqueness: true

  has_many :lists,
    class_name: 'List',
    foreign_key: :author_id

  has_many :tasks,
    through: :lists,
    source: :tasks

  after_initialize :ensure_session_token

  attr_reader :password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(info, password)

    if info =~ /@/
      user = User.find_by(email_address: info)
    else
      user = User.find_by(username: info)
    end

    return nil if user.nil?
    if user.is_password?(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
