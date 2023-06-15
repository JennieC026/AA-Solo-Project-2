'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Events';
    return queryInterface.bulkInsert(options,[
      {
        groupId:1,
        venueId:null,
        name:"Tennis Group First Meet and Greet",
        description:"First meet and greet event for the evening tennis on the water group! Join us online for happy times!",
        capacity:10,
        price:18.50,
        type:"Online",
        startDate:Date('2023-11-11'),
        endDate:Date('2023-11-12')
      },
      {
        groupId: 1,
        venueId: 1,
        name: "Tennis Singles",
        description:"Enjoy happy tennis time!",
        capacity:20,
        price:20.10,
        type: "In Person",
        startDate: Date('2023-12-11'),
        endDate: Date('2023-12-11'),
      },
      {
        groupId: 2,
        venueId: 2,
        name: "Combined Vegetable All-You-Can-Eat",
        description:"Enjoy Countless combined vegetables!",
        capacity:20,
        price:99.99,
        type: "In Person",
        startDate: Date('2023-12-10'),
        endDate: Date('2023-12-13'),
      },
     
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Events';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      name:{[Op.in]:["Combined Vegetable All-You-Can-Eat","Tennis Group First Meet and Greet","Tennis Singles"]},
      
    },{})
  }
};
