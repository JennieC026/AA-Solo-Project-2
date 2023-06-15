'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Groups';
    return queryInterface.bulkInsert(options,[
      {
        organizerId:1,
        name:"Evening Tennis on the Water",
        about:"Enjoy rounds of tennis with a tight-nit group of people on the water facing the Brooklyn Bridge. Singles or doubles.",
        type:"In person",
        private:true,
        city:"New York",
        state:"NY"
      },
      {
        organizerId:1,
        name:"Combined Vegetable Hater Group",
        about:"Eat but hate combined vegetable everyday",
        type:"In person",
        private:true,
        city:"Los Angeles",
        state:"CA"
      },
      {
        organizerId:2,
        name:"Witch Club",
        about:"We are witches",
        type:"In person",
        private:true,
        city:"Los Angeles",
        state:"CA"
      },
     
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Groups';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      name:{[Op.in]:["Evening Tennis on the Water","Combined Vegetable Hater Group","Witch Club"]},
      
    },{})
    
  }
};
