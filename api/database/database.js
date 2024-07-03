var sql = require("mssql");

class Database {
  config = {};
  poolconnection = null;
  connected = false;

  constructor(config) {
    this.config = config;
    console.log(`Database: config: ${JSON.stringify(config)}`);
  }

  async connect() {
    try {
      console.log(`Database connecting...${this.connected}`);
      if (this.connected === false) {
        this.poolconnection = await sql.connect(this.config);
        this.connected = true;
        console.log("Database connection successful");
      } else {
        console.log("Database already connected");
      }
    } catch (error) {
      console.error(`Error connecting to database: ${JSON.stringify(error)}`);
    }
  }

  async disconnect() {
    try {
      this.poolconnection.close();
      console.log("Database connection closed");
    } catch (error) {
      console.error(`Error closing database connection: ${error}`);
    }
  }

  async executeQuery(query) {
    await this.connect();
    const request = this.poolconnection.request();
    const result = await request.query(query);

    return result.rowsAffected[0];
  }

  async create(data) {
    await this.connect();
    const request = this.poolconnection.request();

          // id int NOT NULL IDENTITY,
          // title varchar(255),
          // description varchar(255),
          // active bit,
          // hidden bit,
          // system varchar(255),
          // gmId int,
          // imageUrl varchar(255),
          // maxPlayers int,
          // schedule varchar(255),
          // timezone datetimeoffset,
          // startDate datetime,
          // nextDate datetime,
          // createdAt datetime,
          // updatedAt datetime,
    request.input("title", sql.NVarChar(255), data.title);
    request.input("description", sql.Text, data.description);
    request.input("active", sql.Bit, data.active);
    request.input("hidden", sql.Bit, data.hidden);
    request.input("system", sql.NVarChar(255), data.system);
    request.input("imageUrl", sql.NVarChar(255), data.imageUrl);
    request.input("maxPlayers", sql.BigInt, data.maxPlayers);
    request.input("schedule", sql.NVarChar(255), data.schedule);
    request.input("timezone", sql.DateTimeOffset, data.timezone);
    request.input("startDate", sql.DateTime, data.startDate);
    request.input("createdAt", sql.DateTime, new Date());
    request.input("updatedAt", sql.DateTime, new Date());

    try {
      const result = await request.query(
        `INSERT INTO Game (title, description, active, hidden, system, imageUrl, maxPlayers, schedule, timezone, startDate, createdAt, updatedAt) VALUES (@title, @description, @active, @hidden, @system, @imageUrl, @maxPlayers, @schedule, @timezone, @startDate, @createdAt, @updatedAt)`
      );
      return result.rowsAffected[0];
    } catch (err) {
      if (err !== undefined) {
        console.error(`Error creating game: ${err}`);      
      }
      return null;
    }
  }

  async readAll() {
    await this.connect();
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM Game`);

    return result.recordsets[0];
  }

  async query(query) {
    await this.connect();

    const request = this.poolconnection.request();

    request.input("title", sql.NVarChar(255), query.title);
    console.log(`query: ${JSON.stringify(query)}`);

    var queryString = `SELECT * FROM Game`;
    if (query.title !== undefined) {
      queryString += ` WHERE CHARINDEX(@title, title) > 0`;
    }
    const result = await request.query(queryString);

    return result.recordsets[0];
  }

  async read(id) {
    await this.connect();

    const request = this.poolconnection.request();
    const result = await request
      .input("id", sql.Int, +id)
      .query(`SELECT * FROM Game WHERE id = @id`);

    return result.recordset[0];
  }

  async update(id, data) {
    await this.connect();

    const request = this.poolconnection.request();

    request.input("id", sql.Int, +id);
    request.input("title", sql.NVarChar(255), data.title);
    request.input("description", sql.NVarChar(255), data.description);

    const result = await request.query(
      `UPDATE Game SET title=@title, description=@description WHERE id = @id`
    );

    return result.rowsAffected[0];
  }

  async delete(id) {
    await this.connect();

    const idAsNumber = Number(id);

    const request = this.poolconnection.request();
    const result = await request
      .input("id", sql.Int, idAsNumber)
      .query(`DELETE FROM Game WHERE id = @id`);

    return result.rowsAffected[0];
  }
}

module.exports = Database;
