import { ExampleInterface } from "~/interfaces/example";
import { postgresClient } from "../utils";
import { H3Event } from "h3";

const { client } = postgresClient();

export const searchAll = async () => {
  const resultado = await client.query(
    "SELECT * FROM videos ORDER BY descricao ASC"
  );

  return resultado.rows as ExampleInterface[];
};

export const searchById = async (event: H3Event) => {
  const requestId = (await event.context.params?.id) as string;
  const resultado = await client.query("SELECT * FROM videos where id = $1", [
    requestId,
  ]);

  return resultado.rows[0] as ExampleInterface;
};

export const addData = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event);
    await client.query("INSERT INTO videos (descricao, url, data_postagem) VALUES ($1, $2, CURRENT_DATE)",
      [request.descricao, request.url,]);
    return "Vídeo adicionado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: "Erro ao criar video."
    });
  }
};

export const updateData = async (event: H3Event): Promise<string> => {
  try {
    const request = await readBody(event);
    await client.query("UPDATE videos SET descricao = $1, url = $2, data_postagem = CURRENT_DATE WHERE id = $3",
      [request.descricao, request.url, request.id]);
    return "Vídeo atualizado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: "Erro ao atualizar video."
    });
  }
};

export const removeData = async (event: H3Event): Promise<string> => {
  try {
    const requestId = (await event.context.params?.id) as string;
    await client.query("DELETE FROM videos WHERE id = $1",
      [requestId]);
    return "Vídeo deletado com sucesso!";
  } catch (error) {
    throw createError({
      statusCode: 500,
      name: "Erro ao deletar video."
    });
  }
};