class Wizard < ApplicationRecord
    has_many :wiz_houses
    has_one :house, through: :wiz_houses
end
