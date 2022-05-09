import { ServiceAccount } from 'firebase-admin';
import * as admin from 'firebase-admin';

const serviceAccount = {
  type: 'service_account',
  project_id: 'informacoeslancamentosspacex',
  private_key_id: process.env.KEY_ID,
  private_key: process.env.KEY_SECRET,
  client_email: 'informacoeslancamentosspacex@appspot.gserviceaccount.com',
  client_id: '117838830393450967254',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/informacoeslancamentosspacex%40appspot.gserviceaccount.com',
};

export abstract class BancoBase {
  private _app: admin.app.App;
  protected database: admin.database.Database;

  constructor() {
    this._app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
      databaseURL:
        'https://informacoeslancamentosspacex-default-rtdb.firebaseio.com',
    });

    this.database = this._app.database(
      'https://informacoeslancamentosspacex-default-rtdb.firebaseio.com/'
    );
  }
}
