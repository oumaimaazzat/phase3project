class Wizard < ApplicationRecord
    has_one :wiz_house
    has_one :house, through: :wiz_house

    has_secure_password

    # validates :password, length: {minimum: 8}
end
