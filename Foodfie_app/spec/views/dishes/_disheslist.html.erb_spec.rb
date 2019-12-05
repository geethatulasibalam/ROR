require 'rails_helper'

RSpec.describe 'rendering locals in a partial' do
	it "displays the dishes details" do
		dish = create(:dish)
		render "dishes/disheslist", :dishes=>[dish]
	end
end