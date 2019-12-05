require 'rails_helper'

RSpec.describe 'rendering locals in a partial' do
	it "displays the requested dishes details" do
		dish = create(:dish)
		render "dishes/searchlist", :dishes=>[dish]
	end
end