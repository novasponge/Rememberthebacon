json.array! @lists do |list|
  json.partial! "list", list: list
end
