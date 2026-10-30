import { MongoClient, type Db } from 'mongodb';

// Cliente de Mongo reutilizado entre invocaciones (en serverless evita abrir una conexión por pedido).
declare global {
  // eslint-disable-next-line no-var
  var _rcMongoClient: Promise<MongoClient> | undefined;
}

export const getDb = async (nombreBase?: string): Promise<Db> => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Falta la variable de entorno MONGODB_URI');
  if (!global._rcMongoClient) {
    global._rcMongoClient = new MongoClient(uri, { maxPoolSize: 5, serverSelectionTimeoutMS: 7000 }).connect();
  }
  const client = await global._rcMongoClient;
  return client.db(nombreBase || process.env.HALLOWEEN_VOTOS_DB || 'rc-halloween');
};
