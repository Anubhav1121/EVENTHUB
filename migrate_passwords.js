const { db } = require('./backend/database');
const bcrypt = require('bcryptjs');

async function migratePasswords() {
    try {
        console.log('🔄 Starting password migration to bcrypt...');
        const [users] = await db.query('SELECT username, password FROM users');
        let migratedCount = 0;

        for (const user of users) {
            // Check if password is already hashed (bcrypt hashes start with $2a$, $2b$, or $2y$)
            if (!user.password.startsWith('$2a$') && 
                !user.password.startsWith('$2b$') && 
                !user.password.startsWith('$2y$')) {
                
                console.log(`   Hashing password for user: ${user.username}`);
                const hashed = await bcrypt.hash(user.password, 10);
                await db.query('UPDATE users SET password = ? WHERE username = ?', [hashed, user.username]);
                migratedCount++;
            }
        }

        console.log(`✅ Migration complete. Migrated ${migratedCount} users.`);
        process.exit(0);
    } catch (err) {
        console.error('❌ Migration failed:', err.message);
        process.exit(1);
    }
}

migratePasswords();
