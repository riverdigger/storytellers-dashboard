import sql from "mssql";

export default class Database {
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

    // title: "",
    // description: "",
    // schedule: "",
    // system: "",
    // gameMaster: "",
    // imageUrl: "",
    // startDate: new Date(),
    // maxPlayers: 0,
    request.input("title", sql.NVarChar(255), data.title);
    request.input("description", sql.NVarChar(255), data.description);
    request.input("schedule", sql.NVarChar(255), data.schedule);
    request.input("system", sql.NVarChar(255), data.system);
    request.input("imageUrl", sql.NVarChar(255), data.imageUrl);
    request.input("maxPlayers", sql.BigInt, data.maxPlayers);

    const result = await request.query(
      `INSERT INTO Game (title, description, schedule, system, imageUrl, maxPlayers) VALUES (@title, @description, @schedule, @system, @imageUrl, @maxPlayers)`
    );

    return result.rowsAffected[0];
  }

  async readAll() {
    await this.connect();
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM Game`);

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
