const AWS = require('aws-sdk')


const deleteProduct = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    await dynamodb.delete({
        TableName: "ProductoTable",
        Key: {
            id,
        },
    }).promise();

    return {
        status: 200,
        body: {
            message: 'Producto Eliminado'
        }
    }
}

module.exports = {
    deleteProduct,
};

