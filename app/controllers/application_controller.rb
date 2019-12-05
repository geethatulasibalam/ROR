class ApplicationController < ActionController::Base
	# def current_user
 #    return unless session[:user_id]
 #    @current_user = User.find(session[:user_id])
 #  end

	private

	def after_sign_in_path_for(resource_or_scope)
    dishes_path
  end

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end
end
