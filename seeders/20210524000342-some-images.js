"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          title: "John Doe",
          url: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/05/reverse-image-search-your-complete-guide-5ef5f5435f949-760x400.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
