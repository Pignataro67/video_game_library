class CreateVideoGames < ActiveRecord::Migration[5.2]
  def change
    create_table :video_games do |t|
      t.string :name
      t.integer :age_range
      t.text :description
      t.string :pic_url

      t.timestamps
    end
  end
end
