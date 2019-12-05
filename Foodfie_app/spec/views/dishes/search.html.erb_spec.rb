require 'rails_helper'

RSpec.describe 'dishes/search',type: :view do
	before do
	 @place = assign(:place,Place.first)
	 @dish =  build(:dish)
	end
	it "renders the header partial" do
		render :partial=>"header"
	end
	it "renders the place" do
		expect(@place).to have_attributes(:name=>@place.name)
	end
	it "render the searchlist" do
 		render :partial => "searchlist",:locals=>{:dishes=> [@dish]}
 	end
end