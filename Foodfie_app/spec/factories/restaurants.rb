FactoryBot.define do
  factory :restaurant do
  	name {"R&G"}
  	address {"vizag"}
  	mobile {"89769 67543"}
  	# dishes { |a| [a.association(:dish)] }
  	after(:create) do |restaurant|
  		create(:image,imageable: restaurant)
  	end
  end
end
