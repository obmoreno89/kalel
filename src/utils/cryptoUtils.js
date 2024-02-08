// cryptoUtils.js

import CryptoJS from 'crypto-js';

const encryptionKey = 'clave_de_encriptacion_secreta';

export const encryptData = (data) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    encryptionKey
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
  const decryptedData = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
  return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
};
