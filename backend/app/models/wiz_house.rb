class WizHouse < ApplicationRecord
    belongs_to :wizard
    belongs_to :house
end
