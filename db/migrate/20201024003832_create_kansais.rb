class CreateKansais < ActiveRecord::Migration[6.0]
  def change
    create_table :kansais do |t|
      t.string   :jp_name,  null: false
      t.string   :zh_name,  null: false
      t.string   :en_name,  null: false 
      t.string   :price,    null: false
      t.string   :jp_info,  null: false
      t.string   :zh_info,  null: false
      t.string   :en_info,  null: false
      t.string   :jp_area,  null: false
      t.string   :zh_area,  null: false 
      t.string   :en_area,  null: false
      t.string   :jp_day,   null: false
      t.string   :zh_day,   null: false
      t.string   :en_day,   null: false
      t.string   :age,      null: false
      t.references  :day, foreign_key: true

      t.timestamps
    end
  end
end
