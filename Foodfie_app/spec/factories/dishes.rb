FactoryBot.define do
  factory :dish, class: Dish do
  	name {"chicken biryani"}
  	price {"500"}
  	description {"A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort."}
  	category_id {9}
  	restaurants {|a| [a.association(:restaurant)]}
  	after(:create) do |dish|
      create(:image, imageable: dish)
    end
	end
end
