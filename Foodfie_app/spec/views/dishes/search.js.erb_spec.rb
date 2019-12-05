require 'rails_helper'

RSpec.describe 'dishes/search',type: :view do
	before do
		@dish = create(:dish)
	end
	it "should append the dishes and render the partial" do
		render :partial=> "searchlist", :locals =>{:dishes=>[@dish]}
	end
end