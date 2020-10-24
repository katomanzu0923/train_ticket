class SikokuInfoController < ApplicationController
	def index
		if current_user.age < 25
			@sikoku = Sikoku.where(age: "young").or(Sikoku.where(age: "all"))
		elsif current_user.age > 50
			@sikoku = Sikoku.where(age: "old").or(Sikoku.where(age: "all"))
		else
			@sikoku = Sikoku.where(age: "all")
		end
	end
end
