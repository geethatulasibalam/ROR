require 'rails_helper'
RSpec.describe DishesController, type: :controller do
	let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }
  let(:valid_session) { {} }

  describe "GET home" do
  	it "assigns the dishes to @dishes" do
  		dish = Dish.create,valid_attributes
  		get :home 
  		expect(assigns(:dishes)).to eq([dish])
  	end
  	it "respond to a html template by default" do
	  	get :home
	  	expect(response.content_type).to eq "text/html"
  	end
  	it "respond to a js template by ajax calling" do
  		get :home, params:{page:1,:format => :js}
  		expect(response.content_type).to eq "text/javascript"
  	end
  end

  describe "GET show" do
  	it "assigns the requested dish to @dish" do
  		dish = Dish.create, valid_attributes
  		get :show, params: {id: dish.to_param}
  		expect(assigns(:dish)).to eq(dish)
  	end
  	it "renders a show template with requested dish" do
  		dish = Dish.create, valid_attributes
  		get :show, params: {id: dish.to_param}
  		expect(response).to render_template("show")
  	end
  end
  describe "POST search" do
  	it "finds the dishes by search name" do
  		place = Place.create, valid_attributes
  		post :search, params:{q: "something"}
  		expect(response).to be_successfull
  	end
  	it "finds the dishes by filter" do
  		place = Place.create, valid_attributes
  		post :search, params:{filter: "rating"}
  		expect(response).to be_successfull
  	end
  	it "finds the dishes by rating" do
  		place = Place.create, valid_attributes
  		post :search, params:{rating: "rating"}
  		expect(response).to be_successfull
  	end
  	it "finds the dishes by category" do
  		place = Place.create, valid_attributes
  		post :search, params:{category: 1}
  		expect(response).to be_successfull
  	end
  	it "finds the dishes by min and max range" do
  		place = Place.create, valid_attributes
  		post :search, params:{minrangefilter: 0, maxrangefilter: 1000}
  		expect(response).to be_successfull
  	end
  	it "respond to a html template by default" do
  		place = Place.create, valid_attributes
	  	post :search
	  	expect(response.content_type).to eq "text/html"
  	end
  	it "respond to a js template by ajax calling" do
  		place = Place.create, valid_attributes
  		post :search, params:{:format => :js}
  		expect(response.content_type).to eq "text/javascript"
  	end
  end

end