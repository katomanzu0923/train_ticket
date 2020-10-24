class KansaiInfoController < ApplicationController
	def index
		if current_user.age < 25
			@kansai = Kansai.where(age: "young").or(Kansai.where(age: "all"))
		elsif current_user.age > 50
			@kansai= Kansai.where(age: "old").or(Kansai.where(age: "all"))
		else
			@kansai = Kansai.where(age: "all")
		end
	end
end
