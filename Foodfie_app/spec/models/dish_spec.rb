require 'rails_helper'

RSpec.describe Dish, type: :model do
	before(:all) do
		@dish = create(:dish)
	end
	it "dish is valid with valid attributes" do
		expect(@dish).to be_valid
	end
	it{is_expected.to validate_presence_of(:name)}
	it{is_expected.to validate_presence_of(:price)}
	it{is_expected.to validate_presence_of(:category_id)}
	it{is_expected.to validate_presence_of(:description)}
	describe "Associations" do
		it{should belong_to(:category)}
		it{should have_many (:ratings)}
		it{should have_many (:images)}
		it{should have_and_belong_to_many(:restaurants)}
	end
end