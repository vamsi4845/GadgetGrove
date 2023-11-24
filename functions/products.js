const dotenv = require('dotenv');
dotenv.config();
const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_BASE_ID)
    .table(process.env.AIRTABLE_TABLE_NAME)
exports.handler = async (event, context, cb) => {
    try {
        const response = await airtable.list({ maxRecords: 50 })
        const products = response.records.map((product) => {
            const { id, fields } = product
            const {
                name,
                featured,
                price,
                colors,
                company,
                description,
                category,
                images,
                stock,
                shipping
            } = fields
            const { url } = images[0]
            return {
                id, name,
                featured,
                price,
                colors,
                company,
                description,
                category,
                image: url,
                stock,
                shipping
            }
        })
        return {
            statusCode: 200,
            body: JSON.stringify(products)
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: 'There was an error',
        }

    }
}