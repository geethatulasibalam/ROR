require 'rails_helper'

RSpec.describe Rating, type: :model do
	before(:all) do
		@rating = create(:rating)
	end
	describe "Associations" do
		it{should belong_to(:dish)}
	end
end