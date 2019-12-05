class Student < ApplicationRecord
	after_validation :normalize_name, on: [:create, :update]
	validates :name, presence: true
	before_validation :message_before_validation
	before_create :normalize_branch, unless: Proc.new {:branch.nil?}
	after_create :message_after_create
	before_save :message_before_save
	after_save :message_after_save
	before_update :check_update
	after_update :message_after_update
	before_destroy :intimate_user_about_destroy
	after_destroy :message_after_destroy
	after_commit :message_after_commit
	after_rollback :message_after_rollback
	 
	def normalize_name
    self.name = name.downcase.titleize
    puts "after_validation"
  end

  def check_update
  	if self.name_changed?
  		puts"before_update"
  	end
  end

  def intimate_user_about_destroy
  	puts "before_destroy"
  end

  def normalize_branch
  	self.branch = branch.upcase
  	puts "before_create"
  end

  def message_after_create
  	puts "after_create"
  end

  def message_after_destroy
  	puts "after_destroy"
  end

  def message_after_update
  	puts "after_update"
  end

  def message_before_validation
  	puts "before_validation"
  end

  def message_before_save
  	puts "before_save"
  end

  def message_after_save
  	puts "after_save"
  end

  def message_after_commit
  	puts "after_commit"
  end 

  def message_after_rollback
  	puts "after_rollback"
  end 

end
