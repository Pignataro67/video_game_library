# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  VideoGame.create(name: 'Contra', age_range: '10-12', pic_url: 'https://i.imgur.com/gyKwGfFb.png')
  VideoGame.create(name: 'SMB3', age_range: '10-12', pic_url: 'https://i.imgur.com/AMb7VAib.png')
  VideoGame.create(name: 'Super C', age_range: '10-12', pic_url: 'https://i.imgur.com/dQfocgBb.png')
  VideoGame.create(name: 'Zelda', age_range: '10-12', pic_url: 'https://i.imgur.com/g4TZnXeb.png')
  VideoGame.create(name: 'Twisted Metal', age_range: '10-12', pic_url: 'https://i.imgur.com/DwJ2YAob.png')
  VideoGame.create(name: 'Destiny', age_range: '10-12', pic_url: 'https://i.imgur.com/eZlrelib.jpg')
  VideoGame.create(name: 'Castlevania', age_range: '10-12', pic_url: 'https://i.imgur.com/3Nbnlu7b.png')    
              
#   const videoGames = [
# //     //   {"id":1,"name":"Contra","age_range":"10-12","pic_url":"https://i.imgur.com/gyKwGfFb.png"},
# //     //   {"id":2,"name":"Super Mario Bros. 3","age_range":"10-12","pic_url":"https://i.imgur.com/AMb7VAib.png"},
# //     //   {"id":3,"name":"Zelda","age_range":"10-12","pic_url":"https://i.imgur.com/g4TZnXeb.png"},
# //     //   {"id":4,"name":"Castlevania","age_range":"10-12","pic_url":"https://i.imgur.com/3Nbnlu7b.png"},
# //     //   {"id":5,"name":"Super C","age_range":"10-12","pic_url":"https://i.imgur.com/dQfocgBb.png"},
# //     //   {"id":6,"name":"Twisted Metal","age_range":"10-12","pic_url":"https://i.imgur.com/DwJ2YAob.png"},
# //     //   {"id":7,"name":"Destiny","age_range":"10-12","pic_url":"https://i.imgur.com/eZlrelib.jpg"}
# //     //   ]