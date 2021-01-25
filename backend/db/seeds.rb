# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



h1 = House.create(name: "Gryffindor", logo: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88361/91122/Harry-Potter-Gryffindor-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__95823.1507640354.jpg?c=2?imbypass=on")
h2 = House.create(name: "Hufflepuff", logo: "https://thegarnetmine.com/wp-content/uploads/2020/03/Hufflepuff-House-Crest-737x900.jpg")
h3 = House.create(name: "Slytherin", logo: "https://miro.medium.com/max/346/0*2z3QIFEDIPQ280oT.jpg")
h4 = House.create(name: "Ravenclaw", logo: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88363/91130/Harry-Potter-Ravenclaw-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__86173.1507642983.jpg?c=2?imbypass=on")

w1 = Wizard.create(name: "Harry Potter", age: 19, image: "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=600&quality=85", blood: "half-blood")
w2 = Wizard.create(name: "Ron Weasley", age: 19, image: "https://uploads.scratch.mit.edu/users/avatars/38862514.png", blood: "full-blood")
w3 = Wizard.create(name: "Hermione Granger", age: 20, image: "https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTU5NjAxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3MTM0NjA2N30.hqgSl-etfARZhVNbypKHl87Xm6e5-dwchybCtW5YQ30/image.jpg?width=600&quality=85", blood: "muggle")
w4 = Wizard.create(name: "Draco Malfoy", age: 18, image: "https://hips.hearstapps.com/cosmouk.cdnds.net/15/08/nrm_1424419881-draco-malfoy-harry-potter.jpg", blood: "full-blood")

wizhouse1 = WizHouse.create(wizard_id: w1.id, house_id: h1.id)