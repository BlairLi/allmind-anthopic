import { Bigtable } from '@google-cloud/bigtable';

export interface Application {
  name: string;
  email: string;
  position: string;
  timestamp?: string;
  id?: string;
  [key: string]: any;
}

// Initialize Bigtable with credentials
const bigtable = new Bigtable({
  projectId: process.env.GOOGLE_CLOUD_PROJECT || 'allmind-anthropic',
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS || './google-credentials.json',
});

const instance = bigtable.instance(process.env.BIGTABLE_INSTANCE || 'allmind-instance');
const table = instance.table('applications');

const COLUMN_FAMILY = 'cf1';

export async function initBigtable(): Promise<boolean> {
  try {
    const [exists] = await table.exists();
    if (!exists) {
      await table.create();
      const family = table.family(COLUMN_FAMILY);
      await family.create();
    }
    return true;
  } catch (error) {
    console.error('Error initializing Bigtable:', error);
    throw new Error('Failed to initialize Bigtable');
  }
}

export async function storeApplication(application: Application): Promise<string> {
  try {
    if (!application || typeof application !== 'object') {
      throw new Error('Invalid application data');
    }

    const timestamp = Date.now();
    const rowKey = `application_${timestamp}`;
    const row = table.row(rowKey);

    await row.save({
      [COLUMN_FAMILY]: {
        data: Buffer.from(JSON.stringify(application))
      }
    });

    return rowKey;
  } catch (error) {
    console.error('Error storing application:', error);
    throw new Error('Failed to store application');
  }
}

export async function getAllApplications(): Promise<Application[]> {
  try {
    const [rows] = await table.getRows();
    return rows.map(row => {
      const data = row.data[COLUMN_FAMILY].data[0].value;
      const parsedData = JSON.parse(data.toString());

      return {
        ...parsedData,
        id: row.id
      };
    });
  } catch (error) {
    console.error('Error retrieving applications:', error);
    throw new Error('Failed to retrieve applications');
  }
} 