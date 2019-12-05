class DishesController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_action :get_dish, only: :show

	def home
		@dishes = Dish.paginate(:page => params[:page], :per_page => 6)
		respond_to do |format|
			format.html
			format.js
		end
	end
	
	def search
		@place = Place.find(1)
	 	@dishes = Dish.search(params[:search])
	end

	def sort
	 	if params[:filter] == 'price'
			@dishes = Dish.by_price(params[:filter]).search(params[:search])
		elsif params[:filter] == 'rating'
			@dishes = Dish.by_rating.search(params[:search])
		elsif params[:ratings]
			@dishes = Dish.sort_ratings(params[:ratings]).search(params[:search])
		elsif params[:categoryfilter]
			@dishes = Dish.by_category(params[:categoryfilter]).search(params[:search])
		elsif params[:min_rangefilter] and params[:max_rangefilter]
			@dishes = Dish.by_min_and_max(params[:min_rangefilter],params[:max_rangefilter]).search(params[:search])
		end
	end
	 
	def show
	end

	private
		def get_dish
			@dish = Dish.find(params[:id])
		end
end