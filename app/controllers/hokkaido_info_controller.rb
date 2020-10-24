class HokkaidoInfoController < ApplicationController
	def index
		if current_user.age < 25
			@hokkaido = Hokkaido.where(age: "young").or(Hokkaido.where(age: "all"))
		elsif current_user.age > 50
			@hokkaido = Hokkaido.where(age: "old").or(Hokkaido.where(age: "all"))
		else
			@hokkaido = Hokkaido.where(age: "all")
		end
	end
end
