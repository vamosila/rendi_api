import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Visit = sequelize.define('visits', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: true  },
    arrived: { type: DataTypes.BOOLEAN,  defaultValue: false },
    event_id: { type: DataTypes.INTEGER,  allowNull: false  },
}, {
    timestamps: true,
    freezeTableName: true
})

export default Visit
