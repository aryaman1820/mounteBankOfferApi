import { create } from 'mountebank';
import { port as Port } from './settings';
import { addService } from './offer-service';

const mbServerInstance = create({
    port: Port,
    pidfile:'../mb.pid',
    logfile:'../mb.log',
    protofile:'../protofile.json',
    ipWhitelist:['*']
});

mbServerInstance.then(function(){
    addService();
})