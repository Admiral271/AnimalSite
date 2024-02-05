const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://animalzd_goods:Qwerty12345@animalzd.beget.tech:3306/animalzd_goods');

// Модель Пользователя
const User = sequelize.define('User', {  
  fio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {  
  indexes: [
    {
      unique: true,
      fields: ['email']
    },
    {
      unique: true,
      fields: ['username']
    },
    {
      unique: true,
      fields: ['phoneNumber']
    }
  ]
});


// Модель Администратора
const Admin = sequelize.define('Admin', {  
  fio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
}, {  
});

const Toy = sequelize.define('Toy', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.TIME, 
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availability: {
    type: DataTypes.ENUM('Есть в наличии', 'Нет в наличии', 'Сделать предзаказ'),
    allowNull: false
  }
}, {
  indexes: [] // Опция для предотвращения автоматического добавления индексов
});


//Модель Одежды
const Clothing = sequelize.define('Clothing', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.TIME, 
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availability: {
    type: DataTypes.ENUM('Есть в наличии', 'Нет в наличии', 'Сделать предзаказ'),
    allowNull: false
  }
}, {
  indexes: [] // Опция для предотвращения автоматического добавления индексов
});

//Модель Корма
const Feed = sequelize.define('Feed', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.TIME, 
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availability: {
    type: DataTypes.ENUM('Есть в наличии', 'Нет в наличии', 'Сделать предзаказ'),
    allowNull: false
  }
}, {
  indexes: [] // Опция для предотвращения автоматического добавления индексов
});

//Модель Аксессуара
const Accessory = sequelize.define('Accessory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.TIME, 
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  availability: {
    type: DataTypes.ENUM('Есть в наличии', 'Нет в наличии', 'Сделать предзаказ'),
    allowNull: false
  }
}, {
  indexes: [] // Опция для предотвращения автоматического добавления индексов
});

User.sync({ alter: true });
Admin.sync({ alter: true });

Toy.sync({ alter: true });
Clothing.sync({ alter: true });
Feed.sync({ alter: true });
Accessory.sync({ alter: true });

module.exports = { sequelize, User, Admin, Toy, Clothing, Feed, Accessory };
