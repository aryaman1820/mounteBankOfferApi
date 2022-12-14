const mbHelper = require('./mountebank-helper').default;
const settings = require('./settings');

function addService() {
    const response = {message : "Hello World"}

    const stubs =[
    {
        predicates : [{
            equals : {
                method:"GET",
                "path": "/"
            }
        }],
        responses : [
            {
                is : {
                    statusCode : 200,
                    headers :{
                        "Content-Type": "application/json"
                    },
                    body : JSON.stringify(response)
                }
            }
        ]
    }
    ];

    const imposter = {
        port : settings.offer_api_port,
        protocol : 'http',
        stubs : stubs
    };
    return mbHelper.postImposter(imposter)
}

module.exports = {addService};