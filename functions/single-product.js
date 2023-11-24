require('dotenv').config();
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_BASE_ID)
    .table(process.env.AIRTABLE_TABLE_NAME)

exports.handler = async (event, context, cb) => {
    const { id } = event.queryStringParameters
    if (id) {
        try {
            let product = await airtable.retrieve(id)
            if (product.error) {
                return {
                    statusCode: 404,
                    body: `No product with id:${id}`,
                }
            }
            product = { id: product.id, ...product.fields }
            console.log(product)
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'server error'
            }
        }
    }
    return {
        statusCode: 400,
        body: 'please provide product id'
    }
}