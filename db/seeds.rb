# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#Destroy Section to clear out any existing data before seeding
User.destroy_all

#User/Therapist Account Creations
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: 'Therapist1', password_digest: BCrypt::Password.create('PasswordTest1!'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: 'Therapist2', password_digest: BCrypt::Password.create('PasswordTest2!'))
User.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: 'Therapist1', password_digest: BCrypt::Password.create('PasswordTest3!'))