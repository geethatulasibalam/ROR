FactoryBot.define do
  factory :image do
  	image { Rack::Test::UploadedFile.new(Rails.root.join('/home/nyros/Documents/geetha/2019/Foodfieimages/aamshrikand.jpg'), 'image/jpeg') }
  	association :imageable
  end
end
