// ⚠️ MIGRATION ALREADY COMPLETED
// This route was used to migrate articles from lib/articles.js to PostgreSQL.
// The migration has been successfully executed and articles.js has been removed.
// Keeping this file as a historical reference only.
// To re-run a migration, create a new script that reads from the DB or a JSON file.

export async function GET() {
  return Response.json({
    success: false,
    message: 'Migration already completed. articles.js has been removed. This route is kept as reference only.'
  });
}
