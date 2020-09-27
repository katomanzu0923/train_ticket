class CreateTokais < ActiveRecord::Migration[6.0]
  def change
    create_table :tokais do |t|
      t.string   :jp_name, null: false
      t.string   :en_name, null: false
      t.integer  :price,   null: false
      t.string   :info,    null: false
      t.string   :detail,  null: false
      t.string   :age,     null: false

      t.timestamps
    end
  end
end
