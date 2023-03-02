require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');

async function main(){
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
    const encrpytedJsonKey = await wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD,process.env.PRIVATE_KEY);
    fs.writeFileSync("./bin/.encryptedKey.json", encrpytedJsonKey);

}

main().then(() => process.exit(0)).catch((err)=>{
    console.log(err);
    process.exit(1);
});