module DishesHelper
	def rating(ratings)
		x = ratings
 		n = x.length;
 	 	r = 0;
		x.each do |rate|
			r = r + rate.rating
		end
		m = r.to_f/n;
		return m.round(1);
	end
end

 