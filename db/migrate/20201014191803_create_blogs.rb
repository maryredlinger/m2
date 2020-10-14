class CreateBlogs < ActiveRecord::Migration[5.1]
  def change
    create_table :blogs do |t|
      t.string :location
      t.string :camp_spot
      t.date :date
      t.text :notes
      t.string :reminders

      t.timestamps
    end
  end
end
