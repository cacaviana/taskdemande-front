dmx.config({
  "Aprovar_tasks": {
    "repeat_task": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "usuario_id"
        },
        {
          "type": "number",
          "name": "tarefa_id"
        },
        {
          "type": "datetime",
          "name": "data_atribuicao"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "data_enviada"
        },
        {
          "type": "datetime",
          "name": "data_aprovada"
        },
        {
          "type": "text",
          "name": "info_envio"
        },
        {
          "type": "text",
          "name": "nome_tarefa"
        },
        {
          "type": "text",
          "name": "descricao_tarefa"
        },
        {
          "type": "text",
          "name": "nivel_tarefa"
        },
        {
          "type": "text",
          "name": "nome_usuario"
        },
        {
          "type": "text",
          "name": "foto_usuario"
        }
      ],
      "outputType": "array"
    },
    "reapeat_listar_aprovacao": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "usuario_id"
        },
        {
          "type": "number",
          "name": "tarefa_id"
        },
        {
          "type": "datetime",
          "name": "data_atribuicao"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "data_enviada"
        },
        {
          "type": "datetime",
          "name": "data_aprovada"
        },
        {
          "type": "text",
          "name": "info_envio"
        },
        {
          "type": "text",
          "name": "nome_tarefa"
        },
        {
          "type": "text",
          "name": "descricao_tarefa"
        },
        {
          "type": "text",
          "name": "nivel_tarefa"
        },
        {
          "type": "text",
          "name": "nome_usuario"
        },
        {
          "type": "text",
          "name": "foto_usuario"
        }
      ],
      "outputType": "array"
    }
  },
  "painel_admin": {
    "data_detail_detalhes_task": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "usuario_id"
        },
        {
          "type": "number",
          "name": "tarefa_id"
        },
        {
          "type": "datetime",
          "name": "data_atribuicao"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "data_enviada"
        },
        {
          "type": "datetime",
          "name": "data_aprovada"
        },
        {
          "type": "text",
          "name": "info_envio"
        },
        {
          "type": "text",
          "name": "nome_tarefa"
        },
        {
          "type": "text",
          "name": "descricao_tarefa"
        },
        {
          "type": "text",
          "name": "nivel_tarefa"
        },
        {
          "type": "text",
          "name": "nome_usuario"
        },
        {
          "type": "text",
          "name": "foto_usuario"
        }
      ],
      "outputType": "array"
    },
    "data_detail_detalhes_envio": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "usuario_id"
        },
        {
          "type": "number",
          "name": "tarefa_id"
        },
        {
          "type": "datetime",
          "name": "data_atribuicao"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "datetime",
          "name": "data_enviada"
        },
        {
          "type": "datetime",
          "name": "data_aprovada"
        },
        {
          "type": "text",
          "name": "info_envio"
        },
        {
          "type": "text",
          "name": "nome_tarefa"
        },
        {
          "type": "text",
          "name": "descricao_tarefa"
        },
        {
          "type": "text",
          "name": "nivel_tarefa"
        },
        {
          "type": "text",
          "name": "nome_usuario"
        },
        {
          "type": "text",
          "name": "foto_usuario"
        }
      ],
      "outputType": "array"
    }
  },
  "alunos": {
    "repeat_todos_alunos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "text",
          "name": "senha"
        },
        {
          "type": "text",
          "name": "cargo"
        },
        {
          "type": "text",
          "name": "telefone"
        },
        {
          "type": "text",
          "name": "foto"
        },
        {
          "type": "number",
          "name": "permissao"
        }
      ],
      "outputType": "array"
    }
  }
});
