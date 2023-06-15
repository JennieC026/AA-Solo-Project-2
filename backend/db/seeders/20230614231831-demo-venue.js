'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Venues';
    return queryInterface.bulkInsert(options,[
      {
        groupId:1,
        address:"123 Disney Lane",
        city:"New York",
        state:"NY",
        lat:37.7645358,
        lng:-122.4730327
      },
      {
        groupId:2,
        address:"321 Vegetable Blvd",
        city:"Los Angeles",
        state:"CA",
        lat:35.7645358,
        lng:-110.1234567
      },
      {
        groupId:3,
        address:"456 Witch Ave",
        city:"Los Angeles",
        state:"CA",
        lat:34.7645358,
        lng:-112.1234567
      },
     
    ])

  
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Venues';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      address:{[Op.in]:["456 Witch Ave","321 Vegetable Blvd","123 Disney Lane"]},
      
    },{})
  }
};
