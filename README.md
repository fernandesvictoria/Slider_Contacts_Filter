📱 Aplicativo de Filtro de Contatos
Um aplicativo mobile em React Native que busca e filtra seus contatos com base no número mínimo de telefones que cada contato possui.
✨ Funcionalidades

📞 Busca contatos do dispositivo (requer permissão)
🔍 Filtra contatos com base no número mínimo de telefones
🎚️ Slider interativo para ajustar o critério de filtragem
🌙 Interface com tema escuro, limpa e com cartões de contato fáceis de ler

🛠️ Tecnologias Utilizadas

React Native - Framework para desenvolvimento mobile
Expo - Plataforma para desenvolvimento React Native
expo-contacts - Para gerenciamento de contatos
@react-native-community/slider - Para o componente de slider

📥 Instalação
1. Clone o repositório:
bashgit clone https://github.com/seuusuario/filtro-contatos.git
cd filtro-contatos
2. Instale as dependências:
bashnpm install
# ou
yarn install
3. Inicie o servidor de desenvolvimento:
bashnpx expo start
🔐 Permissões Necessárias
Este aplicativo requer permissão para acessar os contatos do seu dispositivo. O aplicativo solicitará esta permissão quando for iniciado pela primeira vez.
📚 Dependências
PacoteFunçãoreactBase do frameworkreact-nativeFramework mobileexpoFerramentas e serviçosexpo-contactsAcesso aos contatos@react-native-community/sliderComponente de slider
⚙️ Como Funciona
O aplicativo segue este fluxo:

Solicita permissão para acessar seus contatos
Carrega contatos com seus números de telefone
Permite filtrar contatos com base em quantos números de telefone eles possuem (mínimo 1, máximo 5)
Exibe contatos em uma lista rolável com seus números de telefone associados
