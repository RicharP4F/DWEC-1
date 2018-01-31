-- Hemos añadido las restricciones (foreign keys) y algunos datos más para pruebas

CREATE TABLE users (
                    user_id bigint(20) unsigned NOT NULL auto_increment,
                    first_name varchar(100) NOT NULL,
                    last_name varchar(100) NOT NULL,
                    age int(11) NOT NULL,
                    username varchar(50) NOT NULL,
                    password varchar(50) NOT NULL,
                    PRIMARY KEY (user_id)
                  );

-- Categorías de productos
CREATE TABLE categories (
                    category_id bigint(20) unsigned NOT NULL auto_increment,
                    name varchar(150) NOT NULL,
                    description text NOT NULL,
                    PRIMARY KEY (category_id)
                );
-- Marcas de productos
CREATE TABLE brands (
                    brand_id bigint(20) unsigned NOT NULL auto_increment,
                    name varchar(150) NOT NULL,
                    description text NOT NULL,
                    img varchar(256) NOT NULL,
                    PRIMARY KEY (brand_id)
                );
-- Productos
CREATE TABLE products (
                    product_id bigint(20) unsigned NOT NULL auto_increment,
                    category_id bigint(20) unsigned NOT NULL,
                    brand_id bigint(20) unsigned NOT NULL,
                    name varchar(150) NOT NULL,
                    description text NOT NULL,
                    img varchar(256) NOT NULL,
                    price float NOT NULL,
                    posted timestamp,
                    PRIMARY KEY (product_id),
                    FOREIGN KEY (category_id) REFERENCES categories (category_id),
                    FOREIGN KEY (brand_id) REFERENCES brands (brand_id)
                   );
-- Carrito
CREATE TABLE shoppingcarts (
                    item_id bigint(20) unsigned NOT NULL auto_increment,
                    user_id bigint(20) unsigned NOT NULL,
                    product_id bigint(20) unsigned NOT NULL,
                    item_number int unsigned NOT NULL,
                    posted timestamp,
                    PRIMARY KEY (item_id),
                    FOREIGN KEY (user_id) REFERENCES users (user_id),
                    FOREIGN KEY (product_id) REFERENCES products (product_id)
                   );

-- Comentarios sobre los productos
CREATE TABLE comments (
                       comment_id bigint(20) unsigned  NOT NULL auto_increment,
                       user_id bigint(20) unsigned  NOT NULL,
                       product_id bigint(20) unsigned  NOT NULL,
                       rating int unsigned NOT NULL,
                       title varchar(150) NOT NULL,
                       body text NOT NULL,
                       posted timestamp,
                       PRIMARY KEY (comment_id),
                       FOREIGN KEY (user_id) REFERENCES users (user_id),
                       FOREIGN KEY (product_id) REFERENCES products (product_id)
                      );

-- Tiendas
CREATE TABLE stores (
                        store_id bigint(20) unsigned NOT NULL auto_increment,
                        name varchar(150) NOT NULL,
                        address text NOT NULL,
                        lat float NOT NULL,
                        lng float NOT NULL,
                        PRIMARY KEY (store_id)
                      );

-- Inicializamos algunos valores de los registros.
INSERT INTO users VALUES (1,'Juan','Sánchez',20,'jsanchez',md5('secret'));
INSERT INTO users VALUES (2,'Antonia','González', 15,'agonzalez',md5('password'));
INSERT INTO users VALUES (3,'Luisa','García', 18 ,'lgarcia',md5('topsecret'));

INSERT INTO categories VALUES (1,'Textil','Ropa, Calzado, Hogar');
INSERT INTO categories VALUES (2,'Electrónica', 'Informática, electrónica de consumo');
INSERT INTO categories VALUES (3,'Congelados', 'Verdura, carne, pescado y preparados congelados');
INSERT INTO categories VALUES (4,'Alimentación', 'Productos embasados');

INSERT INTO brands VALUES (1,'Levis', 'Pantalones americanos', '/img/levis_logo.jpg');
INSERT INTO brands VALUES (2,'Sony', 'Electrónica japonesa', '/img/sony_logo.jpg');
INSERT INTO brands VALUES (3,'Findus', 'Verduras congeladas', '/img/findus_logo.jpg');
INSERT INTO brands VALUES (4,'Nutella', 'Crema de cacao', '/img/nutella_logo.jpg');

INSERT INTO `products`(`product_id`, `category_id`,`brand_id`, `name`, `description`, `img`,`price`, `posted`) VALUES
  (1,1,1,'Pantalón','Pantalón vaquero', '/img/pvaquero.jpg', 49.99 ,NULL),
  (2,2,2,'Radio','Aparato de radio', '/img/radio.jpg', 20, NULL),
  (3,3,3,'Patata','Patata 50g', '/img/patata.jpg', 1.99 ,NULL),
  (4,4,4,'Nutella','Crema de cacao 350 gr', '/img/botenutella.jpg', 2.99, NULL);

INSERT INTO `comments`(`user_id`, `product_id`,`rating`, `title`, `body`) VALUES
  (1,1,5, 'Los mejores', 'Nunca defraudan, soy fiel a esta marca'),
  (2,1,4, 'Esperaba más', 'No están mal, pero por el precio esperaba más calidad'),
  (3,2,3, 'Volumen escaso', 'La marca se supone que es de confianza, pero el sonido de esta radio es demasiado bajo'),
  (3,4,5 , 'Excelente', 'Mataría por mi Nutella');

INSERT INTO `shoppingcarts`(`user_id`, `product_id`,`item_number`) VALUES
  (1,1,1),
  (1,4,1),
  (2,3,10),
  (3,2,1),
  (3,2,1);

INSERT INTO `stores`(`store_id`,`name`,`address`,`lat`,`lng`) VALUES
  (1,'Juan de Garay','c/Juan de Garay, 25, 46017 Valencia', 39.4548243, -0.3957476),
  (2,'Malvarrosa','Playa de la Malvarrosa',39.47726,-0.3233746);
