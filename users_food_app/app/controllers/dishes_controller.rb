class DishesController < ApplicationController
	before_action :authenticate_user!
	before_action :set_dish,only:[:show]
	def index
		@dishes = current_user.dishes
	end
	def new
		@dish = Dish.new
		@dish.images.build
	end
	def create
		binding.pry
		@dish = current_user.dishes.new(dish_params)
		@dish.save!
		redirect_to user_session_path
	end
	def show
	end
	private
		def dish_params
			params.require(:dish).permit(:name,:price,:description,images_attributes:[:id,:image])
		end
		def set_dish
			@dish = current_user.dishes.find_by(id:params[:id])
		end
end