5.times do 
Blog.create(
  name: Faker::Commerce.department,
)
  
  
end


puts "DONE"
