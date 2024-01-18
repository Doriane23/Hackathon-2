/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker, fakerFR } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate product");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into product(name, product_type, description, price, color) values (?, ?, ?, ?, ?)",
          [
            faker.commerce.product(),
            faker.lorem.word(),
            faker.commerce.productMaterial(),
            +faker.commerce.price({ min: 10, max: 250, dec: 0 }),
            faker.color.human(),
          ]
        )
      );
    }

    /* ************************************************************************* */

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate user");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into user(firstname, lastname, email, password, gender, address, birthday, hair_type, hair_color, skin_type, skin_color) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            fakerFR.person.firstName(),
            fakerFR.person.lastName(),
            faker.internet.email(),
            faker.internet.password(),
            "homme",
            faker.address.streetAddress(),
            faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            "chauve",
            "roux",
            "caucasien",
            "blanc",
          ]
        )
      );
    }

    /* ************************************************************************* */
    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate user_product");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 5; i += 1) {
      queries.push(
        database.query(
          "insert into user_product(id_user, id_product) values (?, ?)",
          [
            faker.number.int({ min: 1, max: 10 }),
            faker.number.int({ min: 1, max: 10 }),
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
