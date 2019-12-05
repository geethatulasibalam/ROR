require 'rails_helper'

RSpec.describe Place, type: :model do
  before(:all) do
  	@place = create(:place)
  end
  it{should validate_presence_of(:name)}
end
