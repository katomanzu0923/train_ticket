class TohokuInfoController < ApplicationController
	def index
		if current_user.age < 25
			@tohoku = Tohoku.where(age: "young").or(Tohoku.where(age: "all"))
		elsif current_user.age > 50
			@tohoku = Tohoku.where(age: "old").or(Tohoku.where(age: "all"))
		else
			@tohoku = Tohoku.where(age: "all")
		end
	end
end
