class AddGoogleCalendarId < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :google_calendar_id, :string
  end
end
