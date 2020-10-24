class HokurikuInfoController < ApplicationController
	def index
		if current_user.age < 25
			@hokuriku = Hokuriku.where(age: "young").or(Hokuriku.where(age: "all"))
		elsif current_user.age > 50
			@hokuriku = Hokuriku.where(age: "old").or(Hokuriku.where(age: "all"))
		else
			@hokuriku = Hokuriku.where(age: "all")
		end
	end
end
