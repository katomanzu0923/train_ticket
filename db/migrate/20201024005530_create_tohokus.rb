class CreateTohokus < ActiveRecord::Migration[6.0]
  def change
    create_table :tohokus do |t|
      t.string   :jp_name,  null: false
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


      t.timestamps
    end
  end
end
