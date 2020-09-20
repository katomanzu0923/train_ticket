class RegistrationsController < ApplicationController
	def new
		@user = User.new
	end

	def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      redirecnt_to contoroller: :season, action: :index
    else
      render :new
    end
	end
	
	private

	def user_params
    params.require(:user).permit(:nickname, :age)
  end

end
