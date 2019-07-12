CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img TEXT
);

-- dummy data
INSERT INTO products(name, price, img)
VALUES
('Lion King Collection', 25.99, 'https://s7.orientaltrading.com/is/image/OrientalTrading/PDP_VIEWER_IMAGE/pez-sup---/sup-lion-king-hard-candy-dispensers~13843885'),
('Presidents Collection', 17.99, 'https://images-na.ssl-images-amazon.com/images/I/712pSB69RvL._SL1500_.jpg'),
('Nintendo Collection', 1.99, 'https://www.pearlscandynh.com/prodimages/pezmario1b.jpg');