class Dish < ApplicationRecord
	belongs_to :category 
	has_many :ratings
	has_many :images, as: :imageable
	has_and_belongs_to_many :restaurants 
	validates_presence_of :name,:price,:category_id,:description
	scope :search, ->(searchdish) {where('lower(name) LIKE lower(?)',"%#{searchdish}%")}
	scope :by_price, ->(price){order(price)}
	scope :by_rating,->{joins(:ratings).group('dishes.id').order('avg(ratings.rating) desc')}
	scope :sort_ratings,->(rating){joins(:ratings).group('dishes.id').having('avg(ratings.rating)> ?',rating).order('avg(ratings.rating) asc')}
	scope :by_category, ->(category){where(category_id: category)}
	scope :by_min_and_max, ->(min,max){where('price BETWEEN ? AND ?',min,max)}
end
