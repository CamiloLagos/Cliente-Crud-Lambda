const AWS = require('aws-sdk')

const updateProduct = async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const {
        nombre,
        descripcion,
        sku,
        codigo_barras,
        precio,
    } = JSON.parse(event.body);

    const result = await dynamodb.update({
        TableName: 'ProductoTable',
        Key: { id },
        UpdateExpression: 'SET nombre = :nombre, descripcion = :descripcion, sku = :sku, codigo_barras = :codigo_barras, precio = :precio',
        ExpressionAttributeValues: {
            ":nombre": nombre,
            ":descripcion": descripcion,
            ":sku": sku,
            ":codigo_barras": codigo_barras,
            ":precio": precio
        },
        ReturnValues: 'ALL_NEW'
    }).promise();

    return {
        status: 200,
        body:JSON.stringify({
            message: "Producto actualizado satisfactoriamente!"
        })
    }
};

module.exports = {
    updateProduct
}