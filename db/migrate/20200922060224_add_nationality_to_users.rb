class AddNationalityToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :nationality_id, :integer
  end
end
