class ChugokuInfoController < ApplicationController
	def index
		if current_user.age < 25
			@chugoku = Chugoku.where(age: "young").or(Chugoku.where(age: "all"))
		elsif current_user.age > 50
			@chugoku = Chugoku.where(age: "old").or(Chugoku.where(age: "all"))
		else
			@chugoku = Chugoku.where(age: "all")
		end
	end
end
