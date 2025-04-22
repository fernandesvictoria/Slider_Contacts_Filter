# 📱 Aplicativo de Filtro de Contatos

Um aplicativo mobile em **React Native** que busca e filtra seus contatos com base no número mínimo de telefones que cada contato possui.

---

## ✨ Funcionalidades

- 📞 **Busca contatos** do dispositivo (requer permissão)
- 🔍 **Filtra contatos** com base no número mínimo de telefones
- 🎚️ **Slider interativo** para ajustar o critério de filtragem

---

## 🛠️ Tecnologias Utilizadas

- **React Native** – Framework para desenvolvimento mobile
- **Expo** – Plataforma para desenvolvimento React Native
- **expo-contacts** – Para gerenciamento de contatos
- **@react-native-community/slider** – Componente de slider

---

## 📥 Instalação

```bash
# 1. Clone o repositório:
git clone https://github.com/seuusuario/filtro-contatos.git
cd filtro-contatos

# 2. Instale as dependências:
npm install
# ou
yarn install

# 3. Inicie o servidor de desenvolvimento:
npx expo start
🔐 Permissões Necessárias
Este aplicativo requer permissão para acessar os contatos do seu dispositivo. O app solicitará essa permissão ao ser iniciado pela primeira vez.

📚 Dependências

Pacote	Função
react	Base do framework
react-native	Framework mobile
expo	Ferramentas e serviços
expo-contacts	Acesso aos contatos
@react-native-community/slider	Componente de slider

⚙️ Como Funciona
Solicita permissão para acessar seus contatos

Carrega contatos com seus números de telefone

Permite filtrar contatos com base em quantos números de telefone eles possuem (mínimo 1, máximo 5)

Exibe contatos em uma lista rolável com seus respectivos números



