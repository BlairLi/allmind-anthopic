export async function GET() {
  const envVars = {
    projectId: process.env.GOOGLE_CLOUD_PROJECT,
    bigtableInstance: process.env.BIGTABLE_INSTANCE,
    credentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    // Don't return the actual credentials content for security
    hasCredentials: !!process.env.GOOGLE_CREDENTIALS_JSON,
  };

  try {
    // Try to read the credentials file
    const fs = require('fs');
    const credentialsFileExists = fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    return new Response(JSON.stringify({
      envVars,
      credentialsFile: {
        path: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        exists: credentialsFileExists
      }
    }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Error checking environment',
      message: error.message,
      envVars
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 