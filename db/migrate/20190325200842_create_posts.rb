class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :body
      t.belongs_to :blog, foreign_key: true

      t.timestamps
    end
  end
end
