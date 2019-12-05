class Patient < ApplicationRecord
	has_many :appiontments
	has_many :physician, :through => :appiontments
end
