import MySql from 'mysql';

const connection = MySql.createConnection({
    host: 'us-cdbr-iron-east-XX.cleardb.net',
    user: 'XXXXXXXXXXX',
    password: 'XXXXXX',
    database: 'heroku_XXXXXXXX'
});

export default async function DBConfig() {
    let conn, code;
    try {
        connection.query('SELECT * from member', function(err, rows, fields) {
            if(!err) console.log('The solution is: ', rows);
            else console.log('Error while performing Query.', err);
        });

        connection.end();
        console.log('Initialized');
        code = 0;
    } catch(err){
        code = 1;
    }
}