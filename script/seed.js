'use strict'

const {db, models: {User, Product, Order, LineItem} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', isAdmin: true }),
    User.create({ username: 'murphy', password: '123', isAdmin: false }),
    User.create({ username: 'doug', password: '123', isAdmin: true }),
    User.create({ username: 'cristina', password: '123', isAdmin: false }),
  ])

  const products = await Promise.all([
    //bowling balls
    Product.create({name: 'Brunswick TZone Indigo Swirl', description: 'A perfect ball for the bowler who is just beginning or as a spare for those extra few pins. Grab this TZone today for your arsenal!', price: 49.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/5910.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Brunswick TZone Deep Space', description: 'This Brunswick TZone Deep Space ball features tons of stars! Light up your game today by destroying those pins with the stars on your side!', price: 54.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/9310.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Brunswick TZone Caribbean Blue', description: 'It\'s always good to have a spare! Get pinpoint accuracy and show your style. Available in attractive colors and patterns at an affordable price. This TZone Caribbean Blue makes a great gift for all types of bowlers! So stand out on the lanes with this uniquely colored ball today!', price: 49.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/6469.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Brunswick TZone Scarlet Shadow', description: 'Sneak up on the competition with the Brunswick TZone Scarlet Shadow. This fun plastic/spare ball not only looks good on the lanes but is perfect for beginners, straight bowlers, or pros looking for a spare ball.', price: 54.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/10510.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Brunswick TZone Frozen Bliss', description: 'Ice the competition with the Brunswick TZone Frozen Bliss. This fun plastic/spare ball not only looks good on the lanes but is perfect for beginners, straight bowlers, or pros looking for a spare ball.', price: 49.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/12354.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Brunswick TZone Galactic Sparkle', description: 'This Brunswick TZone Galactic Sparkle ball features tons of stars! Light up your game today by destroying those pins with the stars on your side!', price: 49.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/13168.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Brunswick TZone Ocean Reef', description: 'Take on the competition with the Brunswick TZone Ocean Reef. This fun plastic/spare ball not only looks good on the lanes but is perfect for beginners, straight bowlers, or pros looking for a spare ball.', price: 49.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/11293.large.jpg', weight: 13, color: 'multi-color'}),
    Product.create({name: 'Elite Star Red/Black/White', description: 'This great-looking Elite Star Bowling Ball makes an attractive and durable ball for recreational bowlers. This ball is great for a bowler just starting out and/or for any bowler looking to knock out those spares! Pick out your Elite Star ball today!', price: 79.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14204.large.jpg', weight: 9, color: 'multi-color'}),
    Product.create({name: 'Elite Xmax Predator', description: 'The Elite Xmax Predator high-performance bowling ball is starving for heavy oil lane conditions! The Xmax Predator has a Pearl Reactive coverstock that is finished with a 2000 grit polish to help it skid down the lane and hook hard at the backend while the Titan Asymmetric core retains energy to annihilate the pins.', price: 199.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14151.large.jpg', weight: 9, color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Clear Red Rose Ball', description: 'Get your hands on this unique Clear Red Rose bowling ball from KR. Due to the unique design of this ball it is only available in one weight. This ball is sure to be a hit either on the lanes or on display.', price: 139.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/10695.large.jpg', weight: 9, color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Grey Camo Spare Ball', description: 'Complete your lineup with a sensational spare ball! This ball is perfect for any lane condition and any bowler!', price: 149.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14073.large.jpg', weight: 9, color: 'multi-color'}),

    Product.create({name: 'KR Strikeforce Hybrid Spare Ball', description: 'Complete your lineup with a sensational spare ball! This ball is perfect for any lane condition and any bowler!', price: 149.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14071.large.jpg', weight: 9, color: 'one color'}),
    Product.create({name: 'Elite Star Pink Pearl', description: 'This great-looking Elite Star Bowling Ball makes an attractive and durable ball for recreational bowlers. This ball is great for a bowler just starting out and/or for any bowler looking to knock out those spares! Pick out your Elite Star ball today!', price: 79.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14205.large.jpg', weight: 9, color: 'one color'}),
    Product.create({name: 'Elite Star Blue Pearl', description: 'This great-looking Elite Star Bowling Ball makes an attractive and durable ball for recreational bowlers. This ball is great for a bowler just starting out and/or for any bowler looking to knock out those spares! Pick out your Elite Star ball today!', price: 79.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14203.large.jpg', weight: 9, color: 'one color'}),
    Product.create({name: 'Elite Star Purple Pearl', description: 'This great-looking Elite Star Bowling Ball makes an attractive and durable ball for recreational bowlers. This ball is great for a bowler just starting out and/or for any bowler looking to knock out those spares! Pick out your Elite Star ball today!', price: 79.99, category: 'ball', imgUrl: 'https://images.bowling.com/large/14207.large.jpg', weight: 9, color: 'one color'}),


    //mens shoes
    Product.create({name: '2G kicks men black', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/6286.large.jpg', gender: 'men', color: 'one color'}),
    Product.create({name: '2G kicks men black', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/6286.large.jpg', gender: 'men', color: 'one color'}),
    Product.create({name: 'Dexter Mens Ricky IV Black', description: 'Dexter Ricky IV takes bowling shoes to a whole new level. From the New DexLite Collection, this shoe has an added increase of flexibility and durability with its lightweight outsole. ', price: 39.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/10739.large.jpg', gender: 'men', color: 'one color'}),
    Product.create({name: 'KR Strikeforce Mens Aviator Grey', description: 'The KR Strikeforce Aviator shoes for men are designed with modern technology to provided ultimate comfort with quality performance and are 40% lighter than comparable rubber outsoled shoes!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/12164.large.jpg', gender: 'men', color: 'one color'}),

    Product.create({name: '2G kicks men black/purple', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 46.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/12912.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: '2G kicks men black/white', description: '2G has come out with a shoe fitted with the standard universal slide for a little slide!', price: 49.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/6285.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: 'Dexter Mens Ricky IV Grey/Blue', description: 'Dexter Ricky IV takes bowling shoes to a whole new level. From the New DexLite Collection, this shoe has an added increase of flexibility and durability with its lightweight outsole.', price: 39.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/10749.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: 'Dexter Mens SST 8 Pro Black/Blue', description: 'The Dexter Mens SST 8 Pro bowling shoe takes a classic look and pairs it with modern technology. This shoe features Dexter\'s total interchangeable sole construction which makes this shoe convertible for left hand or right hand bowlers and allows the bowler to customize their slide surface as well as their traction surface.', price: 36.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/10735.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: 'Dexter Mens SST 8 Pro Camo/Green', description: 'The Dexter Mens SST 8 Pro bowling shoe takes a classic look and pairs it with modern technology. This shoe features Dexter\'s total interchangeable sole construction which makes this shoe convertible for left hand or right hand bowlers and allows the bowler to customize their slide surface as well as their traction surface.', price: 39.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/13777.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Mens Aviator Grey Camo', description: 'The KR Strikeforce Aviator shoes for men are designed with modern technology to provided ultimate comfort with quality performance and are 40% lighter than comparable rubber outsoled shoes!', price: 46.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/13928.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Mens Aviator Red/Black', description: 'The KR Strikeforce Aviator shoes for men are designed with modern technology to provided ultimate comfort with quality performance and are 40% lighter than comparable rubber outsoled shoes!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/12163.large.jpg', gender: 'men', color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Mens Aviator Blue/Black', description: 'The KR Strikeforce Aviator shoes for men are designed with modern technology to provided ultimate comfort with quality performance and are 40% lighter than comparable rubber outsoled shoes!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/12560.large.jpg', gender: 'men', color: 'multi-color'}),
    
    //womens shoes
    Product.create({name: '2G kicks women black', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/6286.large.jpg', gender: 'women', color: 'one color'}),
    Product.create({name: '2G kicks women charcoal', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 59.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/14054.large.jpg', gender: 'women', color: 'one color'}),
    Product.create({name: '2G kicks women white', description: '2G has come out with a shoe fitted with the standard universal slide for a little slide!', price: 48.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/13811.large.jpg', gender: 'women', color: 'one color'}),
    Product.create({name: 'Linds classic women white', description: 'These Right Handed Classic White bowling shoes are made with US top grain leather and they have a buckskin slide sole on the left foot and a smooth rubber traction sole with a leather tip on the right foot.', price: 48.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/7089.large.jpg', gender: 'women', color: 'one color'}),

    Product.create({name: '2G kicks women black/pink', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/10802.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: '2G kicks women black/purple', description: '2G has come out with a shoe fitted with their latest sole shaping technology!', price: 44.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/12912.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: '2G kicks women black/white', description: '2G has come out with a shoe fitted with the standard universal slide for a little slide!', price: 49.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/6285.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: '2G kicks women splash', description: '2G has come out with a fun flavor of shoe that helps you make a splash at your alley! This shoe fitted with the standard universal slide for a little slide!', price: 59.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/13447.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: '2G kicks women blue/white', description: '2G has come out with a shoe fitted with the standard universal slide for a little slide!', price: 47.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/6142.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Womens Lux Leopard', description: 'The KR Strikeforce Women\'s LUX brings you the premium level of comfort and style! The lightweight knitted fabric allows for breathability and a soft comfortable fit. ', price: 51.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/13911.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Womens Maui Grey', description: 'KR Strikeforce brings you the women\'s Maui shoe which features superior comfort! The lightweight knit fabric and Feather Lite outsoles will have you feeling your walking in paradise!', price: 52.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/13399.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: 'Linds Womens Monarch blue/white', description: 'The Monarch Women\'s rental shoes are made for quality and comfort for the bowler. Features include an upper made with split cowhide leather, a padded collar and tongue, a cushioned insole for comfort, are fully lined, premium leather slide soles with deep channels to accommodate heavy duty stitching though the upper and stitched and cemented smooth rubber heels.', price: 38.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/7073.large.jpg', gender: 'women', color: 'multi-color'}),
    Product.create({name: 'KR Strikeforce Womens Nova Lite Ash/Hot Pink', description: 'This modern designed KR Strikeforce Nova Lite shoe features KR Kanvas uppers that are easier to clean and maintain as well as a silky smooth interior liner that provides better comfort and fit.', price: 54.99, category: 'shoe', imgUrl: 'https://images.bowling.com/large/12070.large.jpg', gender: 'women', color: 'multi-color'}),










  
    //https://images.bowling.com/large/13911.large.jpg


  ])

  const orders = await Promise.all([
    Order.create({userId: 1}),
    Order.create({userId: 2})
  ])

  const lineItems = await Promise.all([
    LineItem.create({orderId: 1, productId: 1, quantity: 1}),
    LineItem.create({orderId: 1, productId: 2, quantity: 3}),
    LineItem.create({orderId: 2, productId: 2, quantity: 2}),
    LineItem.create({orderId: 2, productId: 1, quantity: 2}),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
