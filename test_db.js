const mysql = require('mysql2/promise');
(async () => {
    try {
        const c = await mysql.createConnection({
            host: '127.0.0.1', port: 3306,
            user: 'root', password: 'root',
            database: 'college_event_db',
            connectTimeout: 5000
        });
        const [users] = await c.query('SELECT username, role, LEFT(password,20) as pw_start FROM users');
        console.log('USERS:', JSON.stringify(users, null, 2));
        const [tables] = await c.query('SHOW TABLES');
        console.log('TABLES:', JSON.stringify(tables));
        await c.end();
    } catch (e) {
        console.error('ERR:', e.code, e.message);
    }
})();
