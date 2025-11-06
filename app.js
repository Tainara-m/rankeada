import React, { useState } from 'react';
import { Sword, Wand2, Hand, Star } from 'lucide-react';

// Classe Heroi conforme especificação
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    
    // Estrutura de decisão para determinar o ataque
    if (this.tipo === "mago") {
      ataque = "usou magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "usou espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    }
    
    return `o ${this.tipo} atacou usando ${ataque}`;
  }
}

export default function JogoHerois() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [tipo, setTipo] = useState('guerreiro');
  const [mensagens, setMensagens] = useState([]);

  const tiposHeroi = [
    { valor: 'guerreiro', nome: 'Guerreiro', icon: Sword, cor: 'bg-red-500' },
    { valor: 'mago', nome: 'Mago', icon: Wand2, cor: 'bg-purple-500' },
    { valor: 'monge', nome: 'Monge', icon: Hand, cor: 'bg-orange-500' },
    { valor: 'ninja', nome: 'Ninja', icon: Star, cor: 'bg-gray-700' }
  ];

  const criarHeroiEAtacar = () => {
    if (!nome || !idade) {
      alert('Preencha nome e idade!');
      return;
    }

    // Criando objeto a partir da classe
    const heroi = new Heroi(nome, idade, tipo);
    
    // Chamando o método atacar
    const mensagemAtaque = heroi.atacar();
    
    // Adicionando à lista de mensagens
    setMensagens([...mensagens, {
      id: Date.now(),
      texto: mensagemAtaque,
      heroi: { nome: heroi.nome, idade: heroi.idade, tipo: heroi.tipo }
    }]);
  };

  const simularBatalha = () => {
    const herois = [
      new Heroi("Gandalf", 2000, "mago"),
      new Heroi("Conan", 35, "guerreiro"),
      new Heroi("Bruce Lee", 32, "monge"),
      new Heroi("Ryu", 28, "ninja")
    ];

    const novasMensagens = [];
    
    // Laço de repetição
    for (let i = 0; i < herois.length; i++) {
      novasMensagens.push({
        id: Date.now() + i,
        texto: herois[i].atacar(),
        heroi: { nome: herois[i].nome, idade: herois[i].idade, tipo: herois[i].tipo }
      });
    }

    setMensagens([...mensagens, ...novasMensagens]);
  };

  const limpar = () => setMensagens([]);

  const getIconeTipo = (tipo) => {
    const tipoObj = tiposHeroi.find(t => t.valor === tipo);
    return tipoObj ? tipoObj : tiposHeroi[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">⚔️ Arena dos Heróis</h1>
        <p className="text-gray-300 text-center mb-8">Crie seu herói e entre em combate!</p>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-4">Criar Herói</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-white text-sm mb-2 block">Nome do Herói</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Aragorn"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            <div>
              <label className="text-white text-sm mb-2 block">Idade</label>
              <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                placeholder="Ex: 25"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-white text-sm mb-3 block">Tipo de Herói</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {tiposHeroi.map(t => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.valor}
                    onClick={() => setTipo(t.valor)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      tipo === t.valor 
                        ? `${t.cor} border-white shadow-lg scale-105` 
                        : 'bg-white/10 border-white/30 hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                    <span className="text-white text-sm font-semibold">{t.nome}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={criarHeroiEAtacar}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              ⚔️ Criar e Atacar
            </button>
            <button
              onClick={simularBatalha}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              🎮 Simular Batalha
            </button>
            {mensagens.length > 0 && (
              <button
                onClick={limpar}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
              >
                🗑️
              </button>
            )}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-xl font-bold text-white mb-4">📜 Log de Combate</h2>
          
          {mensagens.length === 0 ? (
            <p className="text-gray-400 text-center py-8">Nenhum ataque registrado ainda...</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {mensagens.map(msg => {
                const tipoInfo = getIconeTipo(msg.heroi.tipo);
                const Icon = tipoInfo.icon;
                return (
                  <div key={msg.id} className="bg-white/5 rounded-lg p-4 border border-white/20 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`${tipoInfo.cor} p-2 rounded-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-white font-semibold">{msg.heroi.nome}</span>
                        <span className="text-gray-400 text-sm ml-2">({msg.heroi.idade} anos)</span>
                      </div>
                    </div>
                    <p className="text-green-400 font-mono text-sm ml-12">💥 {msg.texto}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
