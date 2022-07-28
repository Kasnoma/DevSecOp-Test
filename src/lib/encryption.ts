import * as crypto from "crypto";

export default class Manager {
  encrypt: (e: any) => void;
  decrypt: (e: any) => void;

  constructor(key: string | undefined, vector: string | undefined) {
    this.encrypt = (e) => do_encrypt_data(e, key, vector);
    this.decrypt = (e) => do_decrypt_data(e, key, vector);
  }
}

function do_encrypt_data(t: any, r?: any, e?: any) {
  function a(t: any) {
    let a = crypto.createCipheriv("aes-256-cbc", r, e);
    return Buffer.concat([a.update(t), a.final()]).toString("base64");
  }

  if (Array.isArray(t)) {
    t.forEach((item, index) => {
      t[index] = do_encrypt_data(item);
    });
  } else if (typeof t === "object") {
    for (let key in t) {
      t.hasOwnProperty(key) && Array.isArray(t[key])
        ? (t[key] = do_encrypt_data(t[key]))
        : typeof t[key] === "object"
        ? (t[key] = do_encrypt_data(t[key]))
        : (t[key] = a(t[key].toString()));
    }
  } else t = a(t.toString());

  return t;
}

function do_decrypt_data(t: any, r?: any, e?: any) {
  function a(t: any) {
    if (typeof t === "string" && t.trim().length === 0) return t;

    try {
      let a = crypto.createDecipheriv("aes-256-cbc", r, e);

      return Buffer.concat([
        a.update(Buffer.from(t, "base64")),
        a.final(),
      ]).toString();
    } catch (e) {
      return t.toString();
    }
  }

  if (Array.isArray(t)) {
    t.forEach((item, index) => {
      t[index] = do_decrypt_data(item);
    });
  } else if (typeof t === "object") {
    for (let key in t) {
      t.hasOwnProperty(key) && Array.isArray(t[key])
        ? (t[key] = do_decrypt_data(t[key]))
        : typeof t[key] === "object"
        ? (t[key] = do_decrypt_data(t[key]))
        : (t[key] = a(t[key].toString()));
    }
  } else t = a(t.toString());
  return t;
}

