# iUP Concept — Website pronto para GitHub Pages

Este pacote contém a versão atualizada do site da iUP Concept, com HTML/CSS/JS estáticos e a marca, endereço e WhatsApp preservados do projeto original.

## Como publicar

1. Extraia o conteúdo deste ZIP (o arquivo `index.html` deve ficar na raiz do repositório).
2. Envie **todos os arquivos e pastas** para um repositório GitHub (não apenas o ZIP).
3. No GitHub: **Settings > Pages > Build and deployment > Deploy from a branch > main > / (root) > Save**.
4. Aguarde a publicação automática da página pelo GitHub Pages. Também funciona em hospedagem estática tradicional.

A página não precisa de npm, React, compilação ou banco de dados.

## Incluído
- Hero com motion original, parallax e animação de entrada.
- Destaque imersivo iPhone 18 Pro Max e apresentação iPhone Duo.
- Vitrine de aparelhos com filtro: nova geração, outros modelos e prévia iPhone 18 convencional.
- Galeria interativa de todas as **8 gerações Pro Max**, do 11 Pro Max (2019) ao 18 Pro Max (2026), com seleção das **32 cores/acabamentos oficiais de lançamento e cores posteriores**. A representação interativa da traseira e das cores é ILUSTRATIVA, não um render fotográfico oficial Apple.
- Vídeos dos canais oficiais Apple Brasil embutidos do YouTube e carregados somente quando clicados.
- Integração WhatsApp com mensagem contextual ao modelo e cor selecionados.
- Navegação mobile, efeitos com redução de movimento, acessibilidade básica e SEO.
- Fotografias e imagens originais da loja preservadas.

## Dependências externas / direitos de uso

Fotografias de iPhone 18 Pro e Duo são exibidas por URL pública de material editorial Apple Newsroom. Elas **não estão no ZIP**; dependem de conexão, de disponibilidade das URLs e de eventuais restrições de uso/hotlink do fornecedor. O código usa imagens ilustrativas de fallback quando elas falham. Para operação comercial de longa duração, obtenha materiais aprovados/licenciados para revendedores e salve cópias autorizadas em `assets`, alterando os respectivos `src` em `index.html`.

Os filmes são incorporados via YouTube nos canais oficiais da Apple Brasil, sem cópia do vídeo no projeto, e podem ser indisponibilizados por seus proprietários. Animações, layout, 3D de cores e navegação foram programados especificamente para a iUP e não copiados do código Apple.

### Atenção ao iPhone 18 convencional
Até a data de criação (17/11/2026) não havia anúncio oficial do modelo iPhone 18 comum. A seção de prévia não usa imagens, cores, preços nem especificações inventadas. Revise após anúncio oficial.

### Disponibilidade de produtos
Este site é uma vitrine visual. Ele não anuncia estoque confirmado, preço, prazo ou associação oficial à Apple.

### Fontes
Apple Brasil (oficial):
- https://www.apple.com/br/iphone/
- https://www.apple.com/br/iphone-18-pro/
- https://www.apple.com/br/iphone-duo/
- https://www.apple.com/br/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/
- https://www.apple.com/br/newsroom/2026/09/apple-unveils-iphone-duo/
- https://support.apple.com/pt-br/108044
- https://www.youtube.com/watch?v=mG_MQL5OcA4 (Apple Brasil: iPhone 18 Pro)
- https://www.youtube.com/watch?v=IWgMVMBydjg (Apple Brasil: iPhone Duo)

## Alterar Whatsapp, imagens e textos

- Número do WhatsApp: `js/app.js` (`const WA='5519997395323'`).
- Marca e fotos da loja: `assets/`.
- Conteúdo do site: `index.html`.
- Estilos: `css/style.css`.
- Gerações e cores oficiais: objeto `models` em `js/app.js`.

**IMPORTANTE:** sempre confirme com a equipe da iUP os preços/estoque, parcelamento e autorização para utilização de materiais de terceiros.
