class AreaController < ApplicationController
	def index
		@user = User.all
	end
end
