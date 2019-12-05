require 'rails_helper'

RSpec.describe Restaurant, type: :model do
	before(:all) do
		@restaurant = create(:restaurant)
	end
	it{is_expected.to validate_presence_of(:name)}
	describe "Associations" do
		it{should have_many(:images)}
		it{should have_and_belong_to_many(:dishes)}
	end
end