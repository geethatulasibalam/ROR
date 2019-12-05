 

# categories = Category.create([{name: 'non-vegetarian'},{name: 'vegetarian'},{name: 'dessert'}])


# restaurants = Restaurant.create([{name: 'vista', address: 'vizag', mobile: '89130 45678'},{name: 'R&G', address: 'vizag', mobile: '89166 15151'},{name: 'TFL', address: 'Vijayawada', mobile: '70950 04567'},{name: 'The Raj Pavilion', address: 'Bengaluru', mobile: '80 2226 9898'},{name: 'Caprese', address: 'Bengaluru', mobile: '80 4512 6460'}])


# dishes = Dish.create([{name: 'chicken birayani', price: '300', description: "A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort. Long-grained rice (like basmati) flavored with exotic spices, such as saffron, is layered with lamb, chicken, fish, or vegetables, and a thick gravy. The dish is then covered, its lid secured with dough, and then the biryani is cooked over a low flame. This is definitely a special occasion dish.", category_id: 1},{name: 'dum biryani', price: '500', description: "A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort. Long-grained rice (like basmati) flavored with exotic spices, such as saffron, is layered with lamb, chicken, fish, or vegetables, and a thick gravy. The dish is then covered, its lid secured with dough, and then the biryani is cooked over a low flame. This is definitely a special occasion dish.", category_id: 1},{name: 'Chicken Chettinad', price: '600', description: "A famous dish from Tamil Nadu, Chicken Chettinad is special for its unique way of cooking. A variety of marinated spices are applied as a paste on the chicken which is then cooked until it is tender and super juicy.", category_id: 1},{name: 'Fish Molee', price: '500', description: "Famous in Kerala, it is basically a fish stew made with coconut milk. Fish Molee is not as spicy as traditional Kerala recipes; so the flavour of the fish dominates the stew.", category_id: 1},{name: 'Payyoli Chicken Fry', price: '600', description: "The darker and crispier it is, the better it tastes. Made popular in Payyoli, located near the North Malabar coast of Kerala, this recipe is a signature dish at roadside restaurants. The cooking is simple but it is the spices that make it special!", category_id: 1},{name: ' Quinoa', price: '700', description: "Yes, quinoa is a great source of protein and it is extremely versatile. We love quinoa! The only problem is that every non-vegetarian seems to think this trendy food is all we eat and now it's become a super-stereotypical vegetarian food. Newsflash: We really don't eat it every single day.", category_id: 2},{name: 'Tofu', price: '600', description: "Yes, tofu is probably the most stereotypical of vegetarian foods. But there may be a reason for that. Tofu is pretty tasty, and it can be used in so many different ways. It's like a sponge, capable of soaking up a myriad of different flavors. Throw it in a stir fry, have it with peanut sauce or have it in a noodle dish. It provides great substance and texture and it doesn't hurt that a lot of Asian restaurants happily substitute meat with it.", category_id: 2},{name: 'Pasta', price: '600', description: "Pasta will never let you down when it comes to options: Stuffed shells, ravioli, stir-fry, and lo mein are just a few of our favorites. And, of course, the ultimate lazy vegetarian pasta meal: penne with tomato sauce. Pasta and sauce is a vegetarian's saving grace and it does the job for many easy and wonderful dinners.", category_id: 2},{name: 'Falafel', price: '500', description: "This is the vegetarian's ultimate street food. It's so good that we know some meat eaters who choose this over shawarma many times.", category_id: 2},{name: 'Burritos', price: '600', description: "Burritos are great because they are one of the few things that seem to definitely have the fullness and taste equivalent to having meat. There are so many components of a burrito, you don't even miss or need the meat.", category_id: 2},{name: 'Gulab Jamun', price: '300', description: "The good old delight made with khoya, fried golden and finally dipped in saffron induced sugar syrup. Also a festive favourite", category_id: 3},{name: 'Gajar Ka Halwa', price: '500', description: "Warm your winter with this recipe that is sure to delight even the pickiest of dessert eaters! Halwa made Pakistani style with grated carrot, condensed milk, nuts and golden varq.", category_id: 3},{name: 'Sandesh', price: '400', description: "A melt-in-the-mouth dessert! Bengal's super hit sweet, made with cottage cheese, cardamom and saffron. One of the easiest way to please the sweet tooth!", category_id: 3},{name: 'Modak', price: '400', description: "Sweet flour dumplings stuffed with coconut, jaggery, nutmeg and saffron. Steamed to perfection. A famous Indian dessert prepared during the festival of Ganesh Chaturthi.", category_id: 3},{name: 'Aam Shrikhand', price: '300', description: "A Gujarati favorite made with hung curd. Few ingredients, great flavors! In this recipe mildly sweetened yogurt is studded with mango pieces and served with a zesty mango salad.", category_id: 3}])


