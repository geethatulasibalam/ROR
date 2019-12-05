require "rails_helper"

RSpec.describe "Dishes",type: :request do
	before do
	@dishes = FactoryGirl.create(:dish)
	# assigns(@dishes)
	end
	describe "GET /" do
		it "works" do
			get  "/"  
			# expect(assign(:dishes)).to eq([@dish])
			expect(response).to  redirect_to(assigns(@dishes))
		end
	end
end