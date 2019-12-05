require "rails_helper"

RSpec.describe "dishes/home", type: :view do
   before do
    @dish  = create(:dish)
  end
  it "render the header partial" do
  	render :partial=> "header"
  end
  it "render the dishes" do
	  render :partial=> "disheslist", :locals=>{:dishes=>[@dish]}
	end
end