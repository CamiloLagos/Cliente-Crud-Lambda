const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addProduct = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const { nombre, descripcion, sku, codigo_barras, precio } = JSON.parse(event.body);
    const fecha = new Date().toDateString();
    const id = v4();

    const newProducto = {
        id,
        nombre,
        descripcion,
        sku,
        codigo_barras,
        precio,
        fecha
    }

    await dynamodb.put({
        TableName: 'ProductoTable',
        Item: newProducto
    }).promise();

    return {
        status: 200,
        body: JSON.stringify(newProducto)
    }

};

module.exports = {
    addProduct
}