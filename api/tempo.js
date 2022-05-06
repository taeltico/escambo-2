function tempo(request,response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTSting()
    })
}

export default tempo;
