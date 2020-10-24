class KyusyuInfoController < ApplicationController
		def index
			if current_user.age < 25
				@kyusyu = Kyusyu.where(age: "young").or(Kyusyu.where(age: "all"))
			elsif current_user.age > 50
				@kyusyu = Kyusyu.where(age: "old").or(Kyusyu.where(age: "all"))
			else
				@kyusyu = Kyusyu.where(age: "all")
			end
		end
end
