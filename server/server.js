require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require("./db");
const app = express();
app.use(cors());
app.use(express.json());
//middleware morgan
//app.use(morgan("tiny"));
//middleware normal
/*
app.use((req,res,next)=>{
    console.log("middleware");
    next();
});*/

//movileApp port reciver
app.post('/api/data', async (req, res) => {
  try {
    const { dataField1, dataField2 } = req.body; // reemplaza dataField1, dataField2 con tus campos de datos reales

    const response = await pool.query('INSERT INTO your_table_name (column1, column2) VALUES ($1, $2)', [dataField1, dataField2]); // reemplaza column1, column2 y your_table_name con tus nombres de columnas y tablas reales
    res.json({
      status: "success",
      message: "Datos insertados exitosamente",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Error al insertar los datos",
    });
  }
});





//GET all segments FUNCTION

app.get("/api/v1/segmentos", async (req, res) => {
    try {
        const results = await db.query("SELECT * from segmento");
        console.log(results);
        res.status(200).json({
            status: "succes",
            results: results.rows.length,
            data: {
                segmentos: results.rows,
            }
        })
    }
    catch (err) {
        res.status(505).json({
            status: "error, not found",
        })
    }
});
//GET all segments and indices FUNCTION

app.get("/api/v1/segmentos_full", async (req, res) => {
  try {
    const query = `
      SELECT 
        segmento.*, 
        coalesce(
          (SELECT json_agg(indicessegmento) FROM indicessegmento WHERE indicessegmento.id_segmento_seleccionado = segmento.id_segmento), 
          '[]'
        ) AS indices,
        coalesce(
          (SELECT json_agg(geometria) FROM geometria WHERE geometria.id_segmento_seleccionado = segmento.id_segmento), 
          '[]'
        ) AS geometrias
      FROM 
        segmento
      GROUP BY 
        segmento.id_segmento;
    `;

    const results = await db.query(query);
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        segmentos: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the segments with their related indices and geometries.",
    });
  }
});



//GET all segments FUNCTION and geometry

app.get("/api/v1/seg_geo", async (req, res) => {
  try {
      // Esta consulta recupera todos los segmentos junto con sus geometrías relacionadas.
      const queryStr = `
          SELECT 
              segmento.id_segmento, 
              segmento.nombre, 
              segmento.tipo, 
              segmento.latitud_origen, 
              segmento.latitud_destino, 
              segmento.longitud_origen, 
              segmento.longitud_destino, 
              segmento.cantidad_muestras, 
              segmento.ultima_fecha_muestra, 
              segmento.longitud, 
              json_agg(geometria.*) as geometrias
          FROM 
              segmento
          LEFT JOIN 
              geometria ON geometria.id_segmento_seleccionado = segmento.id_segmento
          GROUP BY 
              segmento.id_segmento`;

      const results = await db.query(queryStr);

      res.status(200).json({
          status: "success",
          results: results.rows.length,
          data: {
              segmentos: results.rows,
          }
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).json({status: "error", message: "Hubo un error al procesar su solicitud"});
  }
});
//GET all segments FUNCTION and geometry and holes

app.get("/api/v1/seg_geo_huecos", async (req, res) => {
  try {
    // Esta consulta recupera todos los segmentos junto con sus geometrías y huecos relacionados.
    const queryStr = `
        SELECT 
            segmento.id_segmento, 
            segmento.nombre, 
            segmento.tipo, 
            segmento.latitud_origen, 
            segmento.latitud_destino, 
            segmento.longitud_origen, 
            segmento.longitud_destino, 
            segmento.cantidad_muestras, 
            segmento.ultima_fecha_muestra, 
            segmento.longitud, 
            json_agg(json_build_object('id_geometria', geometria.id_geometria, 'latitud', geometria.latitud, 'longitud', geometria.longitud)) FILTER (WHERE geometria.id_geometria IS NOT NULL) as geometrias,
            json_agg(json_build_object('id_hueco_segmento', huecoSegmento.id_hueco_segmento, 'latitud', huecoSegmento.latitud, 'longitud', huecoSegmento.longitud, 'magnitud', huecoSegmento.magnitud)) FILTER (WHERE huecoSegmento.id_hueco_segmento IS NOT NULL) as huecos
        FROM 
            segmento
        LEFT JOIN 
            geometria ON geometria.id_segmento_seleccionado = segmento.id_segmento
        LEFT JOIN 
            huecoSegmento ON huecoSegmento.id_segmento_seleccionado = segmento.id_segmento
        GROUP BY 
            segmento.id_segmento`;

    const results = await db.query(queryStr);

    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            segmentos: results.rows,
        }
    });
} catch (err) {
    console.error(err.message);
    res.status(500).json({status: "error", message: "Hubo un error al procesar su solicitud"});
}
});


