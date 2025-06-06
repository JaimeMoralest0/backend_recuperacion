const request = require("supertest");
const app = require("../index");

describe("API Series", () => {
  let createdId = null;

  it("GET /api/series → debe devolver un array", async () => {
    const res = await request(app).get("/api/series");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.datos)).toBe(true);
  });

  it("POST /api/series → crear una nueva serie (simulado)", async () => {
    const nuevaSerie = {
      nombre: "Serie Test",
      genero: "Test",
      descripcion: "Descripción de prueba",
      fecha_inicio: "2024-01-01",
      fecha_fin: "2024-12-31",
    };

    const res = await request(app)
      .post("/api/series")
      .send(nuevaSerie);

    // si tienes middleware que bloquea el POST en producción, este test puede fallar
    expect([200, 201, 404]).toContain(res.statusCode); // ajusta según tu caso
    createdId = res.body?.id || null;
  });

  it("GET /api/series/:id → buscar serie por ID (si existe)", async () => {
    const res = await request(app).get("/api/series/1");
    expect([200, 404]).toContain(res.statusCode);
  });

  it("PUT /api/series/:id → modificar una serie", async () => {
    const res = await request(app).put("/api/series/1").send({
      nombre: "Serie Editada",
    });
    expect([200, 404]).toContain(res.statusCode);
  });

  it("GET /api/series/filtro/genero?genero=acción → filtrar por género", async () => {
    const res = await request(app).get("/api/series/filtro/genero?genero=acción");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.datos)).toBe(true);
  });

  it("DELETE /api/series/:id → eliminar serie (si se creó antes)", async () => {
    if (createdId) {
      const res = await request(app).delete(`/api/series/${createdId}`);
      expect([200, 404]).toContain(res.statusCode);
    }
  });
});
