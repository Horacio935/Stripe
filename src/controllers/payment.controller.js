import Stripe from 'stripe'

//AQUI deberia ir su clave secreta de stripe
const stripe = new Stripe('sk_test_51Q9HPsB93apspbx9AA2EX09UQmgIOAihaA7IGZ4I4EyZh9ya4UqouiaiYTJLtpBLmFq0XdSed99PW8dbIdPwRChd00OQqPtAZ1')

export const createSession = async (req,res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data:{
                    product_data:{
                        name: 'Juguete Fredy Fazbear',
                        description: 'Peluche de oso freddy'
                    },
                    currency:'usd',
                    unit_amount:93800 //esto es 300.00, existe la opcion 'unit_amount_decimal' pero aca no la use
                },
                quantity: 3
            },
            {
                price_data:{
                    product_data:{
                        name: 'Juguete Pokemon',
                        description: 'Peluche squirtle'
                    },
                    currency:'usd',
                    unit_amount:12300 
                },
                quantity: 2
            }
        ],

        mode: 'payment',
        success_url: 'http://localhost:4000/success',
        cancel_url: 'http://localhost:4000/cancel'
    })
    return res.json(session)
}