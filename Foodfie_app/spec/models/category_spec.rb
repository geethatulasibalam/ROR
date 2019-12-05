require 'rails_helper'

RSpec.describe Category, type: :model do
	before(:all) do
		@category = create(:category)
	end
	it "category is valid with valid attributes" do
		expect(@category).to be_valid
	end
	it { is_expected.to validate_presence_of(:name) }
	describe "Associations" do
	it { should have_many(:dishes) }
	end
end