require 'rails_helper'

RSpec.describe Image, type: :model do
	describe "Associations" do
		it { should belong_to(:imageable) }
	end
end