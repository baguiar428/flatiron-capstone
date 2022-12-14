class User < ApplicationRecord
    #test
    # has_many :texts
    # has_many :clients, through: :texts

    has_secure_password

    validates :first_name, presence: true
    validates :last_name, presence: true

    validates :username, presence:true
    validates :username, uniqueness:true
    validates :username, length: {minimum: 7}

    # validates :password, presence: true
    # validates :password, length: {minimum: 7}
end
