# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_24_005906) do

  create_table "chugokus", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hokkaidos", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hokurikus", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kansais", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kantos", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kyusyus", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sikokus", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tohokus", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tokais", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "jp_name", null: false
    t.string "price", null: false
    t.string "jp_info", null: false
    t.string "zh_info", null: false
    t.string "en_info", null: false
    t.string "jp_area", null: false
    t.string "zh_area", null: false
    t.string "en_area", null: false
    t.string "jp_day", null: false
    t.string "zh_day", null: false
    t.string "en_day", null: false
    t.string "age", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "nickname"
    t.integer "age"
    t.integer "nationality_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
