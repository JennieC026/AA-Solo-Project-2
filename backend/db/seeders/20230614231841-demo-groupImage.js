'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'GroupImages';
    return queryInterface.bulkInsert(options,[
      {
        groupId:1,
        url:'Image url1',
        preview:true
      },
      {
        groupId:2,
        url:'Image url2',
        preview:true
      },
      {
        groupId:3,
        url:'Image url3',
        preview:true
      },
     
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'GroupImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      url:{[Op.in]:['Image url1','Image url2','Image url3']},
      
    },{})
  }
};
