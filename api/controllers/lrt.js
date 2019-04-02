const fetch = require('node-fetch');
const cheerio = require('cheerio')

module.exports.GET_LIVE_TV_SHOW_NAMES = (req, res,next)=>{

    fetch('https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija')
    .then(res => res.text())
    .then((body) => {
        const $ = cheerio.load(body);
        const onAir = [];

        $('.channel-item__title').map((i, element)=>{
            const tvShow = {
                showName : $(element).text()
            };
           onAir.push(tvShow);
        });

        res.status(200).json({
            onAir : onAir
        });
    });

};