puts 'Destroying previous tables'

User.destroy_all
Client.destroy_all

puts 'Started seeding new tables'

#User/Therapist Account Creations
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: 'Therapist1', password_digest: BCrypt::Password.create('PasswordTest1!'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: 'Therapist2', password_digest: BCrypt::Password.create('PasswordTest2!'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: 'Therapist3', password_digest: BCrypt::Password.create('PasswordTest3!'))

puts 'Therapists Seeded'

15.times do
Client.create!(first_name:Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: '+16467047644', email: 'b.aguiar428@gmail.com')
Client.create!(first_name:Faker::Name.first_name, last_name: Faker::Name.last_name, phone_number: '+12019256365', email: 'carlalifechangers@gmail.com')
end

puts 'Clients Seeded'

puts 'Done Seeding...'