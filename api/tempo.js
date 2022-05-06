async function tempo(request,response) {
    const  apiSecrret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();
    
    const subscribersResponse = await fetch("");
    const subscribersResponsejson = await subscribersResponse.json();
    const inscritos = subscribersResponsejson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTSting()
        inscritos: inscritos
    })
}

export default tempo;
