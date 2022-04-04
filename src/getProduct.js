const AWS = require('aws-sdk')


const getProduct = async(event) =>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.get({

        TableName: "ProductoTable",
        Key: {
            id
        },
    }).promise();

    const producto = result.Item;
    console.log(result);

    return {
        status: 200,
        body: {producto},
    };
};

module.exports = {
    getProduct,
}