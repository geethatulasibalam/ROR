class Dish < ApplicationRecord
	belongs_to :user
	has_many :images,dependent: :destroy
	accepts_nested_attributes_for :images
	has_many :comments,dependent: :destroy
	accepts_nested_attributes_for :comments
	validates :name,:price,:description,presence: true
end
