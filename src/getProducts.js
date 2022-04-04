const AWS = require('aws-sdk');

const getProducts = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: 'ProductoTable'
    }).promise();

    const productos = result.Items;

    return{
        status: 200,
        body: {
            productos
        }
    }
}

module.exports = {
    getProducts
}