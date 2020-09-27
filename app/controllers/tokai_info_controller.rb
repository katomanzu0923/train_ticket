class TokaiInfoController < ApplicationController
	def index
		if current_user.age < 25
			@tokai = Tokai.where(age: "young")
		elsif current_user.age > 50
			@tokai = Tokai.where(age: "old")
		else
			@tokai = Tokai.where(age: "all")
		end
	end 
end