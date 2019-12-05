require "rails_helper"
 
RSpec.describe 'dishes/show', type: :view do
	before do
    @dish  = create(:dish)
    assign(:dish, @dish)
  end
	it 'renders the header partial' do
		render :partial=>"header"
	end
  it "renders the HTML template" do
    render
    expect(@dish).to have_attributes(:name => @dish.name,:price=>@dish.price,:description=>@dish.description,:category_id=>@dish.category_id,:ratings=> @dish.ratings,:images=>@dish.images,:restaurants=>@dish.restaurants)
  end
end 