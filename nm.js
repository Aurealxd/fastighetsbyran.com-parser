var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true });

nightmare
    .goto('https://www.fastighetsbyran.com/sv/spanien/objekt/?objektID=1952726')
    .wait('button.h-8')
    .click('button.h-8')
    .click('div.flex.items-center.w-full.block.max-w-full.cursor-pointer.px-4 img')
    .wait('span.leading-tight.text-fb-brown-text.border-fb-pink.border-b-2')
    .evaluate(function () {
        var name = document.querySelector('div.text-left.text-xl').innerText;
        var phone = document.querySelector('span.leading-tight.text-fb-brown-text.border-fb-pink.border-b-2').innerText;
        var picture = document.querySelector('div.maeklarkort-gradient picture.block source.block').srcset;
        var parsedData = {
            agentName: name,
            agentPhoneNumber: phone,
            agentPictureURL: picture
        };
        console.log(parsedData);
        return parsedData;
    })
    .end()
    .then(function (result) {
        console.log('Agent Information:', result);
    })
    .catch(function (error) {
        console.error('Search for agent phone number failed:', error);
    });