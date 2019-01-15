import { Component, OnInit, HostListener,  } from '@angular/core';

import { ContractsService } from '../contract.service';
declare var require: any;
import * as openpgp from 'openpgp';
import EthereumEncryption from 'ethereum-encryption';
const ecies = require("eth-ecies");
// var gpg = require('./gpg')

import EthCrypto from 'eth-crypto';
import { Key } from 'readline';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public balance:number
  public sendAddr:string;
  public token:string;
  public tokenCount:string;
  public textArea1:string;
  public textArea2:string;
  constructor(public cs:ContractsService) { 
    // 
    }
  ngOnInit() {
  }

  getBalance(){
    this.cs.getUserBalance().then(balance => {this.balance = balance;
      console.log(this.balance);
      });
    
    // this.web3.eth.getBalance(window.web3.currentProvider.selectedAddress, (err, resp) => {
    //   console.log(err);
    //   console.log(this.web3.fromWei(resp, "ether") + " ETH");
    //   console.log('Current Provider:',window.web3.currentProvider.selectedAddress);
    // });
  }

  getAccounts(){
    this.cs.getAccount().then(accounts => {
      console.log(accounts);
      
    })
    // console.log(this.web3.eth.accounts);
    // window.web3.eth.getAccounts(function(err, res){if(err){console.log(err)}else{console.log(res)}})

    // window.web3.eth.getAccounts((err,accounts) => {
    //   console.log(accounts) 
    // })
  }

  getName(){
    this.cs.getName().then(
      name => {
        console.log(name);
      }
    )
  }

  transfer(){
    
  }

  showSymbol(){
    this.cs.getSymbol().then(
      symbol => {
        console.log(symbol);
      }
    )
    // console.log(this.web3.version.api);
    // this.contract = this.web3.eth.contract(this.abi, this.address)

    // this.contract.methods.name().call((err, result) => {console.log(result);})

  }

  sendToken(){
    
    // let payload = {
    //   address : this.sendAddr,
    //   token : parseInt(this.token)
    // }
    // console.log(payload);

    this.cs.transfer(this.sendAddr, parseInt(this.token)).then(
      data => {
        console.log(data);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )
    
  }

  sendEther(){
    this.cs.sendEther(this.sendAddr, parseInt(this.token))
  }

  sendContractToken(){
    this.cs.sendContractToken(this.sendAddr, parseInt(this.token))
  }

  // sendRequest(){
  //   console.log(this.tokenCount);
    

  //   const pubkey = `publicKey`;
  //   const privkey = `privateKey`;

  //   const passPhrase = `password`;
  //   this.encryptdecryptFunction(pubkey,privkey,passPhrase)
    
  // }

  public async encryptDecryptFunction(pubkey,passphrase){
    openpgp.initWorker({ path:'node_modules/openpgp/dist/openpgp.worker.min.js' })

    const privkey = [`-----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: OpenPGP.js v4.4.3
    Comment: https://openpgpjs.org
    
    xjMEXDwiShYJKwYBBAHaRw8BAQdAsrKpK4m6y9GkNzQV5ONasQyejhrZTT+a
    7hXqogvNiPPNG0pvbiBTbWl0aCA8am9uQGV4YW1wbGUuY29tPsJ3BBAWCgAf
    BQJcPCJKBgsJBwgDAgQVCAoCAxYCAQIZAQIbAwIeAQAKCRCjyv5/7gTagYZ8
    APoD4rSiN/GPDj1sgD8f8j1s1gei+cjxgIXL6xUDbP7qPAD8CRRHOcqXWidf
    OcHc3y6kHevESQF6UOVOpodfSg/pUQvOOARcPCJKEgorBgEEAZdVAQUBAQdA
    kXww5EC+dcLQkPr2y8hssgHD1HadhSJ70EIQahlVnDMDAQgHwmEEGBYIAAkF
    Alw8IkoCGwwACgkQo8r+f+4E2oHqDAEA48a+Z9FFuRZTS4iVfOfJiS7qcudH
    Zhe7VkiODfJlch4BAJ89TzG2/M69FSeDYBZTXSmvrAY9oPglXkG5VQwnFL0L
    =CPci
    -----END PGP PUBLIC KEY BLOCK-----`].join('\n')
    let javascriptPrivateKeys =await openpgp.key.readArmored(privkey);
    console.log(javascriptPrivateKeys);
    let  javascriptUnencryptedPrivateKeysPromises = javascriptPrivateKeys.keys.map(javascriptPrivateKey => {
      return javascriptPrivateKey.decrypt(passphrase);
    });

    console.log(javascriptUnencryptedPrivateKeysPromises);
    

    //  Promise.all(javascriptUnencryptedPrivateKeysPromises).then( () => {
    //   return openpgp.encrypt({
    //     armor: true,
    //     compression: openpgp.enums.compression.zlib,
    //     data: 'A message encrypted by javascript',
    //     privateKeys: javascriptPrivateKeys.keys,
    //     publicKeys: (await openpgp.key.readArmored(privkey)).keys
    //   });
    // }).then(encryptedMessage => {
    //   console.info(encryptedMessage.data);
    // });

    // const privKeyObj = (await openpgp.key.readArmored(privkey)).keys[0]
    // await javascriptPrivateKeys.decrypt(passphrase)
    // console.log(javascriptUnencryptedPrivateKeysPromises);
    

    // const options = {
    //     message: openpgp.message.fromText('Hello, World!'),       // input as Message object
    //     publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
    //     privateKeys: [javascriptPrivateKeys]                                 // for signing (optional)
    // }
    // console.log(options);
    

    // openpgp.encrypt(options).then(ciphertext => {
    //     var encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
    //     return encrypted
    // })
    // .then(async encrypted => {
    //     const options = {
    //         message: await openpgp.message.readArmored(encrypted),    // parse armored message
    //         publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
    //         privateKeys: [javascriptPrivateKeys]                                 // for decryption
    //     }

    //     openpgp.decrypt(options).then(plaintext => {
    //         console.log(plaintext.data)
    //         return plaintext.data // 'Hello, World!'
    //     })

    // })
}



  generateKeys(){
    let keyOptions = {
      numBits: 2048,
      passphrase: "secret-passphrase"
      //you would get the passphrase from an input field normally
  };
  let user:any = {};
  openpgp.generateKey(keyOptions)
      .then((key) => {
          user.privateKey = key.privateKeyArmored;
          user.publicKey = key.publicKeyArmored;
      });
  }

  // encryptMessage(){

  //   let Bob, John:any={};
  //   const email = {
  //     subject: "Hello John, I'm Bob!",
  //     body: "Secret message"
  // }
  // const options = {
  //     data: JSON.stringify(email),
  //     message:'',
  //     // Here we use John's public key for encryption
  //     publicKeys:  openpgp.key.readArmored(John.publicKey).keys
  // };
  // let messageForJohn = "";
  // openpgp.encrypt(options)
  //     .then((cipherText)=>{
  //          messageForJohn = cipherText.data;
  //     });
  // }

  getUser(){
//     const privateKey = EthereumEncryption.createPrivateKey();
//     console.log(privateKey);


    this.cs.getAccount().then(
      data => {
        console.log(data);
        
      }
    )
    
    
    const publicKey = EthereumEncryption.publicKeyFromPrivateKey(
      '68F88A45A7E3C94FFFA8A56F2F6E1C32189E7EC27520F45606501B67C5033B10'
  )
  console.log('Public Key:',publicKey);

  let object = {data:'foobar'}

  const encrypted = EthereumEncryption.encryptWithPublicKey(
    publicKey, // publicKey
    JSON.stringify(object) // data
);
console.log('Encrypted:',encrypted);

    // let encrypted = '0333eec583d04a55ce0aba9dbfb04035e8c6de4f501ecc9b26c08fa501a5ec1507704fe7439838e7592fc4a8ee43edfc4f9c81d61c5e693d0fb2ccdb68c1fc3263219e0e471e2d62a51ba5f870d6f96b80d8544a594688c3f1470ab2250978691d43969bc4c4c953c5cab1f1e070c965d8' 
  // const message = EthereumEncryption.decryptWithPrivateKey(
  //   '68F88A45A7E3C94FFFA8A56F2F6E1C32189E7EC27520F45606501B67C5033B10', // privateKey
  //   encrypted // encrypted-data
  // );

  //   console.log('Decrypted:',message);
  //   console.log('Parsed Data:',JSON.parse(message));
    
    
    


//     const publicKey = EthCrypto.publicKeyByPrivateKey(
//       '0x68F88A45A7E3C94FFFA8A56F2F6E1C32189E7EC27520F45606501B67C5033B10'
//   );

//   const encrypted =  EthCrypto.encryptWithPublicKey(
//     '0x5C6a5121d259DF9Eca31FAf034A54FFa25db2834',
//     'foobar' 
// );
//   console.log('Public Key:',publicKey);
//   console.log('Encrypted:',encrypted);
  
  
  }

  public publicKey = 'e0d262b939cd0267cfbe3f004e2863d41d1f631ce33701a8920ba73925189f5d15be92cea3c58987aa47ca70216182ba6bd89026fc15edfe2092a66f59a14003';
  public privateKey = '55bb4cb6407303de8e4c5a635021d3db12cb537305eeb6401612ce14b35d6690';
  public data = '{foo:"bar",baz:42}';
  public someVariable:any
  encryptUsingEceis(){
    // let account:string;
    //  this.cs.getAccount().then(
    //    data => {
    //      console.log(data);
    //      account = data;
    //      let userPublicKey = new Buffer(account, 'hex');
    //      let bufferData = new Buffer(this.data);
     
    //      let encryptedData = ecies.encrypt(userPublicKey, bufferData);
     
    //      console.log('Encrypted Data:',encryptedData);
    //      console.log('TO String:',encryptedData.toString('base64'));
     
    //    }
    //  )
    // console.log();
    
   

    // let userPrivateKey = new Buffer(this.privateKey, 'hex');
    // let bufferEncryptedData = new Buffer(encryptedData, 'base64');

    // let decryptedData = ecies.decrypt(userPrivateKey, bufferEncryptedData);
    // console.log('Decrypted Data:',decryptedData);
    // console.log('DEcrypt to string:',decryptedData.toString('utf8'));
    
    var options = {
      userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
      numBits: 4096,                                            // RSA key size
      passphrase: 'super long and hard to guess secret'         // protects the private key
  };

    this.someVariable = openpgp.generateKey(options).then(function(key) {
      var privkey = key.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
      console.log('Private Key:',privkey);
      
      var pubkey = key.publicKeyArmored; 
      console.log('Public Key',pubkey);  // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
      var revocationCertificate = key.revocationCertificate; // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
      console.log('Certi:',revocationCertificate);
  });

  }

  show(){
    console.log(this.someVariable);
    
  }

  public async singlePublicKey(){

    openpgp.initWorker({ path:'node_modules/openpgp/dist/openpgp.worker.min.js' });

    const privkey = this.textArea1.replace(/\r/, "").split("\n").join('\n');
    const pubkey = this.textArea2.replace(/\r/, "").split("\n").join('\n');
    

    const passphrase = `
    super long and hard to guess secret
    `
    const privKeyObj = (await openpgp.key.readArmored(privkey)).keys[0];
    // const { workers } = openpgp.getWorker();
    console.log(privKeyObj);
    
    await privKeyObj.decrypt('super long and hard to guess secret');
    console.log(privKeyObj);
    
    var dataToEncrypt ={
      data:'hello!!',
      id:1
    }

    const options = {
        message: openpgp.message.fromText(JSON.stringify(dataToEncrypt)),       // input as Message object
        publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for encryption
        privateKeys: [privKeyObj]                                 // for signing (optional)
    }
      console.log(options);
      

    openpgp.encrypt(options).then(ciphertext => {
        var encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        console.log(encrypted);
        
        return encrypted
    })
    .then(async encrypted => {
        const options = {
            message: await openpgp.message.readArmored(encrypted),    // parse armored message
            publicKeys: (await openpgp.key.readArmored(pubkey)).keys, // for verification (optional)
            privateKeys: [privKeyObj]                                 // for decryption
        }

        openpgp.decrypt(options).then(plaintext => {
            console.log(JSON.parse(plaintext.data.toString()))
            return plaintext.data // 'Hello, World!'
        })

    })
  }

  public async multiplePublicKey(){
    openpgp.initWorker({ path:'node_modules/openpgp/dist/openpgp.worker.min.js' });

    const privkey = this.textArea1.replace(/\r/, "").split("\n").join('\n');
    var pubkey:any = [this.textArea2.replace(/\r/, "").split("\n").join('\n'),this.textArea2.replace(/\r/, "").split("\n").join('\n')];
    
    const passphrase = `
    super long and hard to guess secret
    `
    const privKeyObj = (await openpgp.key.readArmored(privkey)).keys[0];
    // const { workers } = openpgp.getWorker();
    console.log(privKeyObj);
    
    await privKeyObj.decrypt('super long and hard to guess secret');
    console.log(privKeyObj);

    pubkey = pubkey.map(async (key) => {
    	return (await openpgp.key.readArmored(key)).keys[0]
    });
    
    var dataToEncrypt ={
      data:'hello!!',
      id:1
    }

    const options = {
        message: openpgp.message.fromText(JSON.stringify(dataToEncrypt)),       // input as Message object
        publicKeys: pubkey, // for encryption
        privateKeys: [privKeyObj]                                 // for signing (optional)
    }
      console.log(options);
      
    openpgp.encrypt(options).then(ciphertext => {
        var encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        console.log(encrypted);
        
        return encrypted
    })
  }


}
