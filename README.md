# 🤉 Jogo: Classes de Heróis

Projeto desenvolvido em **JavaScript**, com o objetivo de praticar **conceitos fundamentais de programação**, incluindo variáveis, operadores, laços de repetição, estruturas condicionais, funções, classes e objetos. Repositório de estudo.

---

## 🎯 Objetivo

Criar uma **classe genérica** que represente um herói de uma aventura, com as seguintes propriedades:

* `nome`
* `idade`
* `tipo` (ex: guerreiro, mago, monge, ninja)

Além disso, a classe deve conter um método chamado `atacar()`, responsável por exibir uma mensagem personalizada conforme o tipo de herói.

---

## ⚙️ Funcionalidades

* Criação de diferentes tipos de heróis;
* Cada tipo possui um **ataque único**;
* Exibição dinâmica da mensagem de ataque:

  ```
  O {tipo} atacou usando {ataque}.
  ```

### 🛡️ Tipos e ataques correspondentes:

| Tipo do Herói | Ataque utilizado |
| ------------- | ---------------- |
| Mago          | Magia            |
| Guerreiro     | Espada           |
| Monge         | Artes Marciais   |
| Ninja         | Shuriken         |

---

## 💻 Exemplo de Código

```javascript
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi("Kenshin", 29, "guerreiro");
heroi1.atacar(); // Saída: O guerreiro atacou usando espada.
```

---

## 🚀 Saída Esperada

```
O mago atacou usando magia.
O guerreiro atacou usando espada.
O monge atacou usando artes marciais.
O ninja atacou usando shuriken.
```

---

## 🧩 Conceitos Aplicados

* Declaração de **variáveis**
* Uso de **operadores**
* **Estruturas condicionais** (`if`, `else if`, `else`)
* **Funções** e **métodos**
* Criação e instância de **classes e objetos**
* **Saída formatada** no console

---

## 📚 Tecnologias Utilizadas

* **JavaScript (ES6+)**
* Ambiente de execução: Node.js ou navegador

---

## ✨ Autor

**Tainara Martins Carvalho**
👩‍💻 Desenvolvedora Front-End & Educadora
📧 [LinkedIn](https://www.linkedin.com/in/tainara-martins-carvalho) | [GitHub](https://github.com/tainara-m)

---
