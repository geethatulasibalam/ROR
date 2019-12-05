require 'rails_helper'

RSpec.describe DishesController,type: :routing  do
	describe "routing" do
		it "routes to home" do
			expect(:get=> "/").to route_to("dishes#home")
		end
		it "routes to search" do
			expect(:post=> "/dishes/search").to route_to("dishes#search")
		end
		it "routes to show" do
			expect(:get=>"/dishes/1").to route_to("dishes#show",:id=>"1")
		end
	end
end