# d1 = Dish.find(1)
# d1.restaurants << Restaurant.find(2)
# d2 = Dish.find(2)
# d2.restaurants << Restaurant.find(2)
# d3 = Dish.find(3)
# d3.restaurants << Restaurant.find(4)
# d4 = Dish.find(4)
# d4.restaurants << Restaurant.find(3)
# d5 = Dish.find(5)
# d5.restaurants << Restaurant.find(2)
# d6 = Dish.find(6)
# d6.restaurants << Restaurant.find(1)
# d7 = Dish.find(7)
# d7.restaurants << Restaurant.find(4)
# d8 = Dish.find(8)
# d8.restaurants << Restaurant.find(5)
# d9 = Dish.find(9)
# d9.restaurants << Restaurant.find(2)
# d10 = Dish.find(10)
# d10.restaurants << Restaurant.find(4)
# d11 = Dish.find(11)
# d11.restaurants << Restaurant.find(3)
# d12 = Dish.find(12)
# d12.restaurants << Restaurant.find(2)
# d13 = Dish.find(13)
# d13.restaurants << Restaurant.find(1)
# d14 = Dish.find(14)
# d14.restaurants << Restaurant.find(4)
# d15 = Dish.find(15)
# d15.restaurants << Restaurant.find(5)


# ratings = Rating.create([{rating: 6 , dish_id: 1},{rating: 7 , dish_id:2 },{rating:8 , dish_id:3 },{rating:5 , dish_id:4 },{rating: 6, dish_id:5 },{rating:8 , dish_id:6 },{rating:9 , dish_id:7 },{rating:8 , dish_id: 8},{rating:7 , dish_id:9 },{rating:7 , dish_id:10 },{rating: 8, dish_id:11 },{rating:8 , dish_id:12 },{rating:5 , dish_id:13 },{rating:6 , dish_id:14 },{rating:7 , dish_id: 15},{rating:6 , dish_id: 3},{rating:7 , dish_id:8 },{rating:6 , dish_id:3 },{rating:8 , dish_id:5 },{rating: 7, dish_id: 9},{rating:4 , dish_id:11 },{rating:8 , dish_id:12 },{rating:8 , dish_id:11 },{rating:8 , dish_id: 13},{rating:8 , dish_id:14 },{rating:9 , dish_id:15 },{rating:7 , dish_id:16 },{rating: 8, dish_id:13 },{rating:9 , dish_id:12 },{rating:8 , dish_id:10 },{rating:8 , dish_id:2 },{rating: 7, dish_id:6 }])


# Image.create([{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/chickenbiryani.jpg',"r"),:imageable => Dish.find(1)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/dumbiryani.jpg',"r"), :imageable => Dish.find(2)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/chickenchettinad.webp',"r"), :imageable => Dish.find(3)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/fishmolle.JPG',"r"), :imageable => Dish.find(4)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/pallychickenfry.webp',"r"), :imageable => Dish.find(5)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/quinoa.jpg',"r"), :imageable => Dish.find(6)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/tofu.jpg',"r"), :imageable => Dish.find(7)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/pasta.jpg',"r"), :imageable => Dish.find(8)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/falafel.jpg',"r"), :imageable => Dish.find(9)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/burittos.jpg',"r"), :imageable => Dish.find(10)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/gulbjamun.jpg',"r"), :imageable => Dish.find(11)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/gajar.jpg',"r"), :imageable => Dish.find(12)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/sandesh.jpg',"r"), :imageable => Dish.find(13)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/modak.jpg',"r"), :imageable => Dish.find(14)},{:image => File.new('/home/nyros/Documents/geetha/2019/May/14/images/aamshrikand.jpg',"r"), :imageable => Dish.find(15)}])

# Place.create!([
# { "name": "Buckingham Palace", "latitude": "51.501564","longitude": "-0.141944"},
# { "name": "Westminster Abbey", "latitude": "51.499581", "longitude": "-0.127309"},
# { "name": "Big Ben", "latitude": "51.500792", "longitude": "-0.124613"}
# ])