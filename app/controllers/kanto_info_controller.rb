class KantoInfoController < ApplicationController
	def index
		if current_user.age < 25
			@kanto = Kanto.where(age: "young").or(Kanto.where(age: "all"))
		elsif current_user.age > 50
			@kanto = Kanto.where(age: "old").or(Kanto.where(age: "all"))
		else
			@kanto = Kanto.where(age: "all")
		end
	end
end