//GET one segment FUNCTION -proteccion contra sqlinyect atacks
app.get("/api/v1/segmento/:id", async (req, res) => {
    try {
        const results = await db.query("SELECT * from segmento where id_segmento= $1",[req.params.id]);
       // console.log(results.rows[0]);
        res.status(200).json({
            status: "succes",
            results: results.rows.length,
            data: {
                segmentos: results.rows,
            }
        })
    }
    catch (err) {
        res.status(505).json({
            status: "error, not found",
        })
    }
});
//GET one segment with samples,holes and indices
app.get("/api/v1/segmento_muestras/:id", async (req, res) => {
  try {
      const { id } = req.params;

      // Primero, obtén el segmento específico.
      const segmento = await db.query("SELECT * FROM segmento WHERE id_segmento = $1", [id]);

      // Si no hay segmento, envía la respuesta y termina la función aquí.
      if (segmento.rows.length === 0) {
          return res.status(404).json({
              status: "error",
              message: "Segmento no encontrado"
          });
      }

      // Luego, obtén las muestras para este segmento.
      const muestras = await db.query("SELECT * FROM muestra WHERE id_segmento_seleccionado = $1", [id]);

      // Para cada muestra, obtén los huecos e índices relacionados.
      for (const muestra of muestras.rows) {
          // Obtén los huecos para la muestra
          const huecos = await db.query("SELECT id_hueco_muestra, latitud, longitud, magnitud FROM huecoMuestra WHERE id_muestra_seleccionada = $1", [muestra.id_muestra]);

          // Obtén los índices para la muestra
          const indices = await db.query("SELECT * FROM indicesMuestra WHERE id_muestra_seleccionada = $1", [muestra.id_muestra]);

          // Añade los huecos e índices a la muestra correspondiente.
          muestra.huecos = huecos.rows;
          muestra.indices = indices.rows;
      }

      // Construye la respuesta final y envíala.
      const respuesta = {
          status: "success",
          data: {
              segmento: segmento.rows[0],
              muestras: muestras.rows
          }
      };

      // Envía la respuesta final aquí y asegúrate de no enviar nada después.
      res.status(200).json(respuesta);
  } catch (err) {
      console.error(err);

      // Solo envía una respuesta de error si no se ha enviado una respuesta antes.
      if (!res.headersSent) {
          res.status(500).json({
              status: "error",
              message: "Ocurrió un error al procesar la solicitud."
          });
      }
  }
});

//obtein ALL INFROMATION OF A SEGMENT
const obtenerDatosSegmentoPorNombre = async (nombreSegmento) => {
  try {
    const segmento = await db.query("SELECT * FROM segmento WHERE nombre = $1", [nombreSegmento]);

    if (segmento.rows.length === 0) {
      return null;
    }

    const idSegmento = segmento.rows[0].id_segmento;

    // Código para obtener índices y huecos del segmento...
    const indicesSegmento = await db.query("SELECT * FROM indicesSegmento WHERE id_segmento_seleccionado = $1", [idSegmento]);
    const huecosSegmento = await db.query("SELECT * FROM huecoSegmento WHERE id_segmento_seleccionado = $1", [idSegmento]);

    // Código para obtener muestras y detalles de cada muestra...
    const muestras = await db.query("SELECT * FROM muestra WHERE id_segmento_seleccionado = $1", [idSegmento]);
    for (const muestra of muestras.rows) {
      const huecosMuestra = await db.query("SELECT * FROM huecoMuestra WHERE id_muestra_seleccionada = $1", [muestra.id_muestra]);
      const indicesMuestra = await db.query("SELECT * FROM indicesMuestra WHERE id_muestra_seleccionada = $1", [muestra.id_muestra]);

      muestra.huecos = huecosMuestra.rows;
      muestra.indices = indicesMuestra.rows;
    }

    // Armar la estructura de datos con el segmento y sus muestras
    return {
      segmento: segmento.rows[0],
      indices: indicesSegmento.rows,
      huecos: huecosSegmento.rows,
      muestras: muestras.rows,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

//obtain all information of 5 segments
app.get("/api/v1/segmentos_por_nombre", async (req, res) => {
  try {
    // Aquí asumimos que los nombres se pasan como una cadena de consulta en la URL, p.ej., ?nombres=segmento1,segmento2
    const nombresSegmentos = req.query.nombres.split(','); // separar los nombres por comas para obtener un array

    const datosSegmentos = await Promise.all(nombresSegmentos.map(nombre => obtenerDatosSegmentoPorNombre(nombre.trim()))); // trim() es para asegurar eliminar espacios en blanco

    const segmentosEncontrados = datosSegmentos.filter(segmento => segmento !== null);

    res.status(200).json({
      status: "success",
      data: {
        segmentos: segmentosEncontrados,
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Ocurrió un error al procesar la solicitud."
    });
  }
});



//CREATE  one segment 
app.post("/api/v1/segmento", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "INSERT INTO segmento (id_segmento,nombre,tipo,latitud_origen,latitud_destino,"+
            "longitud_origen,longitud_destino,cantidad_muestras,ultima_fecha_muestra,longitud)"+
            "values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *",
        [req.body.id_segmento, req.body.nombre, req.body.tipo, 
            req.body.latitud_origen,req.body.latitud_destino,req.body.longitud_origen,
            req.body.longitud_destino,req.body.cantidad_muestras,req.body.ultima_fecha_muestra,
            req.body.longitud]
      );
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          rsegmento: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });
//CREATE  one sample
  app.post("/api/v1/muestra", async (req, res) => {
    console.log(req.body);
    try {
      const results = await db.query(
        "INSERT INTO muestra (tipo_dispositivo,identificador_dispositivo,fecha_muestra,id_segmento_seleccionado) values($1,$2,$3,$4)returning *",
        [req.body.tipo_dispositivo, req.body.identificador_dispositivo,req.body.fecha_muestra,req.body.id_segmento_seleccionado]
      );
      console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          muestra: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
  });


  //UPDATE one segment
  app.put("/api/v1/segmento/:id", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "UPDATE segmento SET nombre= $1,tipo=$2,latitud_origen=$3 WHERE id_segmento= $4",
        [req.body.nombre, req.body.tipo, req.body.latitud_origen, req.params.id]);
      //console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          segmento: results,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

  //DELETE one segment
  app.delete("/api/v1/segmento/:id", async (req, res) => {
    console.log(req.body);
  
    try {
      const results = await db.query(
        "DELETE from segmento WHERE id_segmento= $1",
        [req.params.id]);
      //console.log(results);
      res.status(201).json({
        status: "succes",
        data: {
          segmento: results,
        },
      });
    } catch (err) {
      console.log(err);
    }
  });




const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`servidor activo en el puerto ${port}`);

});
