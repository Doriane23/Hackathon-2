-- SQLBook: Code

-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
create table `product` (
  `id` INT primary key auto_increment not null,
  `name` VARCHAR(255) NOT NULL,
  `product_type` VARCHAR(255),
  `description` VARCHAR(255),
  `price` INT,
  `color` VARCHAR(255)
);

create table `user` (
  `id` INT primary key auto_increment not null,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `birthday` DATE NOT NULL,
  `hair_type` VARCHAR(255) NOT NULL,
  `hair_color` VARCHAR(255) NOT NULL,
  `skin_type` VARCHAR(255) NOT NULL,
  `skin_color` VARCHAR(255) NOT NULL
);


create table `user_product` (
  `id_user` INT NOT NULL,
  `id_product` INT NOT NULL,
  FOREIGN KEY (`id_user`) REFERENCES user(id) ON delete CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`id_product`) REFERENCES product(id) ON delete CASCADE ON UPDATE CASCADE
);
