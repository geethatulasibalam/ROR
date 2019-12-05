class Restaurant < ApplicationRecord
	has_and_belongs_to_many :dishes
	has_many :images, as: :imageable
	validates :name, presence: true
end
